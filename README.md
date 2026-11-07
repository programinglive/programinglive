# ProgramingLive

ProgramingLive is an open learning and technology education platform building pathways from learning to opportunity. The website serves learners and institutional partners through Next.js App Router, React, TypeScript, and Tailwind CSS, with English and Indonesian routes, public impact and roadmap information, programs, open source, and legal documentation.

## Features

- **Responsive hero and program overview** with clear calls to action.
- **Reusable layout and design components** shared across programs, learning, impact, partner, open-source, and roadmap pages.
- **Bilingual public site** with English-first and Indonesian routes.
- **Public roadmap and development bulletin** shared with Discord.
- **Synthetic production pilot** covering learner, institution, funder, and contributor journeys.
- **Dedicated legal pages** for Privacy, Community Guidelines, and Terms of Service.
- **Sponsors section** driven by brand-compliant SVG assets.
- **Automated release workflow** powered by `@programinglive/commiter`.

## Getting Started

```bash
npm ci
npm run dev
```

- The site runs at [http://localhost:3000](http://localhost:3000) during development.
- Run the regression suite with `npm test`.
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

## Canonical Infrastructure & Deployments

For the authoritative register of all canonical domains, active Netlify fleet, GCP Load Balancer topology, and locked services (including BOTOL Discord verification), see the [Canonical Domain & Deployment Registry](./docs/PROJECT_DEPLOYMENTS.md).

## Contributing

Please review [CONTRIBUTING.md](./CONTRIBUTING.md) for local setup and [DEVELOPMENT_STANDARD.md](./DEVELOPMENT_STANDARD.md) for product, verification, release, and bulletin gates. By participating, you agree to uphold the [Code of Conduct](./CODE_OF_CONDUCT.md).

## License

This project is licensed under the [MIT License](./LICENSE).
