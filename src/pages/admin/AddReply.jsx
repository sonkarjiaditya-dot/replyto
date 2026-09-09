import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useReplies } from '../../context/RepliesContext';
import { CATEGORIES } from '../../data/categories';

const emptyForm = {
  category: CATEGORIES[0].label,
  subcategory: '',
  situation: '',
  incomingMessage: '',
  reply: '',
  tone: '',
  tags: '',
  featured: false,
};

export default function AddReply() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const { getById, addReply, updateReply } = useReplies();
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (isEdit) {
      const existing = getById(id);
      if (existing) {
        setForm({ ...existing, tags: (existing.tags || []).join(', ') });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const activeCategory = CATEGORIES.find((c) => c.label === form.category) || CATEGORIES[0];

  const handleChange = (field) => (e) => {
    const value = field === 'featured' ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      tags: form.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      popularity: form.popularity ?? 50,
    };

    if (isEdit) {
      updateReply(Number(id), payload);
    } else {
      addReply(payload);
    }
    navigate('/admin/replies');
  };

  return (
    <div>
      <h2 style={{ marginBottom: 16 }}>{isEdit ? 'Edit Reply' : 'Add Reply'}</h2>

      <form className="admin-panel" onSubmit={handleSubmit}>
        <div className="form-grid two-col">
          <div className="form-field">
            <label>Category</label>
            <select className="select-field" value={form.category} onChange={handleChange('category')}>
              {CATEGORIES.map((c) => (
                <option key={c.key} value={c.label}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label>Subcategory</label>
            <select className="select-field" value={form.subcategory} onChange={handleChange('subcategory')}>
              <option value="">Select a subcategory</option>
              {activeCategory.sections.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-field" style={{ marginTop: 14 }}>
          <label>Situation (optional)</label>
          <input className="text-field" value={form.situation} onChange={handleChange('situation')} placeholder="e.g. They complimented you" />
        </div>

        <div className="form-field" style={{ marginTop: 14 }}>
          <label>Incoming Message (optional)</label>
          <input className="text-field" value={form.incomingMessage} onChange={handleChange('incomingMessage')} placeholder="e.g. You look good today" />
        </div>

        <div className="form-field" style={{ marginTop: 14 }}>
          <label>Reply</label>
          <textarea className="textarea-field" value={form.reply} onChange={handleChange('reply')} placeholder="The suggested reply text" required />
        </div>

        <div className="form-grid two-col" style={{ marginTop: 14 }}>
          <div className="form-field">
            <label>Tone</label>
            <input className="text-field" value={form.tone} onChange={handleChange('tone')} placeholder="e.g. Flirty, Professional" />
          </div>
          <div className="form-field">
            <label>Tags (comma separated)</label>
            <input className="text-field" value={form.tags} onChange={handleChange('tags')} placeholder="e.g. compliment, flirty" />
          </div>
        </div>

        <div className="form-field" style={{ marginTop: 14 }}>
          <label className="checkbox-field">
            <input type="checkbox" checked={Boolean(form.featured)} onChange={handleChange('featured')} />
            Featured / Popular
          </label>
        </div>

        <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/admin/replies')}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
