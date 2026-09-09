// Small hand-drawn icon set shared by CategoryCard, nav, and headers.
// Kept as simple stroke/fill paths so they inherit color via currentColor.

export function Icon({ name, size = 19 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24' };
  switch (name) {
    case 'heart':
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 20.5s-7.2-4.5-9.8-8.6C.5 9 1.4 5.3 4.6 4.2c2.1-.7 4.2.1 5.4 1.9l2 3 2-3c1.2-1.8 3.3-2.6 5.4-1.9 3.2 1.1 4.1 4.8 2.4 7.7-2.6 4.1-9.8 8.6-9.8 8.6z" />
        </svg>
      );
    case 'chat-heart':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 5.5h16a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1H9l-4 3.5V16H4a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1z" />
          <path d="M12 13c-2-1.3-3.4-2.5-3.4-4a2 2 0 0 1 3.4-1.4A2 2 0 0 1 15.4 9c0 1.5-1.4 2.7-3.4 4z" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'people':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="8.5" r="2.8" />
          <path d="M3.5 19c0-3 2.5-5.2 5.5-5.2s5.5 2.2 5.5 5.2" />
          <circle cx="17" cy="9" r="2.2" />
          <path d="M15.5 13.6c2.4.2 4 2.1 4 4.4" />
        </svg>
      );
    case 'house':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 11.5 12 4l8 7.5" />
          <path d="M6 10v8.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10" />
          <path d="M10 19.5V15a2 2 0 0 1 4 0v4.5" />
        </svg>
      );
    case 'person':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="3.4" />
          <path d="M5 19.5c0-3.6 3.1-6.3 7-6.3s7 2.7 7 6.3" />
        </svg>
      );
    case 'mic':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9.5" y="3" width="5" height="9" rx="2.5" />
          <path d="M6 11.5a6 6 0 0 0 12 0" />
          <line x1="12" y1="17.5" x2="12" y2="21" />
          <line x1="9" y1="21" x2="15" y2="21" />
        </svg>
      );
    case 'handshake':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 12.5 6 9l3 2.2 3.4-3.4 2.2 2.2" />
          <path d="M11.4 10.8 14 8.2l2 1.4a1.6 1.6 0 0 1 .3 2.4l-2.9 2.9a1.8 1.8 0 0 1-2.5 0l-.4-.4" />
          <path d="M9.3 11.3l-.8.8a1.7 1.7 0 0 0 0 2.4c.7.7 1.8.7 2.4 0l.2-.2" />
          <path d="M2.5 12.5 5 15l1-1" />
          <path d="M18.5 9 21.5 12l-2 2" />
        </svg>
      );
    case 'laptop':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4.5" y="5.5" width="15" height="10" rx="1.3" />
          <path d="M2.5 19.5h19l-1.5-3h-16z" />
        </svg>
      );
    case 'spark':
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 2c.6 3.7 2 6 5.5 7-3.5 1-4.9 3.3-5.5 7-.6-3.7-2-6-5.5-7 3.5-1 4.9-3.3 5.5-7z" />
        </svg>
      );
    case 'chat-plus':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 5.5h16a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1H9l-4 3.5V16H4a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1z" />
          <line x1="12" y1="8" x2="12" y2="12.5" />
          <line x1="9.75" y1="10.25" x2="14.25" y2="10.25" />
        </svg>
      );
    case 'arrow-heart':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h13" />
          <path d="M12 6.5 18.5 12 12 17.5" />
          <path d="M18.7 5.8c.9-.9 2.4-.9 3 .2.6 1 .3 2.2-.6 3l-2.4 2.1-2.4-2.1c-.9-.8-1.2-2-.6-3 .6-1.1 2.1-1.1 3 0z" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'search':
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case 'copy':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="12" height="12" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      );
    case 'menu':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      );
    case 'close':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </svg>
      );
    default:
      return null;
  }
}
