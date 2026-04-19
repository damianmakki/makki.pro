export default function Resume() {
  return (
    <>
      <div className="resume-header">
        <div>
          <h1 className="hero" style={{ marginBottom: 6 }}>Damian Makki — Resume</h1>
          <p className="subtitle">Designer & Developer.</p>
        </div>
        <button className="download-btn" onClick={() => window.print()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download PDF
        </button>
      </div>

      <p className="lede" style={{ marginBottom: 'var(--section-gap, 72px)' }}>
        I build at the seam between design and engineering — shipping polished product surfaces, design systems, and the occasional physical object. Available for advisory and select studio work through <a href="https://www.ruckuslabs.co" className="inline">Ruckus Labs</a>.
      </p>

      <section className="resume-section">
        <h2 className="section">Experience</h2>
        <div className="entry">
          <span className="years">2021 — Now</span>
          <div>
            <h4>Apple <span className="role-sep">/</span> <span className="role">Front-End Developer, Digital Content Management</span></h4>
            <p>Working on digital content management for Apple Store, collaborating with design and engineering to ship polished retail experiences across web and native surfaces.</p>
            <div className="tags">
              <span className="tag">React</span><span className="tag">Design systems</span><span className="tag">Content management</span>
            </div>
          </div>
        </div>
        <div className="entry">
          <span className="years">2020 — Now</span>
          <div>
            <h4>Ruckus Labs <span className="role-sep">/</span> <span className="role">Founder &amp; principal</span></h4>
            <p>A small design studio. Brand systems, product design, and front-end builds for startups and established teams. Recent work: Somatic, Hurdle, Chicory.</p>
            <div className="tags">
              <span className="tag">Brand</span><span className="tag">Product</span><span className="tag">Front-end</span>
            </div>
          </div>
        </div>
        <div className="entry">
          <span className="years">2018 — 2021</span>
          <div>
            <h4>Aya Healthcare <span className="role-sep">/</span> <span className="role">Senior Front-End Developer, Marketing</span></h4>
            <p>Led front-end development for marketing sites and campaigns. Built and maintained component libraries used across the marketing org.</p>
            <div className="tags">
              <span className="tag">React</span><span className="tag">Marketing</span><span className="tag">Component libraries</span>
            </div>
          </div>
        </div>
        <div className="entry">
          <span className="years">2016 — 2018</span>
          <div>
            <h4>Various <span className="role-sep">/</span> <span className="role">UI &amp; UX Designer, Co-Founder</span></h4>
            <p>UI/UX design for Vuforia (PTC) on virtual reality experiences. Co-founded Sammich Shop, a digital product studio.</p>
          </div>
        </div>
        <div className="entry">
          <span className="years">2012 — 2016</span>
          <div>
            <h4>Various <span className="role-sep">/</span> <span className="role">Designer &amp; developer</span></h4>
            <p>Lead designer at Lawline (legal ed platform). Graphic and product design at CURB (Taxi Magic). Design and development at Vivid Software Solutions and Stevens Institute of Technology.</p>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="section">Projects &amp; side projects</h2>
        <div className="entry">
          <span className="years">2025</span>
          <div>
            <h4>Somatic <span className="role-sep">/</span> <span className="role">Check-in app for iOS</span></h4>
            <p>A tiny app for noticing how your body feels. Shipped with Ruckus Labs.</p>
            <div className="tags"><span className="tag">SwiftUI</span><span className="tag">Health</span></div>
          </div>
        </div>
        <div className="entry">
          <span className="years">2022</span>
          <div>
            <h4>RunItBack <span className="role-sep">/</span> <span className="role">Dribbble data export tool</span></h4>
            <p>A tool to help designers export their work from Dribbble. Open source, built in React.</p>
            <div className="tags"><span className="tag">React</span><span className="tag">Open source</span></div>
          </div>
        </div>
        <div className="entry">
          <span className="years">2021</span>
          <div>
            <h4>Very Cool Weekly <span className="role-sep">/</span> <span className="role">Newsletter for designers and developers</span></h4>
            <p>A curated newsletter serving the design and development community.</p>
          </div>
        </div>
        <div className="entry">
          <span className="years">2013 — Now</span>
          <div>
            <h4>Sourced Adventures <span className="role-sep">/</span> <span className="role">Lead designer and developer</span></h4>
            <p>Branding, product, and marketing design for an outdoor adventure company. Ongoing since 2013.</p>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="section">Writing &amp; talks</h2>
        <div className="entry">
          <span className="years">2021</span>
          <div>
            <h4>Narwhals Podcast <span className="role-sep">/</span> <span className="role">Episode 33</span></h4>
            <p>Conversation about design, development, and building things independently.</p>
          </div>
        </div>
        <div className="entry">
          <span className="years">Ongoing</span>
          <div>
            <h4>Medium <span className="role-sep">/</span> <span className="role">Essays</span></h4>
            <p>Writing on design, engineering, and side projects at <a href="https://medium.com/@damianmakki" className="inline">medium.com/@damianmakki</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
