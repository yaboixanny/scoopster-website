#!/usr/bin/env python3
"""Report visible-copy originality across area pages using shared five-word phrases.

Includes navigation, forms and footer; excludes head, scripts, styles and hidden
fields. Normalizes area names and weekdays so swapping names earns no credit.
This is an editorial comparison, not a search-engine score.
"""
from pathlib import Path
from html.parser import HTMLParser
import re

ROOT = Path(__file__).resolve().parents[1]
class VisibleCopy(HTMLParser):
    def __init__(self):
        super().__init__()
        self.hidden = []
        self.parts = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in ('head', 'script', 'style') or 'display: none' in attrs.get('style', '') or 'hidden' in attrs:
            self.hidden.append(tag)
    def handle_endtag(self, tag):
        if self.hidden and self.hidden[-1] == tag:
            self.hidden.pop()
    def handle_data(self, data):
        if not self.hidden:
            self.parts.append(data)

def words(path):
    parser = VisibleCopy()
    parser.feed(path.read_text())
    text = ' '.join(parser.parts).lower()
    text = re.sub(r'hamilton mountain|stoney creek|ancaster|dundas|waterdown', 'AREA', text)
    text = re.sub(r'monday|tuesday|wednesday|thursday|friday', 'DAY', text)
    return re.findall(r"[a-z0-9]+(?:['’][a-z]+)?", text.lower())

def audit():
    pages = {p.parent.name: words(p) for p in sorted((ROOT / 'service-areas').glob('*/index.html'))}
    phrases = {name: set(zip(*(tokens[i:] for i in range(5)))) for name,tokens in pages.items()}
    passed = True
    for name,tokens in pages.items():
        other = set().union(*(v for k,v in phrases.items() if k != name))
        shared = set()
        for i in range(len(tokens)-4):
            if tuple(tokens[i:i+5]) in other:
                shared.update(range(i,i+5))
        unique = 100 * (len(tokens)-len(shared)) / len(tokens)
        print(f'{name}: {unique:.1f}% unique visible words ({len(tokens)} total)')
        passed &= unique >= 70
    return passed

if __name__ == '__main__':
    raise SystemExit(0 if audit() else 1)
