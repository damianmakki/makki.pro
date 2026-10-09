"""Build the public résumé and a separate, non-published copy review."""
import json
from pathlib import Path
from xml.sax.saxutils import escape
import reportlab
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter

ROOT = Path(__file__).resolve().parents[1]
career = json.loads((ROOT / 'src/data/career.json').read_text())
output = ROOT / 'output/pdf/damian-makki-resume.pdf'
output.parent.mkdir(parents=True, exist_ok=True)
font_dir = Path(reportlab.__file__).parent / 'fonts'
pdfmetrics.registerFont(TTFont('ResumeSans', str(font_dir / 'Vera.ttf')))
pdfmetrics.registerFont(TTFont('ResumeSansBold', str(font_dir / 'VeraBd.ttf')))
pdfmetrics.registerFontFamily('ResumeSans', normal='ResumeSans', bold='ResumeSansBold')
styles = {
 'name': ParagraphStyle('name', fontName='ResumeSansBold', fontSize=25, leading=30, spaceAfter=6),
 'subtitle': ParagraphStyle('subtitle', fontName='ResumeSans', fontSize=11, leading=16, textColor=HexColor('#444444'), spaceAfter=6),
 'body': ParagraphStyle('body', fontName='ResumeSans', fontSize=10.5, leading=15, spaceAfter=8),
 'section': ParagraphStyle('section', fontName='ResumeSansBold', fontSize=11, leading=16, spaceBefore=18, spaceAfter=10, keepWithNext=True),
 'company': ParagraphStyle('company', fontName='ResumeSansBold', fontSize=12, leading=16, spaceAfter=3),
 'role': ParagraphStyle('role', fontName='ResumeSans', fontSize=10, leading=14, textColor=HexColor('#444444'), spaceAfter=5),
}
def para(text, style):
 return Paragraph(text, styles[style])
def link(url, text):
 return f'<link href="{escape(url, {chr(34): "&quot;"})}">{escape(text)}</link>'

class NumberedCanvas(canvas.Canvas):
 def __init__(self, *args, **kwargs):
  kwargs['invariant'] = 1
  super().__init__(*args, **kwargs)
  self._saved = []
 def showPage(self):
  self._saved.append(dict(self.__dict__))
  self._startPage()
 def save(self):
  total = len(self._saved)
  for state in self._saved:
   self.__dict__.update(state)
   self.setFillColor(HexColor('#666666')); self.setFont('ResumeSans', 9)
   self.drawString(48, 30, f'Damian Makki | Updated {career["updated"]}')
   self.drawRightString(letter[0]-48, 30, f'{self._pageNumber} / {total}')
   if self._pageNumber > 1:
    self.setFont('ResumeSansBold', 10); self.drawString(48, letter[1]-35, 'Damian Makki')
    self.setFont('ResumeSans', 9); self.drawRightString(letter[0]-48, letter[1]-35, career['email'])
   super().showPage()
  super().save()

story = [para(escape(career['name']), 'name'), para(escape(career['subtitle']), 'subtitle'),
 para(link('mailto:'+career['email'], career['email'])+' &nbsp; | &nbsp; '+link(career['url'], 'makki.pro'), 'body'),
 Spacer(1, 9), para(escape(career['intro']), 'body')]
review = ['# Résumé copy review', '', 'These drafts are not included in the public website or download. Public versions keep the original compact position list until you approve a description.', '', 'Edit `src/data/career.json`: revise `description`, resolve `reviewNotes`, and set `reviewStatus` to `approved`. Rebuild to update both HTML and PDF. Do not approve unfinished or unverified copy.', '', '## Career reconciliation', '', '- Job Boardly duplicate removed.', '- Somatic appears once under Startup Experience; Founder reconciles with the live title.', '- FittMatch retained from the live site.', '- Live Trace and Somatic URLs retained; verify destinations before publishing.', '- Institution spelling normalized to Stevens Institute of Technology.', '- Dates and ongoing roles still require your review.', '']
for section in career['sections']:
 story.append(para(escape(section['title']).upper(), 'section'))
 review += ['## '+section['title'], '']
 for entry in section['entries']:
  heading = link(entry['url'],entry['name']) if entry['url'] else escape(entry['name'])
  text = entry['description'] if entry['reviewStatus']=='approved' else entry['summary'] if entry['reviewStatus']=='established' else ''
  block = [para(heading,'company'), para(escape(entry['role'])+' &nbsp; | &nbsp; '+escape(entry['dates']),'role')]
  if text: block.append(para(escape(text),'body'))
  block.append(Spacer(1,10))
  story.append(KeepTogether(block))
  review += ['### '+entry['name'], '', entry['role']+' · '+entry['dates'], '', '**Status:** '+entry['reviewStatus'], '', entry['description'], '', '**Verify:** '+(entry['reviewNotes'] or 'Established copy from the source; check accuracy before publishing.'), '']
SimpleDocTemplate(str(output),pagesize=letter,rightMargin=48,leftMargin=48,topMargin=54,bottomMargin=54,title='Damian Makki - Resume',author='Damian Makki',subject='Complete career history in design and front-end development').build(story,canvasmaker=NumberedCanvas)
(ROOT/'content-review').mkdir(exist_ok=True)
(ROOT/'content-review/resume-copy.md').write_text('\n'.join(review).rstrip()+'\n')
print(f'Generated {output.relative_to(ROOT)}')
