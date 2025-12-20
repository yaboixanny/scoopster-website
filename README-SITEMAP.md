# Sitemap Generator

This project includes an automatic sitemap generator that scans all HTML files and creates an SEO-optimized sitemap.xml file.

## How to Use

### Generate Sitemap

Run the sitemap generator whenever you add or update content:

```bash
python3 generate-sitemap.py
```

Or if you prefer using Node.js:

```bash
node generate-sitemap.js
```

### When to Regenerate

You should regenerate the sitemap whenever you:
- Add new pages to the website
- Update existing page content
- Change page structure or URLs
- Before deploying to production

### Automatic Priority System

The generator automatically assigns SEO priorities based on page type:

- **Homepage** (`/`): Priority 1.0, Weekly updates
- **Service Pages** (`/services/*`): Priority 0.9, Monthly updates
- **Service Area Pages** (`/service-areas/*`): Priority 0.9, Monthly updates
- **Pricing Page** (`/pricing/`): Priority 0.8, Monthly updates
- **Contact Page** (`/contact/`): Priority 0.8, Monthly updates
- **About Page** (`/about/`): Priority 0.7, Monthly updates
- **Other Pages**: Priority 0.6, Monthly updates

### Output

The generator creates `sitemap.xml` with:
- All HTML pages in your project
- Automatic last-modified dates
- SEO-optimized priorities
- Proper change frequencies
- Clean URLs (converts index.html to directory format)

### Submit to Search Engines

After generating the sitemap:

1. **Google Search Console**
   - Go to https://search.google.com/search-console
   - Select your property
   - Navigate to Sitemaps
   - Submit: `https://scoopster.ca/sitemap.xml`

2. **Bing Webmaster Tools**
   - Go to https://www.bing.com/webmasters
   - Submit your sitemap URL

### Customization

To customize priorities or change frequencies, edit the `CONFIG` section in `generate-sitemap.py`:

```python
'url_config': {
    '/index.html': {'priority': '1.0', 'changefreq': 'weekly'},
    '/services/': {'priority': '0.9', 'changefreq': 'monthly'},
    # Add your custom configurations here
}
```

### Excluded Files

The generator automatically excludes:
- Files in `node_modules/`
- Files in `.git/`
- `404.html` pages

To exclude additional files, edit the `exclude_patterns` in the config.

## Integration with Deployment

### Option 1: Manual (Recommended for Static Sites)

Run the generator before each deployment:

```bash
python3 generate-sitemap.py
git add sitemap.xml
git commit -m "Update sitemap"
git push
```

### Option 2: Git Hook

Create a pre-commit hook to auto-generate:

```bash
#!/bin/sh
python3 generate-sitemap.py
git add sitemap.xml
```

### Option 3: Deployment Script

Add to your deployment workflow:

```bash
# Before deploying
python3 generate-sitemap.py

# Deploy as usual
# netlify deploy --prod
# or vercel --prod
# etc.
```

## Verification

After generating, you can verify the sitemap:

1. Open `sitemap.xml` in a browser
2. Check it validates at: https://www.xml-sitemaps.com/validate-xml-sitemap.html
3. Ensure all important pages are included
4. Verify URLs are correctly formatted

## Troubleshooting

**Missing pages?**
- Ensure the page has a `.html` extension
- Check it's not in an excluded directory
- Verify the file exists in the project

**Wrong priorities?**
- Check the `url_config` matches your URL patterns
- The script uses substring matching for patterns

**Dates not updating?**
- The last-modified date comes from file system timestamps
- Touch files or make edits to update the timestamp
