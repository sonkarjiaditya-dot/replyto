import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="wrap">
        <div className="page-header personal">
          <h1>Page not found</h1>
          <p>
            That page doesn't exist yet.{' '}
            <Link to="/" style={{ color: 'var(--coral)', fontWeight: 600 }}>
              Back to home
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
