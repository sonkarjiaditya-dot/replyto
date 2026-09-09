import { useState } from 'react';
import { Icon } from './Icons';
import { useToast } from './Toast';

export default function SearchBar({ placeholder = 'Type or paste any message...', compact = false, onSearch }) {
  const [value, setValue] = useState('');
  const showToast = useToast();

  const submit = () => {
    if (onSearch) {
      onSearch(value);
    } else {
      showToast('Search — coming soon');
    }
  };

  return (
    <div className={`search-box${compact ? ' compact' : ''}`}>
      <Icon name="search" size={20} />
      <input
        type="text"
        placeholder={placeholder}
        aria-label={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (onSearch) onSearch(e.target.value);
        }}
        onKeyDown={(e) => e.key === 'Enter' && submit()}
      />
      <button className="search-submit" aria-label="Search" onClick={submit}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </div>
  );
}
