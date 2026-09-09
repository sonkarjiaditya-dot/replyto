import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useReplies } from '../../context/RepliesContext';
import { CATEGORIES } from '../../data/categories';

export default function Replies() {
  const { replies, updateReply, deleteReply } = useReplies();
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [subcategoryFilter, setSubcategoryFilter] = useState('all');

  const activeCategory = CATEGORIES.find((c) => c.label === categoryFilter);
  const subcategoryOptions = activeCategory ? activeCategory.sections : [];

  // Reset the subcategory filter whenever the category changes, since the
  // previously selected subcategory may not exist in the new category.
  useEffect(() => {
    setSubcategoryFilter('all');
  }, [categoryFilter]);

  const filtered = useMemo(() => {
    return replies.filter((r) => {
      if (categoryFilter !== 'all' && r.category !== categoryFilter) return false;
      if (subcategoryFilter !== 'all' && r.subcategory !== subcategoryFilter) return false;
      if (!query.trim()) return true;
      const q = query.toLowerCase();
      return [r.reply, r.situation, r.incomingMessage, r.tone, r.subcategory, ...(r.tags || [])]
        .join(' ')
        .toLowerCase()
        .includes(q);
    });
  }, [replies, query, categoryFilter, subcategoryFilter]);

  const handleDelete = (id) => {
    if (confirm('Delete this reply? This only removes it from the current session.')) {
      deleteReply(id);
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Replies</h2>

      <div className="admin-panel">
        <div className="toolbar">
          <div className="search-box compact" style={{ background: '#fff' }}>
            <input
              type="text"
              placeholder="Search replies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <select className="select-field" style={{ maxWidth: 200 }} value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="all">All categories</option>
            {CATEGORIES.map((c) => (
              <option key={c.key} value={c.label}>
                {c.label}
              </option>
            ))}
          </select>
          <select
            className="select-field"
            style={{ maxWidth: 200 }}
            value={subcategoryFilter}
            onChange={(e) => setSubcategoryFilter(e.target.value)}
            disabled={categoryFilter === 'all'}
          >
            <option value="all">All subcategories</option>
            {subcategoryOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <Link className="btn btn-primary" to="/admin/replies/new">
            + Add Reply
          </Link>
        </div>

        {filtered.length === 0 && <div className="empty-state">No replies match this search/filter.</div>}

        {filtered.map((r) => (
          <div className="reply-row" key={r.id}>
            <div className="row-main">
              <div className="row-meta">
                <span className={`badge ${CATEGORIES.find((c) => c.label === r.category)?.accent || 'personal'}`}>{r.category}</span>
                <span>{r.subcategory}</span>
                <span>· {r.tone}</span>
                {r.featured && <span className="badge featured">Featured</span>}
              </div>
              <div className="row-text">{r.reply}</div>
            </div>
            <div className="row-actions">
              <button className="btn btn-secondary btn-sm" onClick={() => updateReply(r.id, { featured: !r.featured })}>
                {r.featured ? 'Unfeature' : 'Feature'}
              </button>
              <Link className="btn btn-secondary btn-sm" to={`/admin/replies/${r.id}/edit`}>
                Edit
              </Link>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(r.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
