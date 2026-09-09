import { useState } from 'react';
import { Icon } from './Icons';

export default function ReplyCard({ reply, accent = 'personal' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(reply.reply).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  };

  return (
    <div className="reply-card">
      <span className={`reply-tag ${accent}`}>{reply.tone}</span>

      {reply.incomingMessage ? (
        <div className="reply-block">
          <span className="reply-label">Situation:</span>
          <p className="reply-quote">"They said: {reply.incomingMessage}"</p>
        </div>
      ) : (
        reply.situation && (
          <div className="reply-block">
            <span className="reply-label">Situation:</span>
            <p className="reply-quote">{reply.situation}</p>
          </div>
        )
      )}

      <div className="reply-block">
        <span className="reply-label">Reply:</span>
        <p className="reply-text">{reply.reply}</p>
      </div>

      <button className={`copy-btn${copied ? ' copied' : ''}`} aria-label="Copy reply" onClick={handleCopy}>
        <Icon name="copy" />
        <span className="copy-label">{copied ? 'Copied' : 'Copy'}</span>
      </button>
    </div>
  );
}
