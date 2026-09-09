// Turns a subcategory name into the same slug used for the section's
// anchor id, so a pill click can jump straight to that section.
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function SubcategoryNav({ sections, idPrefix, accent = 'personal' }) {
  const handleClick = (section) => (e) => {
    e.preventDefault();
    const el = document.getElementById(`${idPrefix}-${slugify(section)}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="subcat-nav">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${idPrefix}-${slugify(section)}`}
          className={`subcat-pill ${accent}`}
          onClick={handleClick(section)}
        >
          {section}
        </a>
      ))}
    </div>
  );
}
