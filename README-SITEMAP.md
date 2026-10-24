# Sitemap maintenance

Netlify runs `node generate-sitemap.js` before every build, keeping the deployed
sitemap in sync whenever pages are added, changed, or removed. No scheduled job
is needed: sitemap updates happen with the content deployment.

For local previews or deployments outside Netlify, run:

```sh
node generate-sitemap.js
```

`python3 generate-sitemap.py` calls the same generator and requires Node.js.
Run the command before deploying static files directly, and include the updated
`sitemap.xml` in the upload or commit.

The generator scans public HTML files, including `/faq/`, and converts
`index.html` paths to directory URLs. It excludes hidden directories,
`node_modules`, `404.html`, and `blog-post-template.html`. Removed pages such as
Newmarket disappear automatically. Keep templates out of public page directories
or add them to `excludePatterns` in `generate-sitemap.js`.

Last-modified dates use each page's latest Git commit date. Locally modified or
untracked files, and source archives without Git history, use file timestamps.
A deployment alone does not change dates when Git history is available.

Configure URL priorities and change frequencies in `generate-sitemap.js`.
The homepage has priority 1.0; service pages and service areas have 0.9;
pricing and contact have 0.8; FAQ and about have 0.7; other pages have 0.6.

After deployment, the sitemap is available at
https://scoopster.ca/sitemap.xml (also declared in `robots.txt`).
