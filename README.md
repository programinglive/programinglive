# ProgramingLive

ProgramingLive is a modern, light-themed website that presents learning programs, open-source projects, and resources for Indonesian developers. The project uses the Next.js App Router, React, TypeScript, and Tailwind CSS, with legal documentation and shared site components.

## Features

- **Responsive hero and program overview** with clear calls to action.
- **Reusable layout components** for the navbar and footer across marketing and legal pages.
- **Dedicated legal pages** for Privacy, Community Guidelines, and Terms of Service.
- **Sponsors section** driven by brand-compliant SVG assets.
- **Automated release workflow** powered by `@programinglive/commiter`.

## Getting Started

```bash
npm ci
npm run dev
```

- The site runs at [http://localhost:3000](http://localhost:3000) during development.
- Run the link regression tests with `npm test`.
- Build for production with `npm run build`.
- Run the production build locally with `npm run start`.
- Generate a release with semantic versioning using `npm run release[:major|:minor|:patch]`.

## Project Structure

```
├── app/                 # Next.js routes and global styles
├── components/          # Shared navbar and footer components
├── public/              # Static assets and sponsor logos
├── docs/
│   └── release-notes/   # Cumulative release notes maintained by the release script
├── scripts/             # Release automation helpers
└── README.md
```

## Releases

Releases are automated via `@programinglive/commiter` and `standard-version`. Running `npm run release:patch` (or `:minor`, `:major`) will:

1. Run the link regression suite (`npm test`).
2. Bump versions in `package.json`/`package-lock.json`.
3. Update `CHANGELOG.md` and `docs/release-notes/RELEASE_NOTES.md`.
4. Commit and tag the release.

After the script finishes, push with tags:

```bash
git push --follow-tags origin main
```

GitHub Actions verifies pull requests and `main` updates. A pushed version tag deploys to Netlify production after the checks pass. Configure the `NETLIFY_AUTH_TOKEN` repository secret before creating a production release; see [deployment instructions](./docs/DEPLOYMENT.md).

## Contributing

Please review [CONTRIBUTING.md](./CONTRIBUTING.md) for local setup, branch, and PR guidelines. By participating, you agree to uphold the [Code of Conduct](./CODE_OF_CONDUCT.md).

## License

This project is licensed under the [MIT License](./LICENSE).
