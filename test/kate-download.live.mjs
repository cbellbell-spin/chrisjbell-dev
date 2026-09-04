import assert from 'node:assert/strict';
import test from 'node:test';
import { findZipAsset } from '../src/lib/kate-releases.mjs';

const siteUrl = process.env.KATE_DOWNLOAD_URL ?? 'https://chrisjbell.dev/kate/download';
const apiUrl = 'https://api.github.com/repos/cbellbell-spin/kate-career-coach/releases/latest';
const expectedFallback = 'https://github.com/cbellbell-spin/kate-career-coach/releases/latest';

test('the deployed page has a durable fallback and its latest ZIP exists', async () => {
  const [pageResponse, releaseResponse] = await Promise.all([
    fetch(siteUrl),
    fetch(apiUrl, { headers: { Accept: 'application/vnd.github+json' } }),
  ]);

  assert.equal(pageResponse.status, 200, `${siteUrl} must load`);
  assert.equal(releaseResponse.status, 200, `${apiUrl} must load`);

  const [html, release] = await Promise.all([pageResponse.text(), releaseResponse.json()]);
  const zipAsset = findZipAsset(release);

  assert.match(html, new RegExp(`href="${expectedFallback}"`));
  assert.ok(zipAsset, `release ${release.tag_name} must contain a ZIP asset`);

  const assetResponse = await fetch(zipAsset.browser_download_url, { method: 'HEAD' });
  assert.equal(assetResponse.status, 200, `${zipAsset.browser_download_url} must load`);
});
