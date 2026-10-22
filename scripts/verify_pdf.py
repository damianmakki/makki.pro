"""Check the generated PDF against the shared career source before deployment."""
import json
from pathlib import Path
from pypdf import PdfReader

root = Path(__file__).resolve().parents[1]
career = json.loads((root/'src/data/career.json').read_text())
reader = PdfReader(root/'build/damian-makki-resume.pdf')
texts = [page.extract_text() for page in reader.pages]
normalize = lambda value: ' '.join(value.split())
text = normalize('\n'.join(texts))
links = []
for page in reader.pages:
 for ref in page.get('/Annots', []):
  annotation = ref.get_object()
  if annotation.get('/A', {}).get('/URI'):
   links.append(str(annotation['/A']['/URI']))
assert career['email'] in text
assert 'mailto:'+career['email'] in links
for section in career['sections']:
 assert section['title'].upper() in text
 for entry in section['entries']:
  assert normalize(entry['name']) in text, entry['name']
  assert normalize(entry['role']) in text, entry['role']
  assert normalize(entry['dates']) in text, entry['dates']
  public = entry['summary']
  if public: assert normalize(public) in text, entry['name']+' description missing'
  if entry['reviewStatus']=='draft' and entry['description']!=entry['summary']:
   assert normalize(entry['description']) not in text, entry['name']+' draft leaked'
  if entry['url']: assert entry['url'] in links, entry['url']+' link missing'
for i, page_text in enumerate(texts, 1):
 assert f'{i} / {len(texts)}' in page_text
 assert career['updated'] in page_text
 assert len(page_text.strip()) > 100, 'Unexpected empty page'
# The build must ship precisely the latest generated download.
assert (root/'build/damian-makki-resume.pdf').read_bytes() == (root/'output/pdf/damian-makki-resume.pdf').read_bytes()
print(f'PDF verified: {len(reader.pages)} pages, {sum(len(s["entries"]) for s in career["sections"])} entries, {len(links)} clickable links.')
