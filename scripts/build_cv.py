"""Generate public/Cv.pdf from docs/CV.md. Requires reportlab (pip install reportlab)."""
from pathlib import Path
import re
from html import escape
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable

ROOT = Path(__file__).resolve().parents[1]
INK = colors.HexColor('#202c30')
MUTED = colors.HexColor('#52616a')
styles = {
    'name': ParagraphStyle('name', fontName='Helvetica-Bold', fontSize=23, leading=27, textColor=INK, spaceAfter=6),
    'subtitle': ParagraphStyle('subtitle', fontName='Helvetica-Bold', fontSize=10, leading=14, textColor=MUTED, spaceAfter=5),
    'contact': ParagraphStyle('contact', fontName='Helvetica', fontSize=8.4, leading=12, textColor=MUTED),
    'section': ParagraphStyle('section', fontName='Helvetica-Bold', fontSize=9, leading=12, textColor=INK, spaceBefore=12, spaceAfter=4, keepWithNext=True),
    'heading': ParagraphStyle('heading', fontName='Helvetica-Bold', fontSize=9.6, leading=13, textColor=INK, spaceBefore=6, spaceAfter=2, keepWithNext=True),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=9.4, leading=13.2, textColor=INK, spaceAfter=3, alignment=TA_LEFT),
    'bullet': ParagraphStyle('bullet', fontName='Helvetica', fontSize=9.4, leading=13.2, textColor=INK, leftIndent=10, firstLineIndent=-8, spaceAfter=2),
    'link': ParagraphStyle('link', fontName='Helvetica', fontSize=8, leading=11, textColor=MUTED, spaceAfter=3, keepWithNext=True),
}
def markup(text):
    text = escape(text)
    text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'<link href="\2" color="#365a68">\1</link>', text)
    return re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', text)

story = []
header_line = 0
for raw in (ROOT / 'docs/CV.md').read_text(encoding='utf-8-sig').splitlines():
    line = raw.strip()
    if not line:
        continue
    if line.startswith('# '):
        story.append(Paragraph(markup(line[2:]), styles['name']))
        continue
    if line.startswith('## '):
        header_line = 10
        story.append(Paragraph(markup(line[3:]), styles['section']))
        story.append(HRFlowable(width='100%', thickness=.5, color=colors.HexColor('#ccd4d7'), spaceAfter=4))
    elif line.startswith('### '):
        story.append(Paragraph(markup(line[4:]), styles['heading']))
    elif line.startswith('- '):
        story.append(Paragraph('&#8226; ' + markup(line[2:]), styles['bullet']))
    elif header_line < 3:
        style = 'subtitle' if header_line == 0 else 'contact'
        story.append(Paragraph(markup(line), styles[style]))
        header_line += 1
    else:
        style = 'link' if line.startswith('[Repository:') else 'body'
        story.append(Paragraph(markup(line), styles[style]))

pdf = SimpleDocTemplate(str(ROOT / 'public/Cv.pdf'), pagesize=A4, rightMargin=43, leftMargin=43, topMargin=35, bottomMargin=32, title='Nasr-Eddine Farid - Software Engineering CV', author='Nasr-Eddine Farid')
pdf.build(story)
print('Generated public/Cv.pdf')
