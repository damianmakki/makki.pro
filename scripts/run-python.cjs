const { spawnSync } = require('node:child_process');
const { existsSync } = require('node:fs');
const python = process.env.PYTHON || (existsSync('.venv/bin/python') ? '.venv/bin/python' : 'python3');
const result = spawnSync(python, process.argv.slice(2), { stdio:'inherit' });
if(result.error || result.status !== 0) process.exit(1);
