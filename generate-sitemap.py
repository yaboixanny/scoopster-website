#!/usr/bin/env python3

"""
Sitemap Generator for Scoopster Website

This script automatically generates a sitemap.xml file by scanning
all HTML files in the project directory.

Usage:
    python3 generate-sitemap.py

Or make it executable and run:
    chmod +x generate-sitemap.py
    ./generate-sitemap.py
"""

import os
import re
from datetime import datetime
from pathlib import Path

# Configuration
CONFIG = {
    'base_url': 'https://scoopster.ca',
    'output_file': 'sitemap.xml',
    'exclude_patterns': [
        r'node_modules',
        r'\.git',
        r'404\.html',
    ],
    # Priority and change frequency by path pattern
    'url_config': {
        '/index.html': {'priority': '1.0', 'changefreq': 'weekly'},
        '/services/': {'priority': '0.9', 'changefreq': 'monthly'},
        '/service-areas/': {'priority': '0.9', 'changefreq': 'monthly'},
        '/pricing/': {'priority': '0.8', 'changefreq': 'monthly'},
        '/about/': {'priority': '0.7', 'changefreq': 'monthly'},
        '/contact/': {'priority': '0.8', 'changefreq': 'monthly'},
    },
    'default_priority': '0.6',
    'default_changefreq': 'monthly'
}


def find_html_files(directory):
    """Recursively find all HTML files in a directory"""
    html_files = []

    for root, dirs, files in os.walk(directory):
        # Skip excluded directories
        if any(re.search(pattern, root) for pattern in CONFIG['exclude_patterns']):
            continue

        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)

                # Skip excluded files
                if not any(re.search(pattern, file_path) for pattern in CONFIG['exclude_patterns']):
                    html_files.append(file_path)

    return html_files


def file_path_to_url(file_path, base_dir):
    """Convert file path to URL"""
    # Get relative path
    rel_path = os.path.relpath(file_path, base_dir)

    # Convert backslashes to forward slashes (Windows compatibility)
    url = rel_path.replace('\\', '/')

    # Convert index.html to directory URLs
    url = re.sub(r'/index\.html$', '/', url)
    if url == 'index.html':
        url = ''

    return CONFIG['base_url'] + '/' + url


def get_url_config(file_path, base_dir):
    """Get URL configuration (priority and changefreq)"""
    rel_path = '/' + os.path.relpath(file_path, base_dir).replace('\\', '/')

    # Check for homepage first
    if rel_path == '/index.html':
        return CONFIG['url_config']['/index.html']

    # Check for pattern matches
    for pattern, config in CONFIG['url_config'].items():
        if pattern != '/index.html' and pattern in rel_path:
            return config

    return {
        'priority': CONFIG['default_priority'],
        'changefreq': CONFIG['default_changefreq']
    }


def get_last_modified(file_path):
    """Get last modified date of a file"""
    mtime = os.path.getmtime(file_path)
    return datetime.fromtimestamp(mtime).strftime('%Y-%m-%d')


def generate_sitemap():
    """Generate sitemap XML"""
    print('🔍 Scanning for HTML files...')

    base_dir = os.getcwd()
    html_files = find_html_files(base_dir)

    print(f'📄 Found {len(html_files)} HTML files')

    # Build URL entries
    url_entries = []
    for file_path in html_files:
        url = file_path_to_url(file_path, base_dir)
        lastmod = get_last_modified(file_path)
        config = get_url_config(file_path, base_dir)

        entry = f"""  <url>
    <loc>{url}</loc>
    <lastmod>{lastmod}</lastmod>
    <changefreq>{config['changefreq']}</changefreq>
    <priority>{config['priority']}</priority>
  </url>"""
        url_entries.append(entry)

    # Build complete sitemap
    sitemap = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(url_entries)}
</urlset>"""

    # Write sitemap to file
    with open(CONFIG['output_file'], 'w', encoding='utf-8') as f:
        f.write(sitemap)

    print(f"✅ Sitemap generated successfully: {CONFIG['output_file']}")
    print(f"📊 Total URLs: {len(html_files)}")
    print(f"🌐 Base URL: {CONFIG['base_url']}")

    # Show sample URLs
    print('\n📋 Sample URLs:')
    for file_path in html_files[:5]:
        print(f"   - {file_path_to_url(file_path, base_dir)}")
    if len(html_files) > 5:
        print(f"   ... and {len(html_files) - 5} more")


if __name__ == '__main__':
    try:
        generate_sitemap()
    except Exception as error:
        print(f'❌ Error generating sitemap: {error}')
        exit(1)
