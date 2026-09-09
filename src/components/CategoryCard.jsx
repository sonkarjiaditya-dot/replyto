import { Link } from 'react-router-dom';
import { Icon } from './Icons';
import { useToast } from './Toast';

export default function CategoryCard({ icon, label, desc, accent, route }) {
  const showToast = useToast();

  const content = (
    <>
      <span className="icon">
        <Icon name={icon} />
      </span>
      <span className="label">{label}</span>
      <div className="desc">{desc}</div>
    </>
  );

  if (route) {
    return (
      <Link to={route} className={`cat-card ${accent}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`cat-card ${accent}`} onClick={() => showToast(`${label} — coming soon`)}>
      {content}
    </button>
  );
}
