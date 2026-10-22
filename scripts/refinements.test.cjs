const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const read = name => fs.readFileSync(`build/${name}`,'utf8');
test('preserves React and supplies a direct résumé entrypoint with matching metadata', () => {
  const home = read('index.html'), resume = read('resume/index.html');
  for (const html of [home,resume]) {
    assert.match(html, /id="root"/);
    assert.match(html, /static\/js\/main\./);
    assert.match(html, /og:image/);
    const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1];
    const person = JSON.parse(json);
    assert.equal(person.worksFor.name,'Apple');
    assert.equal(person.affiliation.name,'Ruckus Labs');
  }
  assert.match(resume, /rel="canonical" href="https:\/\/makki.pro\/resume\/"/);
  assert.match(resume, /<title>Resume \| Damian Makki/);
  assert.match(resume, /name="description" content="Damian Makki’s experience/);
  assert.match(resume, /property="og:url" content="https:\/\/makki.pro\/resume\/"/);
  assert.ok(!fs.existsSync('build/assets/site.js'));
});
test('sitemap, crawl controls, and generated PDF are present without exposing drafts', () => {
  assert.match(read('sitemap.xml'), /https:\/\/makki.pro\/resume\//);
  assert.match(read('robots.txt'), /Sitemap:/);
  assert.match(read('404.html'), /noindex/);
  assert.match(read('blog/demo/index.html'), /noindex/);
  assert.equal(fs.readFileSync('build/damian-makki-resume.pdf').subarray(0,5).toString(), '%PDF-');
  assert.ok(!fs.existsSync('build/content-review'));
  assert.ok(!read('blog/feed.xml').includes('<entry>'));
});
