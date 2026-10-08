import Link from "next/link";
import { PageShell } from "./clinic-ui";
export default function NotFound() {
  return (
    <PageShell>
      <section className="section wrap">
        <div className="eyebrow">NS CLINIC</div>
        <h1>Page not found</h1>
        <p style={{ marginTop: 25 }}>
          The page you’re looking for is unavailable. Browse our treatment
          collections or contact the clinic.
        </p>
        <div className="actions">
          <Link className="btn" href="/treatments">
            Explore Treatments
          </Link>
          <Link className="btn outline" href="/contact">
            Contact NS Clinic
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
