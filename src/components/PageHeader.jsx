export default function PageHeader({ title, subtitle, accent = 'personal' }) {
  return (
    <div className={`page-header ${accent}`}>
      <span className="accent-tag">{accent === 'personal' ? 'Personal' : 'Professional'}</span>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
