import { useState, useRef, useEffect, useCallback } from 'react';

const CARDS = [
  {
    tint: '1',
    href: '#/blog',
    kind: 'Essay · New',
    title: 'Exploring AI, quietly',
    desc: 'Notes from six months of building small, useful things with models — and what I\'m still figuring out.',
    placeholder: 'essay / cover art',
  },
  {
    tint: '2',
    href: 'https://www.ruckuslabs.co',
    kind: 'Studio',
    title: 'Ruckus Labs — now taking projects',
    desc: 'A design studio for teams that care about craft. Brand, product, and the interfaces in between.',
    placeholder: 'studio reel',
  },
  {
    tint: '3',
    href: '#/',
    kind: 'Launch',
    title: 'Somatic: a new way to track how you feel',
    desc: 'Our tiny app for checking in with your body is out. Built with love and a lot of SwiftUI.',
    placeholder: 'product shot / somatic',
  },
  {
    tint: '4',
    href: '#/blog',
    kind: 'Notebook',
    title: 'What a week of building in public taught me',
    desc: 'Ten small posts, one big lesson about why momentum beats perfection every single time.',
    placeholder: 'sketch / process',
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
          {CARDS.map((card, i) => (
            <a key={i} className="card" data-tint={card.tint} href={card.href}>
              <div className="card-media">
                <div className="stripes"></div>
                <span className="placeholder-text">{card.placeholder}</span>
              </div>
              <div className="card-body">
                <span className="card-kind">{card.kind}</span>
                <span className="card-title">{card.title}</span>
                <p className="card-desc">{card.desc}</p>
              </div>
            </a>
          ))}
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
