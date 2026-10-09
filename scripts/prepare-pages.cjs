// Keep React and generate a real entrypoint for direct résumé navigation on GitHub Pages.
const fs = require('node:fs');
const html = fs.readFileSync('build/index.html','utf8');
const description = 'Damian Makki’s experience in design and front-end development at Apple, Aya Healthcare, and independent projects. Download his complete résumé.';
const title = 'Resume | Damian Makki | Designer and Front-End Developer';
let resume = html.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`);
resume = resume.replace(/(<meta[^>]+(?:name="(?:description|twitter:description)"|property="og:description")[^>]+content=")[^"]*(")/g, `$1${description}$2`);
resume = resume.replace(/(<meta[^>]+(?:name="twitter:title"|property="og:title")[^>]+content=")[^"]*(")/g, `$1${title}$2`);
resume = resume.replace('rel="canonical" href="https://makki.pro/"', 'rel="canonical" href="https://makki.pro/resume/"').replace('property="og:url" content="https://makki.pro/"', 'property="og:url" content="https://makki.pro/resume/"');
fs.mkdirSync('build/resume',{recursive:true});
fs.writeFileSync('build/resume/index.html',resume);
