import { useState, useEffect } from 'react';
import Profile from '../images/profile.png';
import RetroProfile from '../images/makki-retro.png';
import Carousel from './Carousel';

export default function About() {
  const [isRetro, setIsRetro] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleImageClick = () => {
    setAnimate(true);
    const newRetroState = !isRetro;
    setIsRetro(newRetroState);
    localStorage.setItem('isRetro', JSON.stringify(newRetroState));
    setTimeout(() => setAnimate(false), 400);
  };

  useEffect(() => {
    // Check for saved state in localStorage on component mount
    const savedRetroState = localStorage.getItem('isRetro');
    if (savedRetroState) {
      setIsRetro(JSON.parse(savedRetroState));
    }
    
    const favicon = document.querySelector('link[rel*="icon"]');
    if (favicon) {
      favicon.href = isRetro ? RetroProfile : Profile;
    }
  }, [isRetro]);

  return (
    <>
      <div className="intro">
        <div className="avatar">
          <img
            src={isRetro ? RetroProfile : Profile}
            alt="Damian Makki"
            onClick={handleImageClick}
            className={`cursor-pointer ${animate ? 'pop-animate' : ''}`}
          />
        </div>
        <div className="intro-meta">
          <h1 className="name">Damian Makki</h1>
          <span className="handle">@damianmakki</span>
        </div>
        {/* <span className="status">
          <span className="pulse"></span> Available for select work
        </span> */}
      </div>

      <p>For over a decade I've worked as a freelancer, designer, and front-end developer helping businesses and clients ship things that feel great to use. Currently I work at Apple and run <a href="https://www.ruckuslabs.co" className="inline">Ruckus Labs</a>, a small design studio.
      </p>
      <p>In my spare time I tinker, travel, read, and spend as much time as I can outdoors. This site is where I write, log a few projects, and keep things I'm proud of.
      </p>

      <Carousel />

      <section className="block">
        <h2 className="section">Links</h2>
        <div className="links">
          <a href="mailto:damian@makki.pro">
            <span className="left">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
              </span>
              Email
            </span>
            <span className="arrow">↗</span>
          </a>
          <a href="https://www.dribbble.com/damianmakki" target="_blank" rel="noopener noreferrer">
            <span className="left">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z" />
                </svg>
              </span>
              Dribbble
            </span>
            <span className="arrow">↗</span>
          </a>
          <a href="https://github.com/damianmakki" target="_blank" rel="noopener noreferrer">
            <span className="left">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </span>
              GitHub
            </span>
            <span className="arrow">↗</span>
          </a>
          <a href="https://www.instagram.com/damianmakki" target="_blank" rel="noopener noreferrer">
            <span className="left">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </span>
              Instagram
            </span>
            <span className="arrow">↗</span>
          </a>

          <a href="https://linkedin.com/in/damianmakki" target="_blank" rel="noopener noreferrer">
            <span className="left">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </span>
              LinkedIn
            </span>
            <span className="arrow">↗</span>
          </a>
          <a href="https://literal.club/damianmakki" target="_blank" rel="noopener noreferrer">
            <span className="left">
              <span className="icon">
                <svg width="27" height="37" viewBox="0 0 27 37" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0.724766 22.39L12.7927 23.9998L13.2765 20.3731L4.83516 19.2471L7.27067 0.988923L3.64404 0.505157L0.724766 22.39Z"></path><path d="M1.94385 32.2403L25.2972 28.4698L25.8772 32.0626L2.52392 35.8331L1.94385 32.2403Z"></path><path d="M23.688 15.0347L21.926 10.7233L20.2633 6.58783L18.4643 2.11073L16.068 3.09655L17.8249 7.43902L19.4666 11.5072L21.2917 16.0205L23.688 15.0347Z"></path><path d="M14.3785 13.5268L17.4113 9.9921L20.2943 6.59286L23.4146 2.91253L25.3773 4.60434L22.3394 8.17022L19.4976 11.5122L16.3411 15.2187L14.3785 13.5268Z"></path><path d="M17.4113 9.99212L12.9278 9.26595L13.3413 6.71286L17.8559 7.44407L22.3394 8.17024L26.8229 8.8964L26.4094 11.4495L21.9882 10.7334L17.4113 9.99212Z"></path><defs><clipPath id="clip0"><rect width="26.6885" height="37" fill="white" transform="translate(0.311523)"></rect></clipPath></defs></svg>
              </span>
              Literal
            </span>
            <span className="arrow">↗</span>
          </a>
          <a href="https://open.spotify.com/user/1241673333" target="_blank" rel="noopener noreferrer">
            <span className="left">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
                </svg>
              </span>
              Spotify
            </span>
            <span className="arrow">↗</span>
          </a>
          <a href="https://www.strava.com/athletes/6190541" target="_blank" rel="noopener noreferrer">
            <span className="left">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-strava" viewBox="0 0 16 16">
                  <path d="M6.731 0 2 9.125h2.788L6.73 5.497l1.93 3.628h2.766zm4.694 9.125-1.372 2.756L8.66 9.125H6.547L10.053 16l3.484-6.875z" />
                </svg>
              </span>
              Strava
            </span>
            <span className="arrow">↗</span>
          </a>
          <a href="https://substack.com/@damianmakki" target="_blank" rel="noopener noreferrer">
            <span className="left">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-substack" viewBox="0 0 16 16">
                  <path d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z" />
                </svg>
              </span>
              Substack
            </span>
            <span className="arrow">↗</span>
          </a>
          <a href="https://x.com/damianmakki" target="_blank" rel="noopener noreferrer">
            <span className="left">
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </span>
              X
            </span>
            <span className="arrow">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
