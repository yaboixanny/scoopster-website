#!/usr/bin/env python3
"""Compare public-page copy, excluding navigation, footer, forms and code.

Unique-word percentage counts words not covered by a five-word phrase also
found on another page. Area/day substitutions are normalized before comparison.
This is an editorial diagnostic, not a search-engine ranking score.
"""
from pathlib import Path
from html.parser import HTMLParser
import re,json,itertools
ROOT=Path(__file__).resolve().parents[1]
VOID={'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}
class Copy(HTMLParser):
 def __init__(self):super().__init__();self.stack=[];self.parts=[];self.h1=[];self.capture=False
 def handle_starttag(self,t,attrs):
  a=dict(attrs);hidden=t in {'head','script','style','nav','footer','form'} or (t=='header' and 'header' in a.get('class','').split()) or 'display: none' in a.get('style','') or 'hidden' in a
  if t not in VOID:self.stack.append((t,hidden))
  if t=='h1':self.capture=True
 def handle_endtag(self,t):
  if t=='h1':self.capture=False
  for i in range(len(self.stack)-1,-1,-1):
   if self.stack[i][0]==t:self.stack=self.stack[:i];break
 def handle_data(self,s):
  if self.capture:self.h1.append(s)
  if not any(h for _,h in self.stack):self.parts.append(s)
def run():
 pages={};meta={}
 for p in sorted(ROOT.rglob('index.html')):
  if any(x.startswith('.') for x in p.relative_to(ROOT).parts):continue
  parser=Copy();parser.feed(p.read_text());text=' '.join(parser.parts).lower()
  text=re.sub(r'hamilton mountain|stoney creek|ancaster|dundas|waterdown','area',text)
  text=re.sub(r'monday|tuesday|wednesday|thursday|friday','day',text)
  words=re.findall(r"[a-z0-9]+(?:['’][a-z]+)?",text)
  key=str(p.relative_to(ROOT));pages[key]=words;meta[key]={'heading':' '.join(parser.h1),'words':len(words)}
 phrases={k:set(zip(*(w[i:] for i in range(5)))) for k,w in pages.items()}
 for k,w in pages.items():
  other=set().union(*(v for n,v in phrases.items() if n!=k));shared=set()
  for i in range(len(w)-4):
   if tuple(w[i:i+5]) in other:shared.update(range(i,i+5))
  meta[k]['unique_percent']=round(100*(len(w)-len(shared))/len(w),1) if w else 0
 pairs=[]
 for a,b in itertools.combinations(pages,2):
  score=len(phrases[a]&phrases[b])/max(1,min(len(phrases[a]),len(phrases[b])))
  pairs.append({'pages':[a,b],'shared_phrases_percent':round(score*100,1)})
 result={'method':'Main visible copy; shared five-word sequences across all public pages; area names and weekdays normalized. Shared navigation, forms, footers and scripts excluded.','pages':meta,'closest_pairs':sorted(pairs,key=lambda p:-p['shared_phrases_percent'])[:15]}
 print(json.dumps(result,indent=2))
if __name__=='__main__':run()
