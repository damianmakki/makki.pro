export default function Resume() {
  return (
    <>
      <div className="resume-header">
        <div>
          <h1 className="hero">Resume</h1>
        </div>
        <button className="download-btn" onClick={() => window.print()}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download PDF
        </button>
      </div>

      <p style={{ marginBottom: 'var(--section-gap, 72px)' }}>
        I build at the seam between design and development with a proven track record of shipping polished products, design systems, and the occasional physical object. Available for advisory and select studio work through <a href="https://www.ruckuslabs.co" className="inline">Ruckus Labs</a>.
      </p>

      <section className="resume-section">
        <h2 className="section">Corporate Experience</h2>
        <div className="entry">
          <span className="years">2021 — Present</span>
          <div>
            <h4><span class="role">Front-End Developer at</span> <a href="https://www.apple.com/store">Apple</a></h4>
            {/* <p>Played a pivotal role in enhancing the Apple.com online store and Apple Store App, directly contributing to the success of millions of global transactions. As a key member of the New Product Introduction (NPI) team, I delivered seamless launches for multiple high-profile products while upholding Apple's industry-leading standards through close cross-functional collaboration with design, accessibility, and QA teams. Additionally, I drove team efficiency by designing and leading workshops on Sketch and other design tools, successfully upskilling ten team members.</p> */}
          </div>
        </div>
        <div className="entry">
          <span className="years">2018 — 2021</span>
          <div>
            <h4><span class="role">Senior Front-End Developer at</span> <a href="https://www.ayahealthcare.com">Aya Healthcare</a></h4>
            {/* <p>Spearheaded the design and development of eight distinct web platforms, significantly driving increases in user engagement. In addition to innovating internal processes for server management, I partnered closely with product teams to conceptualize and launch key customer-focused features. My commitment to cross-functional collaboration and consistently delivering high-impact results was further recognized with the 'Team Player' award.</p> */}
          </div>
        </div>
        <div className="entry">
          <span className="years">2018</span>
          <div>
            <h4><span class="role">UI & UX Designer at</span> <a href="https://developer.vuforia.com/home">Vuforia</a></h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2013 - 2015</span>
          <div>
            <h4><span class="role">Lead Designer at</span> <a href="https://www.lawline.com">Lawline</a></h4>

          </div>
        </div>
        <div className="entry">
          <span className="years">2012 - 2013</span>
          <div>
            <h4><span class="role">Designer at</span> <a href="https://www.gocurb.com/">CURB</a> <span class="role">(Taxi Magic, Sedan Magic)</span></h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2012</span>
          <div>
            <h4><span class="role">Designer at</span> <a href="https://www.stevens.edu/">Steven's Institute of Technology</a></h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2011 – 2012</span>
          <div>
            <h4><span class="role">Designer at</span> <a href="https://www.vividsoftwaresolutions.com/">Vivid Software Solutions</a></h4>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="section">Startup Experience</h2>
        <div className="entry">
          <span className="years">2025</span>
          <div>
            <h4><span class="role">Designer at</span> <a href="https://www.jobboardly.com/">Job Boardly</a></h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2024 — Present</span>
          <div>
            <h4><span class="role">Brand and Graphic Designer at</span> <a href="https://schvitzin.com/">Schvitzin'</a></h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2021</span>
          <div>
            <h4><span class="role">Presentation Designer at</span> <a href="https://www.experiencewelcome.com/">Welcome</a></h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2021</span>
          <div>
            <h4><span class="role">Designer at</span> <a href="https://journey.live/">Journey</a></h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2018 - 2021</span>
          <div>
            <h4><span class="role">Designer at</span> <a href="https://www.f45training.com/">F45 Training</a></h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2017 - 2020</span>
          <div>
            <h4><span class="role">Designer and Developer at</span> <a href="https://www.chicory.co/">Chicory</a></h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2017 - 2020</span>
          <div>
            <h4><span class="role">Designer at</span> <a href="https://getmolo.com/">Molo</a></h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2016 - 2018</span>
          <div>
            <h4><span class="role">Designer at</span> <a href="https://www.orangetheoryfitness.com/">OrangeTheory Fitness</a></h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2016 – 2017</span>
          <div>
            <h4><span class="role">Cofounder of</span> Sammich Shop</h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2014 - 2015</span>
          <div>
            <h4><span class="role">Brand Designer at</span> <a href="https://www.neso.com/">Neso</a></h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2013 - 2023</span>
          <div>
            <h4><span class="role">Lead Designer and Developer at</span> <a href="https://www.sourcedadventures.com/">Sourced Adventures</a></h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2013</span>
          <div>
            <h4><span class="role">Designer at</span> <a href="https://tequilaavion.com/">Tequila Avión</a></h4>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="section">Personal Projects</h2>
        <div className="entry">
          <span className="years">2012 – Present</span>
          <div>
            <h4><span class="role">Owner of</span> <a href="https://www.ruckuslabs.co/">Ruckus Labs</a></h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2026</span>
          <div>
            <h4><span class="role">Designer and Developer of</span> Somatic</h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2026</span>
          <div>
            <h4><span class="role">Designer and Developer of</span> Trace</h4>
          </div>
        </div>
        
        <div className="entry">
          <span className="years">2024</span>
          <div>
            <h4><span class="role">Designer and Developer of</span> <a href="https://www.littleherbplaces.com/">Little Herb Places</a></h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2023</span>
          <div>
            <h4><span class="role">Designer, Restorer, and Maid of</span> <a href="https://www.glampingonwine.com/">Glamping on Wine</a></h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2021</span>
          <div>
            <h4><span class="role">Designer and Developer of</span> <a href="https://ruckuslabs.github.io/runitback/">RunItBack</a></h4>
          </div>
        </div>
        <div className="entry">
          <span className="years">2017</span>
          <div>
            <h4><span class="role">Editor of</span> <a href="https://damianmakki.github.io/verycoolweekly/">Very Cool Weekly</a></h4>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="section">Writing &amp; Talks</h2>
        <div className="entry">
          <span className="years">2017</span>
          <div>
            <h4><a href="https://narwhals-ae0a791a.simplecast.com/episodes/33-S9tXUAjz">Narwhals Podcast: Episode 33</a></h4>
            <p>Drew & Keiran are joined by Damian Makki talking about app development, frameworks and taking a business from freelance work to product development.</p>
          </div>
        </div>
        <div className="entry">
          <span className="years">Ongoing</span>
          <div>
            <h4><a href="https://medium.com/@damianmakki">Medium</a></h4>
            <p>Writing on design, engineering, and side projects.</p>
          </div>
        </div>
      </section>
    </>
  );
}
