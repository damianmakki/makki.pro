import { HashRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import About from './components/About';
import Blog from './pages/Blog';
import Resume from './pages/Resume';

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('makki.theme') || 'dark';
    } catch { return 'dark'; }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.density = 'comfy';
    try { localStorage.setItem('makki.theme', theme); } catch {}
  }, [theme]);

  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  return [theme, toggle];
}

function Nav({ theme, onToggle }) {
  return (
    <nav className="top">
      <div className="nav-inner">
        <NavLink to="/" className="brand">
          <span>makki</span><span className="sup">.pro</span>
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink>
          <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>Resume</NavLink>
        </div>
        <div className="nav-right">
          <button className="icon-btn" onClick={onToggle} aria-label="Toggle theme">
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

function PageWrapper({ children }) {
  const { pathname } = useLocation();
  return (
    <main key={pathname} className="page-enter">
      <div className="col">{children}</div>
    </main>
  );
}

export default function Portfolio() {
  const [theme, toggleTheme] = useTheme();

  return (
    <HashRouter>
      <div className="app">
        <Nav theme={theme} onToggle={toggleTheme} />
        <Routes>
          <Route path="/" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="/resume" element={<PageWrapper><Resume /></PageWrapper>} />
        </Routes>
        <footer className="site">
          <span className="spring">© {new Date().getFullYear()} Damian Makki</span>
        </footer>
      </div>
    </HashRouter>
  );
}
