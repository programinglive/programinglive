# Site audit findings and fixes

This record explains the changes made after the first `devwf audit` run against
`https://programinglive.com` on 21 November 2026.

## What the audit reported

The report scored 77/100 with 3 errors and 8 warnings:

| Finding | Severity | Resolution |
| --- | --- | --- |
| `headers.csp_missing` | error | Added a CSP baseline in `netlify.toml` |
| `links.broken_link` for `/terms.html` and `/guidelines.html` | error | Added App Router pages and 301 redirects for the legacy URLs |
| `headers.frame_protection_missing` | warn | `X-Frame-Options: DENY` plus `frame-ancestors 'none'` |
| `headers.referrer_policy_missing` | warn | `Referrer-Policy: strict-origin-when-cross-origin` |
| `headers.permissions_policy_missing` | warn | `Permissions-Policy` disabling unused device features |
| `seo.og_image_dimensions` | warn | Published a real 1200x630 `public/og-image.png` |
| `seo.twitter_card` | warn | Switched to `summary_large_image` |
| `a11y.input_label_missing` on two forms | warn | No site change; the controls are wrapped in real `<label>` elements |

The last item was a false positive in the audit tool: an implicit label (a
control nested inside `<label>`) is valid accessible naming, but the static
check only recognised explicit `for`/`id` pairs. `tests/site-audit-findings.test.js`
now protects the correct markup, and the tool check should be corrected in a
separate dev-workflow change.

## Header baseline

`netlify.toml` applies the header set to `/*`. The CSP keeps `'unsafe-inline'`
for scripts and styles because Next.js ships an inline bootstrap and the site
injects JSON-LD inline. It sets `object-src 'none'`, `base-uri 'self'`,
`frame-ancestors 'none'`, and restricts form actions to the site and `mailto:`.

## Verify

```bash
npm test
npm run build
git diff --check
devwf audit --url https://programinglive.com --json
```

The last command needs the `site_audit` capability from the dev-workflow
repository. It is read-only: bounded GET requests, no browser and no form
submission.

## Deploy note

The first tagged release (`v0.2.3`) built and tested successfully but the
Netlify deploy failed: `netlify deploy --build` detected two frameworks because
the repository still contained the unused Vite prototype (`index.html`,
`src/`, and the `vite` devDependency) alongside the Next.js App Router app. The
prototype was removed and `tailwind.config.js` content globs were narrowed to
`app/` and `components/`, so auto-detection now sees only Next.js.
