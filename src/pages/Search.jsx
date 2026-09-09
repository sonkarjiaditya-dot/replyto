import { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { REPLIES } from '../data/replies';
import ReplyCard from '../components/ReplyCard';

const STOP_WORDS = new Set([
  'what', 'are', 'is', 'the', 'a', 'an', 'you', 'your', 'to',
  'do', 'does', 'did', 'i', 'me', 'my', 'we', 'they',
  'he', 'she', 'it', 'and', 'or', 'of', 'for', 'in', 'on',
  'at', 'with', 'right', 'now'
]);

const RELATED_WORDS = {
  doing: ['busy', 'up', 'activity', 'work'],
  busy: ['work', 'free'],
  love: ['romantic', 'relationship', 'girlfriend', 'boyfriend', 'crush'],
  angry: ['mad', 'upset', 'annoyed'],
  thanks: ['thank', 'welcome', 'appreciate'],
  sorry: ['apology', 'forgive'],
  hello: ['hi', 'hey', 'greeting'],
  hi: ['hello', 'hey', 'greeting'],
  hey: ['hello', 'hi', 'greeting'],
  boss: ['manager', 'work', 'professional'],
  job: ['interview', 'work', 'career'],
  interview: ['job', 'interviewer', 'career'],
  crush: ['flirting', 'love', 'romantic'],
  friend: ['friends', 'buddy', 'friendship'],
};

function getWords(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter((word) => word && !STOP_WORDS.has(word));
}

function scoreReply(item, query) {
  const queryWords = getWords(query);

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

  const textWords = new Set(getWords(text));

  let score = 0;

  queryWords.forEach((word) => {
    if (textWords.has(word)) score += 10;

    const related = RELATED_WORDS[word] || [];
    related.forEach((relatedWord) => {
      if (textWords.has(relatedWord)) score += 4;
    });

    if (text.includes(word)) score += 2;
  });

  // Give extra weight when the incoming message itself matches.
  const incoming = [
    item.incomingMessage,
    item.yourMessage,
    item.theirResponse,
    item.situation,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  queryWords.forEach((word) => {
    if (incoming.includes(word)) score += 8;
  });

  return score;
}

export default function Search() {
  const [params] = useSearchParams();
  const query = (params.get('q') || '').trim();

  const results = useMemo(() => {
    if (!query) return [];

    return REPLIES
      .map((item) => ({
        item,
        score: scoreReply(item, query),
      }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 50)
      .map(({ item }) => item);
  }, [query]);

  return (
    <main className="page search-page">
      <div className="container">
        <Link to="/" className="back-link">← Back home</Link>

        <h1>Search results</h1>

        {query && (
          <p className="search-summary">
            Results for <strong>“{query}”</strong>
          </p>
        )}

        {!query ? (
          <div className="empty-state">
            <h2>What are you looking for?</h2>
            <p>
              Search for things like “what are you doing”,
              “angry”, “boss”, “love”, or “thanks”.
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="empty-state">
            <h2>No replies found</h2>
            <p>
              Try describing the situation differently, like
              “what should I reply to my crush?”
            </p>
          </div>
        ) : (
          <div className="reply-list">
            {results.map((reply) => (
              <ReplyCard
                key={reply.id}
                reply={reply}
                accent={
                  reply.category === 'GF / BF'
                    ? 'personal'
                    : 'professional'
                }
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
