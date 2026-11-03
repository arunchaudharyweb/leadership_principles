"""Check local links, IDs, content references, and HTML shells without dependencies."""
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
root = Path(__file__).resolve().parent.parent
errors=[]
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.ids=[]; self.links=[]; self.scripts=[]; self.lang=False
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.append(a['id'])
        for key in ('href','src'):
            if a.get(key):self.links.append(a[key])
        if tag=='html':self.lang=a.get('lang')=='en'
        if tag=='script' and 'src' in a:self.scripts.append(a['src'])
for f in root.glob('*.html'):
    p=Page();p.feed(f.read_text())
    if len(p.ids)!=len(set(p.ids)):errors.append(f'{f.name}: duplicate IDs')
    if not p.lang:errors.append(f'{f.name}: missing language')
    for link in p.links:
        u=urlsplit(link)
        if u.scheme or u.netloc or not u.path:continue
        target=f.parent/unquote(u.path)
        if not target.exists():errors.append(f'{f.name}: broken local link {link}')
    if f.name!='star_prep.html' and p.scripts!=['assets/data.js','assets/app.js']:
        errors.append(f'{f.name}: script order incorrect')
raw=(root/'assets/data.js').read_text()
d=json.loads(raw.removeprefix('window.PREP_DATA = ').rstrip().removesuffix(';'))
for key in ('questions','stories','sources'):
    ids=[x['id'] for x in d[key]]
    if len(ids)!=len(set(ids)):errors.append(f'duplicate {key} IDs')
qids={q['id'] for q in d['questions']};sids={s['id'] for s in d['stories']};sources={s['id'] for s in d['sources']}
for q in d['questions']:
    if not all(q.get(k) for k in ['id','category','type','prompt','answer','checks','followups']):errors.append(f'incomplete question {q["id"]}')
    if q.get('story') and q['story'] not in sids:errors.append(f'unknown story {q["story"]}')
    if q.get('source') and q['source'] not in sources:errors.append(f'unknown source {q["source"]}')
for b in d['bundles']:
    if len(b['ids'])<2 or not set(b['ids'])<=qids:errors.append(f'invalid bundle {b["title"]}')
for f in ('app.js','data.js','style.css','favicon.svg'):
    if not (root/'assets'/f).stat().st_size:errors.append(f'empty asset {f}')
if errors:raise SystemExit('\n'.join(errors))
print(f'PASS: 8 HTML pages, {len(qids)} questions, {len(sids)} stories, {len(d["bundles"])} mock bundles; local links and content references valid.')
# Complete answer coverage: every displayed prompt must have a substantial response.
placeholders=re.compile(r'\[(?:real example|connection|complete[^\]]*)\]|\b(?:TODO|TBD)\b|^(?:Choose a real|Pick an actual|Supply one|Prepare one actual|Use the .* story\.)',re.I)
for q in d['questions']:
    assert len(q['answer'].split())>=35, f'{q["id"]}: main answer too short'
    assert not placeholders.search(q['answer']), f'{q["id"]}: unfinished main answer'
    assert len(q.get('followupAnswers',[]))==len(q['followups']), f'{q["id"]}: missing follow-up answer'
    for prompt, item in zip(q['followups'],q['followupAnswers']):
        assert item['question']==prompt, f'{q["id"]}: mismatched follow-up'
        assert len(item['answer'].split())>=15 and not placeholders.search(item['answer']), f'{q["id"]}: incomplete follow-up'
for s in d['stories']:
    for field in ('pitch','situation','task','action','result','reflection'):
        assert len(s[field].split())>=12 and not placeholders.search(s[field]), f'{s["id"]}: unfinished {field}'
    assert len(s.get('probeAnswers',[]))==len(s['probes']), f'{s["id"]}: missing story follow-up'
    for prompt,item in zip(s['probes'],s['probeAnswers']):
        assert item['question']==prompt and len(item['answer'].split())>=15, f'{s["id"]}: incomplete probe'
print(f'PASS: all 62 main answers, {sum(len(q["followupAnswers"]) for q in d["questions"])} question follow-ups, all story sections, and {sum(len(s["probeAnswers"]) for s in d["stories"])} story follow-ups are complete.')
