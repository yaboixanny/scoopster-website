#!/usr/bin/env python3
"""Compatibility entry point for the shared Node.js sitemap generator."""
from pathlib import Path
import subprocess
import sys

if __name__ == '__main__':
    sys.exit(subprocess.call(['node', str(Path(__file__).with_suffix('.js'))]))
