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
const { execFileSync } = require('child_process');
const BASE_DIR = __dirname;

// Configuration
const CONFIG = {
  baseUrl: 'https://scoopster.ca',
  outputFile: 'sitemap.xml',
  excludePatterns: [
    /node_modules/,
    /\.git/,
    /404\.html$/,
    /blog-post-template\.html$/,
    /(?:^|\/)\.[^/]+(?:\/|$)/,
  ],
  // Priority and change frequency by path pattern
  urlConfig: {
    '/index.html': { priority: '1.0', changefreq: 'weekly' },
    '/services/': { priority: '0.9', changefreq: 'monthly' },
    '/service-areas/': { priority: '0.9', changefreq: 'monthly' },
    '/pricing/': { priority: '0.8', changefreq: 'monthly' },
    '/about/': { priority: '0.7', changefreq: 'monthly' },
    '/faq/': { priority: '0.7', changefreq: 'monthly' },
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
    if (CONFIG.excludePatterns.some(pattern => pattern.test(path.relative(BASE_DIR, filePath).split(path.sep).join('/')))) {
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
  let url = path.relative(BASE_DIR, filePath);

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
  const relativePath = '/' + path.relative(BASE_DIR, filePath).replace(/\\/g, '/').replace(/^\//, '');

  // Check for exact matches or pattern matches
  for (const [pattern, config] of Object.entries(CONFIG.urlConfig)) {
    if (pattern === '/index.html' ? relativePath === pattern : relativePath.startsWith(pattern)) {
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
  const relativePath = path.relative(BASE_DIR, filePath);
  try {
    const dirty = execFileSync('git', ['status', '--porcelain', '--', relativePath], {
      cwd: BASE_DIR, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore']
    }).trim();
    if (!dirty) {
      const date = execFileSync('git', ['log', '-1', '--format=%cs', '--', relativePath], {
        cwd: BASE_DIR, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore']
      }).trim();
      if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return date;
    }
  } catch (_) {
    // Source archives without Git history fall back to the file timestamp.
  }
  return fs.statSync(filePath).mtime.toISOString().split('T')[0];
}

/**
 * Generate sitemap XML
 */
function generateSitemap() {
  console.log('🔍 Scanning for HTML files...');

  const htmlFiles = findHtmlFiles(BASE_DIR).sort((a, b) => {
    const first = filePathToUrl(a);
    const second = filePathToUrl(b);
    return first < second ? -1 : first > second ? 1 : 0;
  });
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
  fs.writeFileSync(path.join(BASE_DIR, CONFIG.outputFile), sitemap + '\n', 'utf8');

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
