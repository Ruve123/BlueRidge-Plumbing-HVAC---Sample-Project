import Link from "next/link";

export default function NotFound() {
  return (
    <main id="primary" className="site-main">
      <section className="page-hero">
        <div className="container">
          <h1>Page not found</h1>
          <p>That page has gone down the drain. Let&apos;s get you back on track.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Link className="btn btn--primary" href="/">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
