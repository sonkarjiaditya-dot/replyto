import { useReplies } from '../../context/RepliesContext';
import { CATEGORIES } from '../../data/categories';

export default function Categories() {
  const { replies } = useReplies();

  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>Categories</h2>
      <div className="admin-panel">
        {CATEGORIES.map((c) => {
          const count = replies.filter((r) => r.category === c.label).length;
          return (
            <div className="cat-list-row" key={c.key}>
              <div>
                <div className="name">{c.label}</div>
                <div className="count">
                  <span className={`badge ${c.accent}`}>{c.accent}</span> · {c.sections.length} subcategories
                </div>
              </div>
              <div className="count">{count} replies</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
