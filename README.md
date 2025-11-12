# ProgramingLive

ProgramingLive is a modern, light-themed web experience that showcases how the community grows Indonesian developers through structured programs, collaborative sprints, and partner-backed support. The project is built with Vite, TypeScript, and Tailwind CSS, and ships with polished marketing pages plus legal documentation.

## Features

- **Responsive hero and program overview** with clear calls to action.
- **Reusable layout components** for the navbar and footer across marketing and legal pages.
- **Dedicated legal pages** for Privacy, Community Guidelines, and Terms of Service.
- **Sponsors section** driven by brand-compliant SVG assets.
- **Automated release workflow** powered by `@programinglive/commiter`.

## Getting Started

```bash
npm install
npm run dev
```

- The site runs at [http://localhost:5173](http://localhost:5173) during development.
- Build for production with `npm run build`.
- Generate a release with semantic versioning using `npm run release[:major|:minor|:patch]`.

## Project Structure

```
├── public/              # Static assets (favicons, sponsor logos, og images)
├── src/
│   ├── components/      # Shared navbar and footer components
│   ├── main.ts          # Landing page entry
│   ├── privacy.ts       # Privacy policy page
│   ├── guidelines.ts    # Community guidelines page
│   └── terms.ts         # Terms of service page
├── docs/
│   └── release-notes/   # Cumulative release notes maintained by the release script
├── scripts/             # Release automation helpers
└── README.md
```

## Releases

Releases are automated via `@programinglive/commiter` and `standard-version`. Running `npm run release:patch` (or `:minor`, `:major`) will:

1. Run the test suite placeholder (`npm test`).
2. Bump versions in `package.json`/`package-lock.json`.
3. Update `CHANGELOG.md` and `docs/release-notes/RELEASE_NOTES.md`.
4. Commit and tag the release.

After the script finishes, push with tags:

```bash
git push --follow-tags origin main
```

## Contributing

Please review [CONTRIBUTING.md](./CONTRIBUTING.md) for local setup, branch, and PR guidelines. By participating, you agree to uphold the [Code of Conduct](./CODE_OF_CONDUCT.md).

## License

This project is licensed under the [MIT License](./LICENSE).
