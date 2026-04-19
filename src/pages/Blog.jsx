import { useState } from 'react';

const POSTS = [
  { topic: 'ai', date: 'Apr 04 · 26', title: 'Exploring AI, quietly: six months of small experiments', excerpt: 'I spent the last two quarters building unserious tools with models — a kitchen timer that listens, a dictation pad, a tiny agent that edits my calendar — and here\'s what I learned about where this actually belongs in everyday life.', read: '12 min', featured: true },
  { topic: 'design', date: 'Mar 22 · 26', title: 'On craft, at scale', excerpt: 'Two years inside a huge design org taught me that craft isn\'t the enemy of scale — it\'s the only thing that survives it.', read: '8 min' },
  { topic: 'engineering', date: 'Feb 28 · 26', title: 'The case for writing less JavaScript', excerpt: 'A tour of the patterns I\'ve been reaching for lately — view transitions, declarative shadow DOM, and why I stopped using three framework features entirely.', read: '11 min' },
  { topic: 'notebook', date: 'Feb 10 · 26', title: 'Notes from a week offline', excerpt: 'Seven days, no phone, a lot of paper. What I noticed about my own attention when the feed went away.', read: '4 min' },
  { topic: 'design', date: 'Jan 18 · 26', title: 'Type in interfaces: a short field guide', excerpt: 'Rules I follow, rules I break, and a cheat sheet for picking type that actually holds up across 100+ surfaces.', read: '7 min' },
  { topic: 'ai', date: 'Dec 09 · 25', title: 'A dictation pad, rebuilt three times', excerpt: 'Why the most interesting AI product I use every day is a 200-line app that just transcribes and shuts up.', read: '6 min' },
  { topic: 'engineering', date: 'Nov 14 · 25', title: 'What I shipped this year', excerpt: 'A brief, opinionated review of every side project I started, finished, or quietly abandoned in 2025.', read: '5 min' },
  { topic: 'notebook', date: 'Oct 02 · 25', title: 'The bike I built from parts', excerpt: 'A weekend project turned into three months of quiet Saturdays in the garage. Some notes, in case you want to try it.', read: '9 min' },
  { topic: 'design', date: 'Aug 19 · 25', title: 'Designing the seam', excerpt: 'Most product design happens at the edges between teams. Here\'s how I think about making those edges disappear.', read: '10 min' },
];

const TOPICS = ['all', 'ai', 'design', 'engineering', 'notebook'];
const TOPIC_LABELS = { all: 'All', ai: 'AI', design: 'Design', engineering: 'Engineering', notebook: 'Notebook' };

export default function Blog() {
  const [activeTopic, setActiveTopic] = useState('all');

  const featured = POSTS.find(p => p.featured);
  const list = POSTS.filter(p => !p.featured);
  const visible = (post) => activeTopic === 'all' || post.topic === activeTopic;

  return (
    <>
      <div className="resume-header">
        <div>
          <h1 className="hero" style={{ marginBottom: 6 }}>Writing</h1>
          <p className="subtitle" style={{ color: 'var(--fg-muted)', margin: 0 }}>Essays, notes, and experiments. {POSTS.length} posts.</p>
        </div>
        <a href="#rss" className="download-btn">
          RSS
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1.5" fill="currentColor"/>
          </svg>
        </a>
      </div>

      <div className="topic-bar">
        {TOPICS.map(t => (
          <span
            key={t}
            className={'topic' + (activeTopic === t ? ' active' : '')}
            onClick={() => setActiveTopic(t)}
          >
            {TOPIC_LABELS[t]}
          </span>
        ))}
      </div>

      {featured && visible(featured) && (
        <article className="post featured" data-topic={featured.topic}>
          <div className="media">
            <div className="stripes"></div>
            <span className="placeholder-text">feature image · 16:9</span>
          </div>
          <div className="meta">
            <span className="eyebrow">Featured</span>
            <span className="date">{featured.date}</span>
            <span className="date">· {featured.read}</span>
          </div>
          <h3>{featured.title}</h3>
          <p className="excerpt">{featured.excerpt}</p>
        </article>
      )}

      <div className="post-list">
        {list.filter(visible).map((post, i) => (
          <article key={i} className="post" data-topic={post.topic}>
            <span className="date">{post.date}</span>
            <div className="body">
              <h3>{post.title}</h3>
              <p className="excerpt">{post.excerpt}</p>
            </div>
            <span className="read">{post.read}</span>
          </article>
        ))}
      </div>
    </>
  );
}
