import Profile from '../images/profile.jpg';
import Carousel from './Carousel';

export default function About() {
  return (
    <>
      <div className="intro">
        <div className="avatar">
          <img src={Profile} alt="Damian Makki" />
        </div>
        <div className="intro-meta">
          <span className="name">Damian Makki</span>
          <span className="handle">@damianmakki</span>
        </div>
        <span className="status">
          <span className="pulse"></span> Available for select work
        </span>
      </div>

      <h1 className="hero">
        Design engineer at <span>Apple</span>, running <span>Ruckus Labs</span> on the side — building beautiful, functional digital &amp; physical products <span className="muted">since 2011</span>.
      </h1>

      <p className="lede">
        For over a decade I've worked as a freelancer, designer, and front-end developer — helping businesses and clients ship things that feel good to use. Currently I work at Apple and run <a href="https://www.ruckuslabs.co" className="inline">Ruckus Labs</a>, a small design studio.
      </p>
      <p>
        In my spare time I tinker, travel, read, and spend as much time as I can outdoors. This site is where I write, log a few projects, and keep things I'm proud of.
      </p>

      <Carousel />

      <section className="block">
        <h2 className="section">Elsewhere</h2>
        <div className="links">
          <a href="mailto:damian@makki.pro">
            <span className="left">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>
              </span>
              Email
            </span>
            <span className="handle">damian@makki.pro</span>
            <span className="arrow">↗</span>
          </a>
          <a href="https://github.com/damianmakki" target="_blank" rel="noopener noreferrer">
            <span className="left">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.38-3.88-1.38-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.85 1.18 3.11 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
              </span>
              GitHub
            </span>
            <span className="handle">damianmakki</span>
            <span className="arrow">↗</span>
          </a>
          <a href="https://linkedin.com/in/damianmakki" target="_blank" rel="noopener noreferrer">
            <span className="left">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8.14h4.6V23H.2V8.14zM8.2 8.14h4.41v2.03h.06c.61-1.15 2.11-2.36 4.35-2.36 4.65 0 5.5 3.06 5.5 7.04V23h-4.6v-6.55c0-1.56-.03-3.57-2.18-3.57-2.18 0-2.52 1.7-2.52 3.46V23H8.2V8.14z"/></svg>
              </span>
              LinkedIn
            </span>
            <span className="handle">in/damianmakki</span>
            <span className="arrow">↗</span>
          </a>
          <a href="https://literal.club/damianmakki" target="_blank" rel="noopener noreferrer">
            <span className="left">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4v16l8-4 8 4V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"/></svg>
              </span>
              Literal
            </span>
            <span className="handle">damianmakki</span>
            <span className="arrow">↗</span>
          </a>
          <a href="https://open.spotify.com/user/1241673333" target="_blank" rel="noopener noreferrer">
            <span className="left">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M7 10c3-1 7-1 10 1M7.5 13c2.5-.8 5.5-.8 8 .8M8 16c2-.5 4.5-.5 6.5.5"/></svg>
              </span>
              Spotify
            </span>
            <span className="handle">listen along</span>
            <span className="arrow">↗</span>
          </a>
          <a href="https://www.strava.com/athletes/6190541" target="_blank" rel="noopener noreferrer">
            <span className="left">
              <span className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20l6-16 4 10 2-5 4 11"/></svg>
              </span>
              Strava
            </span>
            <span className="handle">6190541</span>
            <span className="arrow">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
