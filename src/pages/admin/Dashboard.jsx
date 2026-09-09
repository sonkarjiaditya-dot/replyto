import { Link } from 'react-router-dom';
import { useReplies } from '../../context/RepliesContext';
import { CATEGORIES } from '../../data/categories';

export default function Dashboard() {
  const { replies } = useReplies();

  const totalReplies = replies.length;
  const featuredCount = replies.filter((r) => r.featured).length;
  const personalCount = replies.filter((r) => CATEGORIES.find((c) => c.label === r.category)?.accent === 'personal').length;
  const professionalCount = replies.filter((r) => CATEGORIES.find((c) => c.label === r.category)?.accent === 'professional').length;

  const popular = [...replies].sort((a, b) => b.popularity - a.popularity).slice(0, 5);

  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Dashboard</h2>

      <div className="stat-grid">
        <div className="stat-card accent-coral">
          <div className="stat-label">Total Replies</div>
          <div className="stat-value">{totalReplies}</div>
        </div>
        <div className="stat-card accent-coral">
          <div className="stat-label">Personal Replies</div>
          <div className="stat-value">{personalCount}</div>
        </div>
        <div className="stat-card accent-blue">
          <div className="stat-label">Professional Replies</div>
          <div className="stat-value">{professionalCount}</div>
        </div>
        <div className="stat-card accent-blue">
          <div className="stat-label">Featured Replies</div>
          <div className="stat-value">{featuredCount}</div>
        </div>
      </div>

      <div className="admin-panel">
        <h3>Popular Replies</h3>
        {popular.map((r) => (
          <div className="reply-row" key={r.id}>
            <div className="row-main">
              <div className="row-meta">
                <span className={`badge ${CATEGORIES.find((c) => c.label === r.category)?.accent || 'personal'}`}>{r.category}</span>
                <span>{r.tone}</span>
                <span>· {r.popularity} popularity</span>
              </div>
              <div className="row-text">{r.reply}</div>
            </div>
            <div className="row-actions">
              <Link className="btn btn-secondary btn-sm" to={`/admin/replies/${r.id}/edit`}>
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
