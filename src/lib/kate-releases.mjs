export const RELEASES_API_URL =
  'https://api.github.com/repos/cbellbell-spin/kate-career-coach/releases?per_page=5';
export const LATEST_RELEASE_URL =
  'https://github.com/cbellbell-spin/kate-career-coach/releases/latest';

export function selectLatestStableRelease(releases) {
  if (!Array.isArray(releases)) return null;

  return (
    releases
      .filter((release) => !release.draft && !release.prerelease)
      .sort((a, b) => Date.parse(b.published_at) - Date.parse(a.published_at))[0] ?? null
  );
}

export function findZipAsset(release) {
  if (!Array.isArray(release?.assets)) return null;

  return release.assets.find((asset) => asset.name.endsWith('.zip')) ?? null;
}

export function formatReleaseDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function renderReleaseMarkdown(text) {
  if (!text) return '';

  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/^### (.*$)/gim, '<h3 class="mt-6 mb-2 text-lg font-semibold">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="mt-8 mb-3 text-xl font-semibold">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="mt-8 mb-4 text-2xl font-bold">$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^- (.*$)/gim, '<li class="ml-4">$1</li>')
    .replace(/\n\n/g, '</p><p class="my-3">')
    .replace(
      /`([^`]+)`/g,
      '<code class="border border-border bg-surface px-1.5 py-0.5 text-sm">$1</code>',
    );
}
