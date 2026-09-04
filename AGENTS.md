# Agent instructions

## Kate download page

Changes to `src/pages/kate/download.astro` or `src/lib/kate-releases.mjs` must preserve these contracts:

- The generated HTML must never embed a version-specific GitHub release asset. Release assets can be deleted or replaced after a site build.
- The no-JavaScript and GitHub-API failure fallback must remain `https://github.com/cbellbell-spin/kate-career-coach/releases/latest`.
- Browser-side release selection must ignore drafts and prereleases and choose the newest stable release by `published_at`.
- A direct download may be shown only when that release contains a ZIP asset; otherwise keep the durable fallback.

Before handing off a change, run `npm test`. After deploying, run `npm run test:kate-download:live`; it verifies that the production page loads, retains its fallback, and that GitHub's current latest release has a reachable ZIP asset.
