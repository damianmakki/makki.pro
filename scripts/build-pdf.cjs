const { spawnSync } = require('node:child_process');
const { existsSync } = require('node:fs');
const python = process.env.PYTHON || (existsSync('.venv/bin/python') ? '.venv/bin/python' : 'python3');
const result = spawnSync(python, ['scripts/build_resume.py'], { stdio:'inherit' });
if (!result.error && result.status === 0) {
  require('node:fs').copyFileSync('output/pdf/damian-makki-resume.pdf', 'public/damian-makki-resume.pdf');
}
if (result.error || result.status !== 0) {
  console.error('PDF generation failed. Install requirements.txt in a Python virtual environment, or set PYTHON to an interpreter with ReportLab.');
  process.exit(1);
}
