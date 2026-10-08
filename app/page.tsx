import {
  PageShell,
  Hero,
  Popular,
  Intro,
  CategoryCards,
  SectionHead,
  Feature,
  Finder,
  Process,
  Results,
  Reviews,
  Location,
  CTA,
} from "./clinic-ui";
export default function Home() {
  return (
    <PageShell>
      <Hero />
      <Intro />
      <Popular />
      <Finder />
      <section className="section wrap">
        <SectionHead
          label="THE FULL COLLECTION"
          title="Care, in all its forms."
          href="/treatments"
          link="Browse all treatments"
        />
        <p className="section-intro">
          Explore the clinic’s range in six considered collections. Whether you
          know the treatment you want or are still comparing your options, each
          collection explains the services and what to discuss before booking.
        </p>
        <CategoryCards />
      </section>
      <Feature />
      <Feature skin />
      <Process />
      <Results preview />
      <Reviews preview />
      <Location />
      <CTA />
    </PageShell>
  );
}
