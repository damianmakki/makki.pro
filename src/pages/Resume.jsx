import career from '../data/career.json';

export default function Resume() {
  return (
    <>
      <div className="resume-header">
        <div><h1 className="hero">Resume</h1></div>
        <a className="download-btn" href="/damian-makki-resume.pdf" download="Damian-Makki-Resume.pdf" title={`Complete résumé · PDF · Updated ${career.updated}`}>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download PDF
        </a>
      </div>
      <p style={{ marginBottom: 'var(--section-gap, 72px)' }}>
        I build at the seam between design and development with a proven track record of shipping polished products, design systems, and the occasional physical object. Available for advisory and select studio work through <a href="https://www.ruckuslabs.co" className="inline">Ruckus Labs</a>.
      </p>
      <p className="print-contact">Damian Makki · {career.email} · makki.pro</p>
      {career.sections.map(section => (
        <section className="resume-section" key={section.id}>
          <h2 className="section">{section.title}</h2>
          {section.entries.map(entry => (
            <div className="entry" key={entry.name}>
              <span className="years">{entry.dates.replace(' - ', ' — ')}</span>
              <div>
                <h3>
                  {section.id !== 'writing' && <><span className="role">{entry.role} {section.id === 'projects' || /founder/i.test(entry.role) ? 'of' : 'at'}</span>{' '}</>}
                  {entry.url ? <a href={entry.url}>{entry.name}</a> : entry.name}
                  {entry.name === 'CURB' && <span className="role"> (Taxi Magic, Sedan Magic)</span>}
                </h3>
                {entry.reviewStatus === 'approved' && <p>{entry.description}</p>}
                {entry.reviewStatus === 'established' && <p>{entry.summary}</p>}
              </div>
            </div>
          ))}
        </section>
      ))}
    </>
  );
}
