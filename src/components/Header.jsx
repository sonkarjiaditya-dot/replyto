import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icons';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link to="/" className="brand-block" onClick={() => setOpen(false)}>
          <div className="bubble-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="7" cy="12" r="1.6" fill="currentColor" />
              <circle cx="12" cy="12" r="1.6" fill="currentColor" />
              <circle cx="17" cy="12" r="1.6" fill="currentColor" />
            </svg>
          </div>
          <div className="brand-text">
            <div className="brand">
              Reply<span className="to">To</span>
            </div>
            <div className="tagline">Good replies. Better conversations.</div>
          </div>
        </Link>
        <button className="menu-btn" aria-label="Open menu" onClick={() => setOpen(true)}>
          <Icon name="menu" />
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
