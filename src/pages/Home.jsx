import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryCard from '../components/CategoryCard';
import SearchBar from '../components/SearchBar';
import ReplyCard from '../components/ReplyCard';
import { CATEGORIES } from '../data/categories';
import { getFeaturedReplies } from '../data/replies';
import { useReplies } from '../context/RepliesContext';
import { useMemo } from 'react';

const personalHomeCards = [
  { key: 'gf-bf', icon: 'heart', label: 'GF / BF', desc: 'Love, care, fights and more' },
  { key: 'crush-flirting', icon: 'chat-heart', label: 'Crush / Flirting', desc: 'Make the right impression' },
  { key: 'friends', icon: 'people', label: 'Friends', desc: 'Fun, support, comebacks' },
  { key: 'family', icon: 'house', label: 'Family', desc: 'Respect, care, relationships', route: null },
];

const professionalHomeCards = [
  { key: 'boss', icon: 'person', label: 'Boss / Manager', desc: 'Updates, leave, apologies' },
  { key: 'interviewer', icon: 'mic', label: 'Interviewer', desc: 'Make a great impression' },
  { key: 'client', icon: 'handshake', label: 'Client / Customer', desc: 'Professional and polite' },
  { key: 'coworker', icon: 'laptop', label: 'Coworker', desc: 'Teamwork, updates, support' },
];

function resolveRoute(card) {
  if (card.route === null) return null;
  const match = CATEGORIES.find((c) => c.key === card.key);
  return match ? match.route : null;
}

export default function Home() {
  const { replies } = useReplies();
  const featured = useMemo(() => {
    const list = replies.filter((r) => r.featured).sort((a, b) => b.popularity - a.popularity).slice(0, 3);
    return list.length ? list : getFeaturedReplies(3);
  }, [replies]);

  return (
    <>
      <Header />
      <main className="wrap">
        <section className="hero">
          <div className="doodle">
            <span>Good</span>
            <span>Replies</span>
            <span>Happier</span>
            <span>Conversations</span>
          </div>

          <h1>
            Don't know
            <br />
            <span className="line2">what to say?</span>
          </h1>
          <p className="sub">Find the right reply for any conversation.</p>

          <div className="search-shell">
            <SearchBar />
            <div className="try-row">
              <span className="try-label">Try:</span>
              <span>"She's angry with me"</span>
              <span className="sep">|</span>
              <span>"How to reply to my boss?"</span>
              <span className="sep">|</span>
              <span>"Thanks message"</span>
            </div>
          </div>
        </section>

        <section className="block">
          <div className="section-head">
            <h2>Choose a situation</h2>
            <Link className="view-all" to="#">View all ›</Link>
          </div>

          <div className="group-head personal">
            <span className="dot">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 20.5s-7.2-4.5-9.8-8.6C.5 9 1.4 5.3 4.6 4.2c2.1-.7 4.2.1 5.4 1.9l2 3 2-3c1.2-1.8 3.3-2.6 5.4-1.9 3.2 1.1 4.1 4.8 2.4 7.7-2.6 4.1-9.8 8.6-9.8 8.6z" />
              </svg>
            </span>
            <span className="label">Personal</span>
            <span className="rule"></span>
          </div>
          <div className="cat-grid">
            {personalHomeCards.map((card) => (
              <CategoryCard key={card.key} icon={card.icon} label={card.label} desc={card.desc} accent="personal" route={resolveRoute(card)} />
            ))}
          </div>

          <div className="group-head professional">
            <span className="dot">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="7.5" width="18" height="12" rx="1.5" />
                <path d="M8.5 7.5V5.8a1.3 1.3 0 0 1 1.3-1.3h4.4a1.3 1.3 0 0 1 1.3 1.3V7.5" />
                <line x1="3" y1="12.5" x2="21" y2="12.5" />
              </svg>
            </span>
            <span className="label">Professional</span>
            <span className="rule"></span>
          </div>
          <div className="cat-grid">
            {professionalHomeCards.map((card) => (
              <CategoryCard key={card.key} icon={card.icon} label={card.label} desc={card.desc} accent="professional" route={resolveRoute(card)} />
            ))}
          </div>
        </section>

        <section className="block">
          <div className="section-head">
            <h2>Popular Replies</h2>
            <Link className="view-all" to="#">View all ›</Link>
          </div>
          <div className="reply-list">
            {featured.map((reply) => (
              <ReplyCard
                key={reply.id}
                reply={reply}
                accent={CATEGORIES.find((c) => c.label === reply.category)?.accent || 'personal'}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
