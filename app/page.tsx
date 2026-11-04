import {
  Areas,
  Contact,
  Cta,
  Faq,
  Hero,
  Pricing,
  Services,
  Stats,
  Steps,
  Team,
  Testimonials,
  TrustBar,
  WhyUs,
} from "@/components/home/Sections";

export default function Home() {
  return (
    <main id="primary" className="site-main">
      <article className="page-article">
        <div className="entry-content">
          <Hero />
          <TrustBar />
          <Services />
          <WhyUs />
          <Stats />
          <Steps />
          <Testimonials />
          <Pricing />
          <Team />
          <Areas />
          <Faq />
          <Cta />
          <Contact />
        </div>
      </article>
    </main>
  );
}
