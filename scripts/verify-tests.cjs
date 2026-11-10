#!/usr/bin/env node

/**
 * Commiter - Pre-commit Test Verification
 * 
 * Enforces that test cases exist and pass before allowing commits.
 * In the modern era of AI-assisted engineering, AI is fully capable of
 * generating tests. Commits without tests are blocked.
 */

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const IGNORED_DIRS = new Set([
  'node_modules',
  '.git',
  '.husky',
  'dist',
  'build',
  'out',
  '.next',
  '.nuxt',
  '.svelte-kit',
  'coverage',
  'vendor',
  '.cache',
  'tmp',
  'temp',
  '.idea',
  '.vscode'
]);

const TEST_FILENAME_REGEX = /\.(test|spec)\.(js|ts|jsx|tsx|mjs|cjs)$/i;
const TEST_CODE_EXT_REGEX = /\.(js|ts|jsx|tsx|mjs|cjs|php|py|go|rs)$/i;
const PHP_TEST_REGEX = /test\.php$/i;
const PYTHON_TEST_REGEX = /^(test_.*|.*_test)\.py$/i;
const GO_TEST_REGEX = /_test\.go$/i;
const RUST_TEST_REGEX = /\.rs$/i;

function isTestFile(filePath, rootDir) {
  const relative = path.relative(rootDir, filePath);
  const normalized = relative.replace(/\\/g, '/');
  const filename = path.basename(filePath);

  // Check specific test file naming patterns
  if (TEST_FILENAME_REGEX.test(filename)) return true;
  if (PHP_TEST_REGEX.test(filename)) return true;
  if (PYTHON_TEST_REGEX.test(filename)) return true;
  if (GO_TEST_REGEX.test(filename)) return true;

  // Check files inside dedicated test directories (e.g. test/, tests/, __tests__/)
  const parts = normalized.split('/');
  const hasTestDir = parts.some(p => p === 'test' || p === 'tests' || p === '__tests__');
  if (hasTestDir && TEST_CODE_EXT_REGEX.test(filename)) {
    return true;
  }

  return false;
}

function findTestFiles(rootDir = process.cwd()) {
  const results = [];

  function traverse(currentDir) {
    let entries;
    try {
      entries = fs.readdirSync(currentDir, { withFileTypes: true });
    } catch (e) {
      return;
    }

    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (!IGNORED_DIRS.has(entry.name)) {
          traverse(path.join(currentDir, entry.name));
        }
      } else if (entry.isFile()) {
        const fullPath = path.join(currentDir, entry.name);
        if (isTestFile(fullPath, rootDir)) {
          results.push(fullPath);
        }
      }
    }
  }

  traverse(rootDir);
  return results;
}

const LOCKFILE_PREFERENCES = [
  { manager: 'pnpm', file: 'pnpm-lock.yaml' },
  { manager: 'yarn', file: 'yarn.lock' },
  { manager: 'bun', file: 'bun.lock' },
  { manager: 'npm', file: 'package-lock.json' }
];

function detectPackageManager({ env = process.env, cwd = process.cwd() } = {}) {
  const userAgent = env.npm_config_user_agent || '';
  if (userAgent.startsWith('pnpm/')) return 'pnpm';
  if (userAgent.startsWith('yarn/')) return 'yarn';
  if (userAgent.startsWith('bun/')) return 'bun';

  for (const { manager, file } of LOCKFILE_PREFERENCES) {
    if (fs.existsSync(path.join(cwd, file))) {
      return manager;
    }
  }

  return 'npm';
}

function isPlaceholderTestScript(script) {
  if (!script || typeof script !== 'string') return true;
  const trimmed = script.trim();
  if (!trimmed) return true;
  if (trimmed === 'echo "No tests specified"' || trimmed === "echo 'No tests specified'") return true;
  if (trimmed.startsWith('echo "Error: no test specified"') || trimmed.startsWith("echo 'Error: no test specified'")) return true;
  if (trimmed === 'exit 0' || trimmed === 'exit 1') return true;
  return false;
}

