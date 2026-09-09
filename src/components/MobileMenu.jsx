import { NavLink } from 'react-router-dom';
import { Icon } from './Icons';
import { CATEGORIES } from '../data/categories';

const personalLinks = CATEGORIES.filter((c) => c.accent === 'personal');
const professionalLinks = CATEGORIES.filter((c) => c.accent === 'professional');

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`nav-overlay${open ? ' open' : ''}`} onClick={onClose}>
      <nav className="nav-panel" onClick={(e) => e.stopPropagation()}>
        <div className="nav-panel-head">
          <div className="brand">
            Reply<span className="to">To</span>
          </div>
          <button className="nav-close" aria-label="Close menu" onClick={onClose}>
            <Icon name="close" />
          </button>
        </div>
        <div className="nav-links">
          <NavLink to="/" end onClick={onClose} className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>

          <div className="nav-section-label">Personal</div>
          {personalLinks.map((c) => (
            <NavLink key={c.key} to={c.route} onClick={onClose} className={({ isActive }) => (isActive ? 'active' : '')}>
              {c.navLabel}
            </NavLink>
          ))}

          <div className="nav-section-label">Professional</div>
          {professionalLinks.map((c) => (
            <NavLink key={c.key} to={c.route} onClick={onClose} className={({ isActive }) => (isActive ? 'active' : '')}>
              {c.navLabel}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
