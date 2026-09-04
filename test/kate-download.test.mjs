import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import {
  findZipAsset,
  renderReleaseMarkdown,
  selectLatestStableRelease,
} from '../src/lib/kate-releases.mjs';

const pageUrl = new URL('../dist/kate/download/index.html', import.meta.url);
const releasesUrl = 'https://github.com/cbellbell-spin/kate-career-coach/releases';
const html = await readFile(pageUrl, 'utf8');

test('the built download page does not freeze a versioned release asset', () => {
  assert.doesNotMatch(
    html,
    /https:\/\/github\.com\/cbellbell-spin\/kate-career-coach\/releases\/download\//,
  );
  assert.match(html, new RegExp(`href="${releasesUrl}/latest"`));
});

test('the built download page refreshes release details in the browser', () => {
  assert.match(html, /data-kate-release-name/);
  assert.match(html, /data-kate-download-url/);
  assert.match(html, /api\.github\.com\/repos\/cbellbell-spin\/kate-career-coach\/releases/);
});

test('latest release selection ignores drafts and prereleases', () => {
  const stable = {
    tag_name: 'v1.0.0',
    published_at: '2026-08-01T00:00:00Z',
    draft: false,
    prerelease: false,
  };
  const releases = [
    { ...stable, tag_name: 'v0.9.0', published_at: '2026-07-01T00:00:00Z' },
    { ...stable, tag_name: 'v1.1.0-beta', prerelease: true, published_at: '2026-09-01T00:00:00Z' },
    stable,
  ];

  assert.equal(selectLatestStableRelease(releases), stable);
});

test('ZIP selection returns the release ZIP rather than another asset', () => {
  const zip = {
    name: 'kate-career-coach-1.0.0.zip',
    browser_download_url: 'https://example.test/kate.zip',
  };
  const release = { assets: [{ name: 'checksums.txt' }, zip] };

  assert.equal(findZipAsset(release), zip);
  assert.equal(findZipAsset({ assets: [] }), null);
});

test('release Markdown is formatted without trusting embedded HTML', () => {
  assert.equal(
    renderReleaseMarkdown('**Safe** <script>alert(1)</script>'),
    '<strong>Safe</strong> &lt;script&gt;alert(1)&lt;/script&gt;',
  );
});
