import { useState, useRef, useEffect, useCallback } from 'react';
import RuckusLabsLogo from '../images/carousel/ruckus-labs.svg';
import TraceLogo from '../images/carousel/trace.svg';
import SomaticLogo from '../images/carousel/somatic.svg';
import VeryCoolWeekly from '../images/carousel/verycoolweekly.svg';


// Card types:
//   type: 'full-bleed'  — centered image/svg, no text. props: image, href?, bg?
//   type: 'standard'    — hero image top half + text below. props: heroImage, title, description, href?, bg?
//
// Shared props:
//   href  — optional. omit to render a non-clickable div instead of a link
//   bg    — optional css color for the card background (e.g. '#fff', '#0e0e0d', 'var(--bg-subtle)')
//           omit to use var(--bg-elev), which adapts automatically to dark/light mode
const CARDS = [
  {
    type: 'full-bleed',
    href: 'https://www.ruckuslabs.co',
    image: RuckusLabsLogo,
  },
  {
    type: 'full-bleed',
    href: 'https://damianmakki.github.io/trace/',
    image: TraceLogo,
    bg: '#fff',
  },
  {
    type: 'full-bleed',
    image: SomaticLogo,
    bg: '#ffffff',
  },
  {
    type: 'full-bleed',
    href: 'https://damianmakki.github.io/verycoolweekly/',
    image: VeryCoolWeekly,
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(2);
  const trackRef = useRef(null);
  const carouselRef = useRef(null);

  const pages = Math.max(1, CARDS.length - perView + 1);

  const layout = useCallback(() => {
    if (!carouselRef.current) return;
    const w = carouselRef.current.clientWidth;
    setPerView(w < 560 ? 1 : 2);
  }, []);

  useEffect(() => {
    layout();
    window.addEventListener('resize', layout);
    return () => window.removeEventListener('resize', layout);
  }, [layout]);

  useEffect(() => {
    if (!trackRef.current) return;
    // Get the first card's width to calculate transform
    const card = trackRef.current.children[0];
    if (!card) return;
    const cardW = card.getBoundingClientRect().width;
    const gap = 14;
    const clamped = Math.min(index, pages - 1);
    trackRef.current.style.transform = `translateX(${-(clamped * (cardW + gap))}px)`;
  }, [index, perView, pages]);

  const go = (i) => setIndex(Math.max(0, Math.min(i, pages - 1)));

  return (
    <section className="block">
      <div className="featured-head">
        <h2 className="section">Featured</h2>
        <div className="car-controls">
          <button onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button onClick={() => go(index + 1)} disabled={index >= pages - 1} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>

      <div className="carousel" ref={carouselRef}>
        <div className="carousel-track" ref={trackRef}>
          {CARDS.map((card, i) => {
            const Tag = card.href ? 'a' : 'div';
            return (
              <Tag key={i} className={`card card-${card.type}`} {...(card.href && { href: card.href })}>
                <div className="card-media">
                  {card.type === 'full-bleed' && (
                    <div className="full-bleed-container" style={{ background: card.bg || 'var(--bg-elev)' }}>
                      <img src={card.image} alt="Logo" className="full-bleed-image" />
                    </div>
                  )}
                  {card.type === 'standard' && (
                    <img src={card.heroImage} alt="Hero" className="hero-image" />
                  )}
                </div>
                {card.type === 'standard' && (
                  <div className="card-body">
                    <span className="card-title">{card.title}</span>
                    <p className="card-desc">{card.description}</p>
                  </div>
                )}
              </Tag>
            );
          })}
        </div>
      </div>

      <div className="carousel-dots">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            className={'dot' + (i === index ? ' active' : '')}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
