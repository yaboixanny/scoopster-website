#!/usr/bin/env node

/**
 * Sitemap Generator for Scoopster Website
 *
 * This script automatically generates a sitemap.xml file by scanning
 * all HTML files in the project directory.
 *
 * Usage:
 *   node generate-sitemap.js
 *
 * Or make it executable and run:
 *   chmod +x generate-sitemap.js
 *   ./generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  baseUrl: 'https://scoopster.ca',
  outputFile: 'sitemap.xml',
  excludePatterns: [
    /node_modules/,
    /\.git/,
    /404\.html/,
  ],
  // Priority and change frequency by path pattern
  urlConfig: {
    '/index.html': { priority: '1.0', changefreq: 'weekly' },
    '/services/': { priority: '0.9', changefreq: 'monthly' },
    '/service-areas/': { priority: '0.9', changefreq: 'monthly' },
    '/pricing/': { priority: '0.8', changefreq: 'monthly' },
    '/about/': { priority: '0.7', changefreq: 'monthly' },
    '/contact/': { priority: '0.8', changefreq: 'monthly' },
  },
  defaultPriority: '0.6',
  defaultChangefreq: 'monthly'
};

/**
 * Recursively find all HTML files in a directory
 */
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    // Skip excluded patterns
    if (CONFIG.excludePatterns.some(pattern => pattern.test(filePath))) {
      return;
    }

    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Convert file path to URL
 */
function filePathToUrl(filePath) {
  // Remove the base directory
  let url = filePath.replace(process.cwd(), '');

  // Convert backslashes to forward slashes (Windows compatibility)
  url = url.replace(/\\/g, '/');

  // Remove leading slash
  url = url.replace(/^\//, '');

  // Convert index.html to directory URLs
  url = url.replace(/\/index\.html$/, '/');
  if (url === 'index.html') {
    url = '';
  }

  return CONFIG.baseUrl + '/' + url;
}

/**
 * Get URL configuration (priority and changefreq)
 */
function getUrlConfig(filePath) {
  const relativePath = '/' + filePath.replace(process.cwd(), '').replace(/\\/g, '/').replace(/^\//, '');

  // Check for exact matches or pattern matches
  for (const [pattern, config] of Object.entries(CONFIG.urlConfig)) {
    if (relativePath.includes(pattern)) {
      return config;
    }
  }

  return {
    priority: CONFIG.defaultPriority,
    changefreq: CONFIG.defaultChangefreq
  };
}

/**
 * Get last modified date of a file
 */
function getLastModified(filePath) {
  const stats = fs.statSync(filePath);
  return stats.mtime.toISOString().split('T')[0]; // YYYY-MM-DD format
}

/**
 * Generate sitemap XML
 */
function generateSitemap() {
  console.log('🔍 Scanning for HTML files...');

  const htmlFiles = findHtmlFiles(process.cwd());
  console.log(`📄 Found ${htmlFiles.length} HTML files`);

  // Build URL entries
  const urlEntries = htmlFiles.map(filePath => {
    const url = filePathToUrl(filePath);
    const lastmod = getLastModified(filePath);
    const config = getUrlConfig(filePath);

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${config.priority}</priority>
  </url>`;
  }).join('\n');

  // Build complete sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  // Write sitemap to file
  fs.writeFileSync(CONFIG.outputFile, sitemap, 'utf8');

  console.log(`✅ Sitemap generated successfully: ${CONFIG.outputFile}`);
  console.log(`📊 Total URLs: ${htmlFiles.length}`);
  console.log(`🌐 Base URL: ${CONFIG.baseUrl}`);

  // Show sample URLs
  console.log('\n📋 Sample URLs:');
  htmlFiles.slice(0, 5).forEach(filePath => {
    console.log(`   - ${filePathToUrl(filePath)}`);
  });
  if (htmlFiles.length > 5) {
    console.log(`   ... and ${htmlFiles.length - 5} more`);
  }
}

// Run the generator
try {
  generateSitemap();
} catch (error) {
  console.error('❌ Error generating sitemap:', error.message);
  process.exit(1);
}
