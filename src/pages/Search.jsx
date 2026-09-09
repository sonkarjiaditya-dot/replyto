import { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { REPLIES } from '../data/replies';
import ReplyCard from '../components/ReplyCard';

export default function Search() {
  const [params] = useSearchParams();
  const query = (params.get('q') || '').trim().toLowerCase();

  const results = useMemo(() => {
    if (!query) return [];

    return REPLIES.filter((item) => {
      const text = [
        item.category,
        item.subcategory,
        item.situation,
        item.incomingMessage,
        item.yourMessage,
        item.theirResponse,
        item.reply,
        item.tone,
        ...(item.tags || []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return text.includes(query);
    }).slice(0, 50);
  }, [query]);

  return (
    <main className="page search-page">
      <div className="container">
        <Link to="/" className="back-link">← Back home</Link>

        <h1>
          Search results
        </h1>

        {query && (
          <p className="search-summary">
            Results for <strong>“{query}”</strong>
          </p>
        )}

        {!query ? (
          <div className="empty-state">
            <h2>What are you looking for?</h2>
            <p>Search for things like “angry”, “boss”, “love”, “thanks”, or “cute”.</p>
          </div>
        ) : results.length === 0 ? (
          <div className="empty-state">
            <h2>No replies found</h2>
            <p>Try a different message or situation.</p>
          </div>
        ) : (
          <div className="reply-list">
            {results.map((reply) => (
              <ReplyCard
                key={reply.id}
                reply={reply}
                accent={reply.category === 'GF / BF' ? 'personal' : 'professional'}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
