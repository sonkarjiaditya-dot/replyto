import { useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import ReplyCard from '../components/ReplyCard';
import SearchBar from '../components/SearchBar';
import SubcategoryNav, { slugify } from '../components/SubcategoryNav';
import { useReplies } from '../context/RepliesContext';

export default function CategoryPage({ category }) {
  const { replies } = useReplies();

  // NOTE: the search bar here is UI-only for now (per current instructions) —
  // it does not filter anything yet. All replies for this category are
  // always shown, grouped by subcategory.
  const categoryReplies = useMemo(
    () => replies.filter((r) => r.category === category.label),
    [replies, category.label]
  );

  const bySection = useMemo(() => {
    const map = {};
    categoryReplies.forEach((r) => {
      if (!map[r.subcategory]) map[r.subcategory] = [];
      map[r.subcategory].push(r);
    });
    return map;
  }, [categoryReplies]);

  const sections = category.sections.filter((s) => bySection[s]?.length);
  const idPrefix = category.key;

  return (
    <>
      <Header />
      <main className="wrap">
        <PageHeader title={category.label} subtitle={category.subtitle} accent={category.accent} />

        <div className="search-shell" style={{ marginBottom: 18 }}>
          <SearchBar placeholder={`Search ${category.label} replies...`} />
        </div>

        <SubcategoryNav sections={category.sections} idPrefix={idPrefix} accent={category.accent} />

        {sections.length === 0 && <div className="empty-state">No replies in this category yet.</div>}

        {sections.map((section) => (
          <section className="block" id={`${idPrefix}-${slugify(section)}`} key={section}>
            <div className="section-head">
              <h2>{section}</h2>
            </div>
            <div className="reply-list grid-mode">
              {bySection[section].map((reply) => (
                <ReplyCard key={reply.id} reply={reply} accent={category.accent} />
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