function detectTestCommand({ cwd = process.cwd(), env = process.env } = {}) {
  // Check package.json
  const packageJsonPath = path.join(cwd, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const scripts = packageJson.scripts || {};
      if (scripts.test && !isPlaceholderTestScript(scripts.test)) {
        const packageManager = detectPackageManager({ env, cwd });
        return { command: packageManager, args: ['test'] };
      }
    } catch (e) {
      // Ignore JSON parse errors
    }
  }

  // Check composer.json for PHP
  const composerJsonPath = path.join(cwd, 'composer.json');
  if (fs.existsSync(composerJsonPath)) {
    try {
      const composerJson = JSON.parse(fs.readFileSync(composerJsonPath, 'utf8'));
      const scripts = composerJson.scripts || {};
      if (scripts.test) {
        return { command: 'composer', args: ['test'] };
      }
    } catch (e) {
      // Ignore JSON parse errors
    }
    // Check vendor binaries
    if (fs.existsSync(path.join(cwd, 'vendor', 'bin', 'paratest'))) {
      return { command: 'vendor/bin/paratest', args: ['--processes=4', '--runner=WrapperRunner'] };
    }
    if (fs.existsSync(path.join(cwd, 'vendor', 'bin', 'pest'))) {
      return { command: 'vendor/bin/pest', args: [] };
    }
    if (fs.existsSync(path.join(cwd, 'vendor', 'bin', 'phpunit'))) {
      return { command: 'vendor/bin/phpunit', args: [] };
    }
  }

  // Check Python (pytest)
  if (fs.existsSync(path.join(cwd, 'pyproject.toml')) || fs.existsSync(path.join(cwd, 'pytest.ini')) || fs.existsSync(path.join(cwd, '.pytest_cache'))) {
    const venvPytestWin = path.join(cwd, '.venv', 'Scripts', 'pytest.exe');
    const venvPytestPosix = path.join(cwd, '.venv', 'bin', 'pytest');
    if (fs.existsSync(venvPytestWin)) {
      return { command: venvPytestWin, args: [] };
    }
    if (fs.existsSync(venvPytestPosix)) {
      return { command: venvPytestPosix, args: [] };
    }
    return { command: 'pytest', args: [] };
  }

  return null;
}

function verifyTests({
  cwd = process.cwd(),
  env = process.env,
  spawn = spawnSync,
  logger = console
} = {}) {
  logger.log('🔍 [Commiter] Verifying test cases before commit...');

  const testFiles = findTestFiles(cwd);

  if (testFiles.length === 0) {
    logger.error('\n❌ [Commiter] Pre-commit check failed: No test cases found!');
    logger.error('🚫 Commits are blocked because every project must have test cases.');
    logger.error('🤖 AI-assisted development standard: AI can and must generate test cases for all code changes.');
    logger.error('👉 Please create test cases (e.g. in test/, *.test.js, *.spec.ts, etc.) before committing.\n');
    return {
      success: false,
      reason: 'NO_TEST_CASES',
      error: 'No test cases found in project'
    };
  }

  const testCommand = detectTestCommand({ cwd, env });

  if (!testCommand) {
    logger.error(`\n❌ [Commiter] Pre-commit check failed: Found ${testFiles.length} test file(s), but no valid test script is configured!`);
    logger.error('👉 Please configure a real "test" script in package.json (e.g. "node --test", "jest", "vitest") or composer.json.\n');
    return {
      success: false,
      reason: 'NO_TEST_SCRIPT',
      testFilesCount: testFiles.length
    };
  }

  logger.log(`🧪 [Commiter] Found ${testFiles.length} test file(s). Running tests with ${testCommand.command} ${testCommand.args.join(' ')}...`);

  const result = spawn(testCommand.command, testCommand.args, {
    stdio: 'inherit',
    env,
    cwd,
    shell: process.platform === 'win32'
  });

  if (result && typeof result.status === 'number' && result.status !== 0) {
    logger.error('\n❌ [Commiter] Pre-commit check failed: Test suite failed!');
    logger.error('👉 Fix all failing tests before committing.\n');
    return {
      success: false,
      reason: 'TESTS_FAILED',
      status: result.status
    };
  }

  logger.log(`✅ [Commiter] Pre-commit verification passed! (${testFiles.length} test file(s) found, tests passed)\n`);
  return {
    success: true,
    testFilesCount: testFiles.length
  };
}

if (require.main === module) {
  const result = verifyTests();
  if (!result.success) {
    process.exit(1);
  }
}

module.exports = {
  findTestFiles,
  detectTestCommand,
  verifyTests,
  isPlaceholderTestScript
};
