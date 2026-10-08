"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  business,
  BOOKING_URL,
  categories,
  treatments,
  whatsapp,
  reviews,
  portfolio,
  guideLinks,
  areas,
  type Treatment,
} from "@/lib/clinic";
import { categoryContent, lipFAQs } from "@/lib/content";

export function Book({
  text = "Book Appointment",
  outline = false,
}: {
  text?: string;
  outline?: boolean;
}) {
  return (
    <Link
      className={`btn ${outline ? "outline" : ""}`}
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
      <ArrowUpRight size={16} aria-hidden="true" />
    </Link>
  );
}
export function Stars() {
  return (
    <span className="stars" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={13}
          fill="currentColor"
          strokeWidth={0}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}
export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="NS Clinic home">
      <span className="logo-monogram">
        NS<span className="logo-dot">.</span>
      </span>
      <span className="logo-name">
        CLINIC<span>AESTHETICS · SKIN · BODY</span>
      </span>
    </Link>
  );
}
export function Header() {
  return (
    <>
      <div className="topline">
        <div className="wrap">
          <span>Advanced aesthetics. A personal approach.</span>
          <Link href={business.googleMapsURL} target="_blank" rel="noreferrer">
            <MapPin size={12} /> Stanningley, Leeds
          </Link>
          <Link href={`tel:${business.internationalPhone}`}>
            {business.phone}
          </Link>
        </div>
      </div>
      <header>
        <div className="wrap header-inner">
          <Logo />
          <nav aria-label="Main navigation">
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-trigger">
                Treatments
                <ChevronDown size={12} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mega-menu">
                <div className="mega-intro">
                  <span className="eyebrow">A CONSIDERED COLLECTION</span>
                  <h3>Find your starting point.</h3>
                  <p>
                    From facial definition to advanced skin care, explore your
                    options.
                  </p>
                  <DropdownMenuItem asChild>
                    <Link className="text-link" href="/treatments">
                      All treatments <ArrowRight size={15} />
                    </Link>
                  </DropdownMenuItem>
                </div>
                <div className="mega-links">
                  {categories.map((c) => (
                    <DropdownMenuItem asChild key={c.slug}>
                      <Link href={`/${c.slug}`}>
                        <span>{c.name}</span>
                        <ArrowUpRight size={15} />
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            {[
              ["Results", "/results"],
              ["About", "/about"],
              ["Reviews", "/reviews"],
              ["Prices", "/prices"],
              ["Contact", "/contact"],
            ].map(([n, u]) => (
              <Link key={u} href={u}>
                {n}
              </Link>
            ))}
          </nav>
          <div className="desktop-book">
            <Book />
          </div>
          <div className="mobile-menu">
            <Sheet>
              <SheetTrigger
                className="menu-button"
                aria-label="Open navigation"
              >
                <Menu size={24} />
              </SheetTrigger>
              <SheetContent className="mobile-sheet">
                <SheetTitle>NS Clinic</SheetTitle>
                <SheetDescription>
                  Aesthetics, skin & body in Stanningley.
                </SheetDescription>
                <div className="mobile-nav">
                  {[
                    ["Home", "/"],
                    ["All Treatments", "/treatments"],
                    ...categories.map((c) => [c.name, `/${c.slug}`]),
                    ["Results", "/results"],
                    ["About", "/about"],
                    ["Reviews", "/reviews"],
                    ["Prices & Offers", "/prices"],
                    ["Contact", "/contact"],
                  ].map(([n, u]) => (
                    <SheetClose asChild key={u}>
                      <Link href={u}>
                        {n}
                        <ArrowUpRight size={16} />
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                <Book />
                <Link
                  className="text-link"
                  href={`tel:${business.internationalPhone}`}
                >
                  {business.phone}
                </Link>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
export function Footer() {
  const list = (names: string[]) =>
    names.map((n) => {
      const t = treatments.find((t) => t.name === n)!;
      return (
        <Link key={n} href={t.link}>
          {n}
        </Link>
      );
    });
  return (
    <>
      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div>
              <div className="eyebrow">YOUR NEXT STEP</div>
              <h2>A little time for you.</h2>
            </div>
            <Book />
          </div>
          <div className="footer-grid">
            <div className="footer-brand">
              <Logo />
              <p>
                Advanced aesthetics, skin and body care. A personal clinic in
                Stanningley, welcoming clients from across Leeds and West
                Yorkshire.
              </p>
              <Link
                className="footer-location"
                href={business.googleMapsURL}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={15} /> Find NS Clinic
              </Link>
            </div>
            <div>
              <h3>Facial Aesthetics</h3>
              {list([
                "Lip Fillers",
                "Russian Lip Fillers",
                "Dermal Fillers",
                "Anti-Wrinkle Treatments",
                "PDO Thread Lift",
              ])}
            </div>
            <div>
              <h3>Skin & Body</h3>
              {list([
                "Skin Boosters",
                "Microneedling",
                "HIFU Face",
                "Body Contouring",
                "Laser Hair Removal",
              ])}
            </div>
            <div>
              <h3>Explore</h3>
              {[
                ["About the clinic", "/about"],
                ["Treatment gallery", "/results"],
                ["Client reviews", "/reviews"],
                ["Prices & offers", "/prices"],
                ["Areas we serve", "/areas"],
              ].map(([n, u]) => (
                <Link href={u} key={u}>
                  {n}
                </Link>
              ))}
            </div>
            <div>
              <h3>Visit & Contact</h3>
              <address>
                {business.address.slice(0, 5).map((a) => (
                  <span key={a}>
                    {a}
                    <br />
                  </span>
                ))}
              </address>
              <Link href={`tel:${business.internationalPhone}`}>
                {business.phone}
              </Link>
              <Link href={whatsapp()}>WhatsApp NS Clinic</Link>
              <Link
                href={business.treatwellURL}
                target="_blank"
                rel="noreferrer"
              >
                Find us on Treatwell <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} NS Clinic. All rights reserved.
            </span>
            <div>
              {[
                ["Privacy", "/privacy"],
                ["Cookies", "/cookies"],
                ["Terms", "/terms"],
                ["Treatment information", "/treatment-disclaimer"],
              ].map(([n, u]) => (
                <Link href={u} key={u}>
                  {n}
                </Link>
              ))}
            </div>
          </div>
          <p className="image-disclosure">
            Treatment imagery is illustrative unless identified as the NS Clinic
            public portfolio. Individual results vary.
          </p>
        </div>
      </footer>
      <div className="mobile-bar">
        <Book text="Book Appointment" />
        <Link
          className="mobile-whatsapp"
          href={whatsapp()}
          aria-label="WhatsApp NS Clinic"
        >
          <MessageCircle size={21} />
        </Link>
      </div>
    </>
  );
}
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
export function Hero() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="small-line" /> AESTHETICS · SKIN · BODY · LASER
          </div>
          <h1>
            Advanced Aesthetics &amp; Skin Treatments <em>in Leeds.</em>
          </h1>
          <p>
            Personalised aesthetic, skin, body and laser treatments from NS
            Clinic in Stanningley, Leeds.
          </p>
          <div className="actions">
            <Link className="btn" href="/treatments">
              Explore Treatments
              <ArrowUpRight size={16} />
            </Link>
            <Book outline />
          </div>
          <div className="hero-trust">
            <div>
              <Stars />
              <span>
                <strong>{business.googleRating.toFixed(1)}</strong> Google
                Rating
              </span>
            </div>
            <span className="trust-location">
              <MapPin size={14} /> Stanningley, Leeds
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <span className="vertical-label">
            PERSONALLY CONSIDERED / NS CLINIC
          </span>
          <div className="hero-image">
            <Image
              unoptimized
              src="/images/editorial/hero.webp"
              alt="Close-up of natural skin and facial features — illustrative editorial photograph"
              width={900}
              height={1100}
              fetchPriority="high"
            />
            <div className="hero-caption">
              <span>Skin. Shape. Balance.</span>
              <span>Care, considered.</span>
            </div>
          </div>
          <div className="hero-seal">
            <Sparkles size={23} strokeWidth={1} />
            <span>
              A personal
              <br />
              approach to you
            </span>
          </div>
        </div>
      </section>
      <div className="trust-bar">
        <div className="wrap">
          <span>
            <Star size={15} />
            <strong>5.0 Google Rating</strong>
          </span>
          <span>
            <Check size={16} />
            Personalised Treatments
          </span>
          <span>
            <Sparkles size={16} />
            Wide Treatment Range
          </span>
          <span>
            <MapPin size={16} />
            Leeds-Based Clinic
          </span>
        </div>
      </div>
    </>
  );
}
export function SectionHead({
  label,
  title,
  href,
  link,
}: {
  label: string;
  title: string;
  href?: string;
  link?: string;
}) {
  return (
    <div className="section-head">
      <div>
        <div className="eyebrow">{label}</div>
        <h2>{title}</h2>
      </div>
      {href && (
        <Link className="text-link" href={href}>
          {link}
          <ArrowUpRight size={16} />
        </Link>
      )}
    </div>
  );
}
export function TreatmentCard({
  t,
  image = true,
}: {
  t: Treatment;
  image?: boolean;
}) {
  const c = categories.find((c) => c.slug === t.category)!;
  return (
    <article className="treatment-card" id={t.id}>
      {image && (
        <Link
          className="card-image"
          href={t.link}
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            unoptimized
            src={t.image}
            alt={t.imageAlt}
            width={700}
            height={550}
            loading="lazy"
          />
          <span className="card-arrow">
            <ArrowUpRight size={19} />
          </span>
        </Link>
      )}
      <div className="card-body">
        <div className="category-label">{c.name}</div>
        <h3>
          <Link href={t.link}>{t.name}</Link>
        </h3>
        <p>{t.description}</p>
        {t.variants.length > 0 && (
          <ul className="variant-list">
            {t.variants.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        )}
        <div className="card-links">
          <Link className="text-link" href={t.link}>
            Explore treatment
            <ArrowRight size={14} />
          </Link>
          <Link
            className="enquire"
            href={whatsapp(t.name)}
            aria-label={`Enquire about ${t.name}`}
          >
            <MessageCircle size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
export function Popular() {
  return (
    <section className="section wrap">
      <SectionHead
        label="A GOOD PLACE TO START"
        title="Our most-loved treatments."
        href="/treatments"
        link="Explore the collection"
      />
      <p className="section-intro">
        A little definition, a focus on skin quality, or a longer-term approach
        to unwanted hair. Explore some of the treatments clients ask us about,
        then talk to us about what would suit you.
      </p>
      <div className="popular-grid">
        {treatments
          .filter((t) => t.featured)
          .map((t) => (
            <TreatmentCard key={t.id} t={t} />
          ))}
      </div>
    </section>
  );
}
export function Intro({ about = false }: { about?: boolean }) {
  return (
    <section className="section soft">
      <div className="wrap intro-grid">
        <figure className="clinic-figure">
          <Image
            unoptimized
            src="/images/ns-clinic/clinic-room.webp"
            alt="Treatment room photograph published on the NS Clinic Leeds Treatwell listing"
            width={1000}
            height={680}
            loading="lazy"
          />
          <figcaption>NS Clinic / our public Treatwell listing</figcaption>
          <span className="photo-index">01 / THE CLINIC</span>
        </figure>
        <div className="editorial-copy">
          <div className="eyebrow">PERSONAL CARE, FROM THE START</div>
          <h2>
            Treatments Designed <em>Around You.</em>
          </h2>
          <p>
            Your face, skin and body are individual. So are the changes you want
            to discuss. At NS Clinic, a treatment conversation begins with what
            you have noticed, what matters to you and how you would like to
            approach it.
          </p>
          <p>
            From lip and facial fillers to skin boosters, microneedling, HIFU
            and laser, the range gives you room to explore. Hydration, texture,
            volume and firmness are different concerns. A consultation helps you
            understand those differences and find a suitable starting point.
          </p>
          <p>
            Based on Swinnow Crescent in Stanningley, the clinic also offers
            lashes, brows, body treatments and hair and scalp enquiries. Ask
            questions, explain your preferences and take time to consider the
            proposed treatment and aftercare.
          </p>
          {!about && (
            <Link className="text-link" href="/about">
              Get to know NS Clinic
              <ArrowUpRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
export function CategoryCards() {
  return (
    <div className="collection-grid">
      {categories.map((c, i) => (
        <Link className="collection-card" href={`/${c.slug}`} key={c.slug}>
          <Image
            unoptimized
            src={c.image}
            alt={`${c.name} — illustrative treatment photography`}
            loading="lazy"
            width={700}
            height={600}
          />
          <div>
            <span className="category-label">0{i + 1} / THE COLLECTION</span>
            <h3>{c.name}</h3>
            <p>{c.intro}</p>
            <span className="collection-link">
              Discover
              <ArrowUpRight size={18} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
export function Finder() {
  return (
    <section className="section finder">
      <div className="wrap finder-grid">
        <div>
          <div className="eyebrow">START WITH WHAT MATTERS TO YOU</div>
          <h2>
            What Would You Like <em>to Focus On?</em>
          </h2>
          <p>
            You don’t need to know the treatment name. Browse by the area or
            concern you have in mind, then discuss your options with the clinic.
          </p>
          <span className="small-note">
            A guide to the catalogue. Suitability is assessed at consultation.
          </span>
        </div>
        <div className="focus-links">
          {guideLinks.map(([n, u], i) => (
            <Link href={u} key={n}>
              <span className="focus-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              {n}
              <ArrowUpRight size={17} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Feature({ skin = false }: { skin?: boolean }) {
  return (
    <section className={`signature ${skin ? "signature-skin" : ""}`}>
      <div className="wrap signature-grid">
        <div className="signature-image">
          <Image
            unoptimized
            src={
              skin
                ? "/images/treatments/microneedling.webp"
                : "/images/editorial/lips.webp"
            }
            alt={
              skin
                ? "Microneedling pen used on facial skin — illustrative stock"
                : "Natural lip shape and profile — illustrative editorial photograph"
            }
            width={900}
            height={1000}
            loading="lazy"
          />
          <span className="photo-index">
            {skin ? "03 / ADVANCED SKIN" : "02 / LIP ENHANCEMENT"}
          </span>
        </div>
        <div className="signature-copy">
          <div className="eyebrow">
            {skin ? "LOOK BEYOND THE SURFACE" : "THE SIGNATURE FOCUS"}
          </div>
          <h2>
            {skin ? (
              <>
                Advanced care.
                <br />
                <em>Individual skin.</em>
              </>
            ) : (
              <>
                Lip enhancement.
                <br />
                <em>Thoughtfully balanced.</em>
              </>
            )}
          </h2>
          <p>
            {skin
              ? "Skin boosters, microneedling, RF microneedling and HIFU offer different starting points for skin quality, texture and firmness. The right discussion begins with your skin, rather than a package."
              : "Definition at the border. A little more volume. A conversation about proportion. Lip enhancement at NS Clinic starts with your existing features and the finish you have in mind."}
          </p>
          <ul className="signature-tags">
            {(skin
              ? ["Hydration", "Texture", "Firmness", "Skin quality"]
              : ["Shape", "Definition", "Volume", "Balance"]
            ).map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <p>
            {skin
              ? "Explain your current routine, sensitivity and previous treatments. We can help you understand the options, how they differ and what to ask about preparation and recovery."
              : "Whether you prefer a subtle change or want to discuss the Russian lip approach, your consultation covers suitability, the proposed product, risks and aftercare before you make a decision."}
          </p>
          <Link
            className="btn"
            href={skin ? "/skin-treatments" : "/lip-fillers-leeds"}
          >
            {skin ? "Explore Advanced Skin" : "Discover Lip Fillers"}
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function Process({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`section ${compact ? "soft" : ""}`}>
      <div className="wrap">
        <SectionHead
          label="FROM THE FIRST CONVERSATION"
          title="A clear path to your appointment."
        />
        <div className="process-grid">
          {[
            [
              "01",
              "Tell us what’s on your mind.",
              "Share the area or concern you would like to discuss, your preferred finish and any previous treatments. You can enquire by phone or WhatsApp, or explore appointments on Treatwell.",
            ],
            [
              "02",
              "Understand your options.",
              "Your consultation considers suitability and explains the proposed method, product, risks and quote. It is your opportunity to ask questions and take time over the decision.",
            ],
            [
              "03",
              "Plan treatment & aftercare.",
              "If you choose to proceed, discuss preparation, expected recovery and follow-up. Know how to contact the clinic afterwards and what advice applies to your individual treatment.",
            ],
          ].map(([n, title, p]) => (
            <article key={n}>
              <span className="process-number">{n}</span>
              <h3>{title}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Results({ preview = false }: { preview?: boolean }) {
  const [active, setActive] = useState("All");
  const published = portfolio.map((p) => ({
    ...p,
    image: `/images/ns-clinic/portfolio-${p.id}.webp`,
    source: "NS CLINIC PORTFOLIO",
    original: true,
  }));
  const illustrations = [
    "Body Contouring",
    "Fat Dissolving",
    "Laser Hair Removal",
    "Laser Tattoo Removal",
    "HIFU Face",
  ].map((name) => {
    const t = treatments.find((t) => t.name === name)!;
    return {
      id: t.id,
      title: t.name,
      category:
        t.category === "body-contouring"
          ? "Body"
          : t.category === "laser-treatments"
            ? "Laser"
            : "HIFU",
      image: t.image,
      alt: t.imageAlt,
      source: "TREATMENT ILLUSTRATION",
      original: false,
    };
  });
  const list = preview
    ? published.slice(0, 3)
    : [...published, ...illustrations].filter(
        (p) => active === "All" || p.category === active,
      );
  return (
    <section className="section wrap">
      <SectionHead
        label={
          preview
            ? "THE NS CLINIC PUBLIC PORTFOLIO"
            : "CLINIC WORK & TREATMENT ILLUSTRATIONS"
        }
        title={preview ? "Real work. A closer look." : "Our treatment gallery."}
        href={preview ? "/results" : undefined}
        link="View the gallery"
      />
      <p className="section-intro">
        {preview
          ? "Lip shape, facial definition, skin and lashes: these photographs are published in the NS Clinic Treatwell portfolio. They offer a starting point for a conversation, rather than a prediction of your own result."
          : "Explore genuine work from the NS Clinic Treatwell portfolio, alongside clearly labelled body, HIFU and laser treatment illustrations. Portfolio images show individual experiences; stock illustrations explain the treatment category and do not show clinic results."}
      </p>
      {!preview && (
        <div
          className="filter-chips"
          role="group"
          aria-label="Filter treatment gallery"
        >
          {[
            "All",
            "Lips",
            "Fillers",
            "Skin",
            "HIFU",
            "Body",
            "Laser",
            "Beauty",
          ].map((c) => (
            <button
              aria-pressed={active === c}
              onClick={() => setActive(c)}
              key={c}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="gallery-grid">
        {list.map((p) => (
          <figure className="gallery-card" key={p.id}>
            <Dialog>
              <DialogTrigger
                className="gallery-open"
                aria-label={`View ${p.title} photograph`}
              >
                <Image
                  unoptimized
                  src={p.image}
                  alt={p.alt}
                  width={800}
                  height={1066}
                  loading="lazy"
                />
                <span>
                  <ArrowUpRight size={20} />
                </span>
              </DialogTrigger>
              <DialogContent className="gallery-dialog">
                <DialogTitle>{p.title}</DialogTitle>
                <DialogDescription>
                  {p.original
                    ? "Published in the NS Clinic Treatwell portfolio. Individual results vary."
                    : "Illustrative stock photography. This image does not show an NS Clinic client, result or the clinic’s specific equipment."}
                </DialogDescription>
                <Image
                  unoptimized
                  src={p.image}
                  alt={p.alt}
                  width={800}
                  height={1066}
                />
              </DialogContent>
            </Dialog>
            <figcaption>
              <span className="category-label">
                {p.category} / {p.source}
              </span>
              <h3>{p.title}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="gallery-foot">
        <p>
          Individual results vary. Images may show different lighting, angles or
          stages of treatment.
        </p>
        <Link
          className="text-link"
          href={business.treatwellURL}
          target="_blank"
          rel="noreferrer"
        >
          View original portfolio
          <ArrowUpRight size={14} />
        </Link>
      </div>
      {!preview && (
        <div className="gallery-guidance">
          <h3>Look at the work. Ask about the process.</h3>
          <p>
            If an image interests you, ask which treatment was used, how the
            result developed and whether that approach could suit your anatomy
            or skin. Your consultation includes your own priorities and history.
            The public gallery does not establish the amount of product,
            treatment course or likely result for another person.
          </p>
          <div className="actions">
            <Link className="text-link" href="/body-contouring">
              Explore body treatments
              <ArrowRight size={15} />
            </Link>
            <Link className="text-link" href="/laser-treatments">
              Explore laser treatments
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
export function Reviews({ preview = false }: { preview?: boolean }) {
  const [index, setIndex] = useState(0);
  const r = reviews[index];
  return (
    <section className="section reviews-section">
      <div className="wrap">
        <SectionHead
          label="THE REASSURANCE OF REAL EXPERIENCES"
          title="Loved by Our Clients."
          href={preview ? "/reviews" : undefined}
          link="More client feedback"
        />
        <div className="review-layout">
          <div className="review-photo">
            <Image
              unoptimized
              src="/images/ns-clinic/clinic-detail.webp"
              alt="Clinic room detail published on the NS Clinic Treatwell listing"
              width={1000}
              height={680}
              loading="lazy"
            />
            <div className="review-ratings">
              <div>
                <strong>{business.googleRating.toFixed(1)}</strong>
                <span>
                  <Stars />
                  <b>Google</b>
                  {business.googleReviewCount} reviews
                </span>
              </div>
              <div>
                <strong>{business.treatwellRating.toFixed(1)}</strong>
                <span>
                  <Stars />
                  <b>Treatwell</b>
                  {business.treatwellReviewCount} verified reviews
                </span>
              </div>
            </div>
          </div>
          <div className="review-editorial">
            <div className="quote-mark" aria-hidden="true">
              “
            </div>
            <div className="review-slide" aria-live="polite">
              <Stars />
              {r.quote ? (
                <blockquote>“{r.quote}”</blockquote>
              ) : (
                <p className="review-summary">{r.summary}</p>
              )}
              <div className="review-author">
                <span className="avatar" aria-hidden="true">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <strong>{r.name}</strong>
                  {r.treatment && <span>{r.treatment}</span>}
                  <Link href={r.source} target="_blank" rel="noreferrer">
                    {r.quote
                      ? "Verified Treatwell Review"
                      : "Summary of verified Treatwell feedback"}
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="review-controls">
              <span>
                {String(index + 1).padStart(2, "0")}{" "}
                <span>/ {String(reviews.length).padStart(2, "0")}</span>
              </span>
              <div>
                <button
                  aria-label="Previous review"
                  onClick={() =>
                    setIndex((index + reviews.length - 1) % reviews.length)
                  }
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  aria-label="Next review"
                  onClick={() => setIndex((index + 1) % reviews.length)}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
        {!preview && (
          <div className="testimonial-grid">
            <article className="testimonial-note">
              <div className="eyebrow">A REASSURING EXPERIENCE</div>
              <Stars />
              <blockquote>“{reviews[1].quote}”</blockquote>
              <div className="review-author">
                <span className="avatar" aria-hidden="true">
                  L
                </span>
                <div>
                  <strong>{reviews[1].name}</strong>
                  <Link
                    href={reviews[1].source}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Verified Treatwell Review
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
            <figure className="testimonial-portfolio">
              <Image
                unoptimized
                src="/images/ns-clinic/portfolio-15898828.webp"
                alt="Lash work published in the NS Clinic portfolio, separate from reviewer identity"
                width={800}
                height={1066}
                loading="lazy"
              />
              <figcaption>Published lash work / NS Clinic portfolio</figcaption>
            </figure>
            <article className="testimonial-note testimonial-warm">
              <div className="eyebrow">AFTERCARE THAT MATTERS</div>
              <h3>Support beyond the appointment.</h3>
              <p>{reviews[2].summary}</p>
              <div className="review-author">
                <span className="avatar" aria-hidden="true">
                  H
                </span>
                <div>
                  <strong>{reviews[2].name}</strong>
                  <span>{reviews[2].treatment}</span>
                  <Link
                    href={reviews[2].source}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Summary of verified Treatwell feedback
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        )}
        {!preview && (
          <div className="review-source-row">
            <div>
              <h3>Read the original feedback.</h3>
              <p>
                Explore clients’ reviews in their original context, including
                the treatment shown by the platform. Ratings and review counts
                are maintained in our central clinic information.
              </p>
            </div>
            <div className="actions">
              <Link
                className="btn outline"
                href={business.googleMapsURL}
                target="_blank"
                rel="noreferrer"
              >
                NS Clinic on Google
                <ArrowUpRight size={15} />
              </Link>
              <Link
                className="btn outline"
                href={business.treatwellURL}
                target="_blank"
                rel="noreferrer"
              >
                Reviews on Treatwell
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
export function MapEmbed() {
  return (
    <iframe
      className="map"
      title="Google Map: NS Clinic, Swinnow Crescent, Stanningley, Pudsey, Leeds LS28 6NZ"
      src={business.mapEmbedURL}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
export function Address() {
  return (
    <address>
      NS Clinic
      <br />
      {business.address.map((a) => (
        <span key={a}>
          {a}
          <br />
        </span>
      ))}
    </address>
  );
}
export function Location() {
  return (
    <section className="section wrap">
      <div className="location-grid">
        <div>
          <div className="eyebrow">SWINNOW CRESCENT / STANNINGLEY</div>
          <h2>
            A local clinic.
            <br />
            <em>A personal welcome.</em>
          </h2>
          <p>
            NS Clinic is based in Stanningley, Pudsey, welcoming clients from
            Leeds, Bradford and the surrounding West Yorkshire areas. All
            appointments are at our Swinnow Crescent location.
          </p>
          <Address />
          <div className="actions">
            <Link
              className="btn outline"
              href={business.googleMapsURL}
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
              <ArrowUpRight size={15} />
            </Link>
            <Link className="text-link" href="/contact">
              Plan your visit
              <ArrowRight size={15} />
            </Link>
          </div>
          <p className="small-note">
            For current appointment availability, call {business.phone}.
          </p>
        </div>
        <div className="location-map">
          <MapEmbed />
          <div>
            <span>
              <MapPin size={14} /> Stanningley, Leeds · LS28 6NZ
            </span>
            <Link href="/areas">
              Areas we serve
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export function CTA() {
  return (
    <section className="cta-band">
      <div className="wrap">
        <div>
          <div className="eyebrow">START WITH A CONVERSATION</div>
          <h2>
            What do you have <em>in mind?</em>
          </h2>
          <p>
            Tell us about the treatment or concern you would like to discuss.
            We’ll help you understand your next step.
          </p>
        </div>
        <div className="actions">
          <Book />
          <Link className="btn outline" href={whatsapp()}>
            WhatsApp NS Clinic
            <MessageCircle size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function Title({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="page-title">
      <div className="wrap">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          {title}
        </div>
        <div className="eyebrow">NS CLINIC · STANNINGLEY, LEEDS</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
export function Directory() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const shown = treatments.filter(
    (t) =>
      (filter === "All" || t.category === filter) &&
      `${t.name} ${t.description} ${t.variants.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <>
      <section className="section wrap directory">
        <div className="catalogue-toolbar">
          <div
            className="filter-chips"
            role="group"
            aria-label="Filter treatments by category"
          >
            <button
              aria-pressed={filter === "All"}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c.slug}
                aria-pressed={filter === c.slug}
                onClick={() => setFilter(c.slug)}
              >
                {c.filter}
              </button>
            ))}
          </div>
          <label className="search-field">
            <Search size={17} />
            <span className="sr-only">Search treatments</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find a treatment…"
              type="search"
            />
          </label>
        </div>
        <div className="catalogue-count" role="status">
          {shown.length} treatments to explore
        </div>
        {shown.length ? (
          <div className="treatment-grid">
            {shown.map((t) => (
              <TreatmentCard key={t.id} t={t} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No treatments match that search.</h3>
            <p>
              Try a concern such as hydration, lips or hair, or clear the
              filters to browse the collection.
            </p>
            <button
              className="btn outline"
              onClick={() => {
                setQuery("");
                setFilter("All");
              }}
            >
              Show all treatments
            </button>
          </div>
        )}
      </section>
      <Finder />
      <Process />
      <CTA />
    </>
  );
}
export function FAQs({
  items,
  title = "Your questions, considered.",
}: {
  items: [string, string][];
  title?: string;
}) {
  return (
    <section className="section wrap faq-section">
      <div>
        <div className="eyebrow">BEFORE YOU DECIDE</div>
        <h2>{title}</h2>
        <p>
          A consultation gives you time to ask about your own treatment. Here
          are some useful starting points.
        </p>
        <Link className="text-link" href={whatsapp()}>
          Ask the clinic
          <MessageCircle size={15} />
        </Link>
      </div>
      <Accordion type="single" collapsible className="faq">
        {items.map(([q, a], i) => (
          <AccordionItem value={String(i)} key={q}>
            <AccordionTrigger>{q}</AccordionTrigger>
            <AccordionContent>{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
export function WhyClinic() {
  return (
    <div className="why-clinic">
      <div className="eyebrow">WHY NS CLINIC</div>
      <h3>A conversation with room for you.</h3>
      <p>
        A wide treatment range helps put your options in context. A personal
        discussion with Rosa lets you explain what you want to address,
        understand the proposed approach and ask about aftercare.
      </p>
      <ul>
        {[
          "Personalised treatment discussions",
          "Facial, skin, body, laser & beauty options",
          "Genuine feedback on Treatwell",
          "One Stanningley location",
        ].map((s) => (
          <li key={s}>
            <Check size={15} />
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
export function CategoryPage({ slug }: { slug: string }) {
  const c = categories.find((c) => c.slug === slug)!;
  const copy = categoryContent[slug];
  const list = treatments.filter((t) => t.category === slug);
  const related =
    slug === "skin-treatments"
      ? ["hifu-advanced-skin", "facial-aesthetics"]
      : slug === "hifu-advanced-skin"
        ? ["skin-treatments", "body-contouring"]
        : slug === "beauty"
          ? ["skin-treatments", "laser-treatments"]
          : ["skin-treatments", "facial-aesthetics"].filter((s) => s !== slug);
  return (
    <>
      <section className="section wrap category-intro">
        <Image
          unoptimized
          src={c.image}
          alt={`${c.name} — illustrative professional treatment photograph`}
          width={1000}
          height={850}
        />
        <div>
          <div className="eyebrow">THE COLLECTION / {c.filter}</div>
          <h2>{c.focus}</h2>
          {copy.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="actions">
            <Book text="Explore Appointments" />
            <Link className="text-link" href={whatsapp(c.name)}>
              Ask about this collection
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <section className="concerns-section">
        <div className="wrap">
          <div>
            <div className="eyebrow">WHAT’S ON YOUR MIND?</div>
            <h2>Concerns to discuss.</h2>
          </div>
          <ul className="concern-list">
            {c.concerns.map((n) => (
              <li key={n}>
                <Check size={16} />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section wrap">
        <SectionHead
          label="UNDERSTAND YOUR OPTIONS"
          title="The treatment collection."
        />
        <div className="treatment-grid">
          {list.map((t) => (
            <TreatmentCard key={t.id} t={t} />
          ))}
        </div>
        {slug === "skin-treatments" && (
          <div className="related-strip">
            <span>Looking for firmness or advanced texture care?</span>
            <Link href="/hifu-advanced-skin">
              RF Microneedling, HIFU & Laser Skin Resurfacing
              <ArrowUpRight size={15} />
            </Link>
          </div>
        )}
        {slug === "body-contouring" && (
          <div className="related-strip">
            <span>Explore ultrasound options for the body.</span>
            <Link href="/hifu-advanced-skin#hifu-body">
              HIFU Arms, Back, Legs & Tummy
              <ArrowUpRight size={15} />
            </Link>
          </div>
        )}
      </section>
      <section className="section soft">
        <div className="wrap care-grid">
          <div>
            <div className="eyebrow">A PLAN WITH CONTEXT</div>
            <h2>{copy.detailTitle}</h2>
            {copy.detail.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <aside className="care-note">
              <h3>{copy.noteTitle}</h3>
              <p>{copy.note}</p>
            </aside>
          </div>
          <WhyClinic />
        </div>
      </section>
      <Process />
      <Reviews preview />
      <FAQs items={copy.faqs} />
      <section className="section wrap related-section">
        <SectionHead
          label="CONTINUE EXPLORING"
          title="Related treatment collections."
        />
        <div className="related-collections">
          {related.map((s) => {
            const r = categories.find((c) => c.slug === s)!;
            return (
              <Link href={`/${s}`} key={s}>
                <Image
                  unoptimized
                  src={r.image}
                  alt={`${r.name} — illustrative treatment photograph`}
                  width={700}
                  height={500}
                  loading="lazy"
                />
                <div>
                  <span className="eyebrow">THE COLLECTION</span>
                  <h3>{r.name}</h3>
                  <p>{r.intro}</p>
                  <span className="text-link">
                    Explore
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <CTA />
    </>
  );
}
function subscribeToLocation(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}
function treatmentFromLocation() {
  const value = new URLSearchParams(window.location.search).get("treatment");
  return value && treatments.some((t) => t.name === value)
    ? value
    : "General enquiry";
}
export function Contact() {
  const queryTreatment = useSyncExternalStore(
    subscribeToLocation,
    treatmentFromLocation,
    () => "General enquiry",
  );
  const [selection, setTreatment] = useState<string | null>(null);
  const treatment = selection ?? queryTreatment;
  const [draft, setDraft] = useState<string | null>(null);
  const [error, setError] = useState("");

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const phone = String(f.get("phone") || "").trim();
    const msg = String(f.get("message") || "").trim();
    if (
      !name ||
      phone.replace(/\D/g, "").length < 7 ||
      !msg ||
      !f.get("consent")
    ) {
      setError(
        "Please enter your name, a valid phone number and a message, and confirm your consent.",
      );
      setDraft(null);
      return;
    }
    setError("");
    setDraft(
      `Hi NS Clinic, my name is ${name}. I'm interested in ${treatment}. Phone: ${phone}.${f.get("email") ? ` Email: ${f.get("email")}.` : ""} ${msg}`,
    );
  }
  return (
    <>
      <section className="section wrap contact-section">
        <div className="contact-grid">
          <div>
            <div className="eyebrow">A DIRECT LINE TO THE CLINIC</div>
            <h2>
              We’d love to hear
              <br />
              <em>what you have in mind.</em>
            </h2>
            <p>
              Enquire about a treatment, check current availability or ask about
              your visit. For a confirmed appointment, use the NS Clinic
              Treatwell booking page or speak to us directly.
            </p>
            <Link
              href={`tel:${business.internationalPhone}`}
              className="phone-large"
            >
              {business.phone}
              <Phone size={22} />
            </Link>
            <div className="actions">
              <Book text="Book on Treatwell" />
              <Link className="btn outline" href={whatsapp()}>
                WhatsApp Us
                <MessageCircle size={16} />
              </Link>
            </div>
            <div className="contact-visit">
              <h3>Visit NS Clinic</h3>
              <Address />
              <Link
                className="text-link"
                href={business.googleMapsURL}
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
                <ArrowUpRight size={16} />
              </Link>
              <p>
                Contact us for current opening hours and appointment
                availability.
              </p>
            </div>
          </div>
          <div className="enquiry-panel">
            <div className="eyebrow">YOUR FIRST CONVERSATION</div>
            <h3>Prepare an appointment enquiry.</h3>
            <p>
              Complete the form, then review and send your message in WhatsApp.
              Preparing an enquiry does not reserve an appointment.
            </p>
            <form
              onSubmit={submit}
              className="form-grid"
              onChange={() => setDraft(null)}
            >
              <label className="field">
                Your name
                <input
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                />
              </label>
              <label className="field">
                Phone number
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  maxLength={30}
                />
              </label>
              <label className="field full">
                Email <span className="optional">(optional)</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={200}
                />
              </label>
              <label className="field full">
                Treatment interested in
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                >
                  <option>General enquiry</option>
                  {treatments.map((t) => (
                    <option key={t.id}>{t.name}</option>
                  ))}
                </select>
              </label>
              <label className="field full">
                Your message
                <textarea
                  name="message"
                  rows={4}
                  required
                  maxLength={2000}
                  placeholder="Tell us what you would like to discuss. Please leave medical details for your consultation."
                />
              </label>
              <label className="consent full">
                <input type="checkbox" name="consent" required />{" "}
                <span>
                  I agree to share these details with NS Clinic via WhatsApp so
                  the clinic can respond to my enquiry.{" "}
                  <Link href="/privacy">Privacy information</Link>.
                </span>
              </label>
              {error && (
                <p className="form-error full" role="alert">
                  {error}
                </p>
              )}
              <button className="btn full" type="submit">
                Prepare WhatsApp Enquiry
                <ArrowRight size={16} />
              </button>
              {draft && (
                <div className="form-success full" role="status">
                  <Check size={20} />
                  <div>
                    <strong>Your enquiry is ready.</strong>
                    <p>
                      Open WhatsApp to review and send it to NS Clinic. Nothing
                      has been sent yet.
                    </p>
                    <Link
                      className="btn"
                      href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(draft)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Review & Send in WhatsApp
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
      <Location />
      <FAQs
        items={[
          [
            "How do I confirm an appointment?",
            "Use the clinic’s Treatwell page or arrange an appointment directly by phone or WhatsApp. A prepared enquiry alone does not confirm a slot.",
          ],
          [
            "Can I ask for advice before booking?",
            "Yes. Explain the treatment or concern you have in mind. Suitability, medical history and risks are discussed at consultation.",
          ],
          [
            "Where will my appointment take place?",
            "NS Clinic is on Swinnow Crescent in Stanningley, Pudsey, Leeds LS28 6NZ. Confirm arrival details with the clinic when your appointment is arranged.",
          ],
        ]}
      />
    </>
  );
}
export function LipPage() {
  return (
    <>
      <section className="section wrap lip-intro">
        <div className="category-intro">
          <Image
            unoptimized
            src="/images/editorial/lips.webp"
            alt="Side profile and natural lips — illustrative photograph, not a treatment result"
            width={900}
            height={950}
          />
          <div>
            <div className="eyebrow">THE SIGNATURE FOCUS</div>
            <h2>
              Shape. Definition.
              <br />
              <em>Your own balance.</em>
            </h2>
            <p>
              There is more to lip enhancement than adding volume. You might
              want to discuss a clearer border, a change in shape or the
              relationship between your upper and lower lip. The right
              conversation begins with your lips as they are now.
            </p>
            <p>
              At NS Clinic in Stanningley, a lip filler consultation considers
              your facial proportions, previous treatments and preferred finish.
              Explain the change you have in mind without feeling you need to
              choose an amount yourself. Product choice, suitability and
              aftercare are part of the discussion.
            </p>
            <div className="actions">
              <Book text="Explore Lip Appointments" />
              <Link className="text-link" href={whatsapp("Lip Fillers")}>
                Ask about lip fillers
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="wrap lip-goals">
          <div>
            <div className="eyebrow">A PERSONALISED LIP PLAN</div>
            <h2>
              What would you like
              <br />
              <em>to bring into focus?</em>
            </h2>
            <p>
              Lip fillers are injectable products used to alter selected aspects
              of shape or volume. They are a clinical procedure with potential
              complications, so a treatment plan should be based on assessment
              and clear information.
            </p>
            <p>
              Ask about the product proposed for you and why it is appropriate.
              Your existing lip shape, tissue, movement and any previous filler
              all matter. A photograph can help explain your preference, but it
              cannot predict how the same approach will look on you.
            </p>
          </div>
          <div className="lip-goal-list">
            {[
              [
                "Shape",
                "Discuss the outline, height and the way the lips sit within your wider facial features. Natural anatomy sets the starting point and influences the change that may be possible.",
              ],
              [
                "Definition",
                "Explore whether border definition is your priority, rather than an overall increase in size. Explain where you notice a difference and how subtle you would like the change to feel.",
              ],
              [
                "Volume",
                "Talk about fullness without assuming more product is better. An amount should be recommended after assessment, with a measured explanation of the intended effect and its limits.",
              ],
              [
                "Balance",
                "Consider the upper and lower lip together, including asymmetry and facial proportion. Perfect symmetry is not a realistic promise; the aim is an informed discussion of your own features.",
              ],
            ].map(([n, p]) => (
              <article key={n}>
                <h3>{n}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap care-grid">
        <div>
          <div className="eyebrow">A STYLE TO DISCUSS</div>
          <h2>
            The Russian
            <br />
            <em>lip approach.</em>
          </h2>
          <p>
            Russian lips describes a shaping technique often associated with
            definition and height. It is not a separate filler product and is
            not the right approach for every person. Your anatomy, previous
            filler and treatment goals determine whether it should be
            considered.
          </p>
          <p>
            Bring up this style during your consultation if it interests you.
            Ask how the proposed technique differs from other approaches, what
            limitations apply to your lips and how existing filler may affect
            the plan. A style name should not replace the assessment.
          </p>
          <p>
            You can also discuss a more understated approach. Border definition,
            a small volume change or a staged plan may be a more suitable
            conversation, depending on your features and preferences.
          </p>
        </div>
        <WhyClinic />
      </section>
      <Process compact />
      <section className="section wrap lip-aftercare">
        <div>
          <div className="eyebrow">GIVE THE RESULT TIME</div>
          <h2>
            Aftercare is part
            <br />
            <em>of the appointment.</em>
          </h2>
        </div>
        <div>
          <p>
            Swelling, redness, tenderness and bruising can occur after lip
            filler. The immediate appearance may differ from the settled result.
            Ask what to expect for the proposed product and leave enough room in
            your plans to follow your individual recovery advice.
          </p>
          <p>
            Before treatment, discuss any upcoming events, previous reactions
            and current medicines with your practitioner. Obtain clear
            instructions about looking after your lips, activities and when to
            contact the clinic. Do not change a prescribed medicine on the basis
            of general website information.
          </p>
          <p>
            Know the follow-up arrangements and how unexpected concerns are
            assessed. Severe pain, unusual skin-colour changes or visual
            symptoms need urgent assessment. Your consultation should explain
            complication management, including the specific risks of filler and
            any possible dissolving treatment.
          </p>
          <Link
            className="text-link"
            href="https://www.nhs.uk/tests-and-treatments/cosmetic-procedures/advice/choosing-who-will-do-your-procedure/"
            target="_blank"
            rel="noreferrer"
          >
            NHS advice on choosing a practitioner
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
      <Results preview />
      <Reviews preview />
      <FAQs items={lipFAQs} title="Lip filler FAQs." />
      <section className="section wrap">
        <SectionHead
          label="CONSIDER THE WIDER PICTURE"
          title="Related treatments."
        />
        <div className="treatment-grid">
          {treatments
            .filter((t) =>
              ["Dermal Fillers", "Chin Fillers", "Skin Boosters"].includes(
                t.name,
              ),
            )
            .map((t) => (
              <TreatmentCard t={t} key={t.id} />
            ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
export function About() {
  return (
    <>
      <Intro about />
      <section className="section wrap about-philosophy">
        <div className="eyebrow">THE WAY WE APPROACH CARE</div>
        <h2>
          Room for questions.
          <br />
          <em>Space to decide.</em>
        </h2>
        <div className="about-columns">
          <p>
            An aesthetics appointment is personal. You may arrive knowing
            exactly what you want to discuss, or simply have a concern you are
            trying to put into words. Either way, the first conversation should
            help you understand your options and what they involve.
          </p>
          <p>
            NS Clinic brings facial aesthetics, advanced skin, body, laser and
            beauty enquiries together in one Stanningley location. That range
            gives context to the discussion: a concern about texture may lead to
            a different starting point from one about volume or skin firmness.
          </p>
          <p>
            A considered plan includes preparation and aftercare, not just the
            procedure. Ask about the product or equipment, the proposed
            approach, relevant training, recovery and follow-up. Your
            preferences and suitability guide the next step, and the decision
            remains yours.
          </p>
        </div>
      </section>
      <section className="section soft">
        <div className="wrap practitioner-grid">
          <div className="practitioner-portrait">
            <span className="practitioner-initial" aria-hidden="true">
              R.
            </span>
            <div>
              <span className="eyebrow">NS CLINIC</span>
              <h3>Rosa</h3>
              <span>Your practitioner</span>
            </div>
          </div>
          <div>
            <div className="eyebrow">THE PERSON BEHIND THE APPOINTMENT</div>
            <h2>
              Meet <em>Rosa.</em>
            </h2>
            <p>
              Rosa is the practitioner named on NS Clinic’s Leeds Treatwell
              listing. The public profile brings together skin aesthetics and
              beauty treatments, and verified clients describe a professional,
              reassuring approach.
            </p>
            <p>
              A personal conversation gives you a chance to explain the finish
              you prefer, ask how a treatment works and understand the advice
              that applies to you. Whether you are enquiring about a first lip
              appointment, planning a skin course or returning for lashes, your
              priorities matter.
            </p>
            <p>
              Before choosing a procedure, discuss the practitioner’s training
              for that treatment, the product or equipment, risks and aftercare.
              For any treatment requiring prescribing or dental input, ask who
              provides the relevant professional assessment.
            </p>
            <Link
              className="text-link"
              href={business.treatwellURL}
              target="_blank"
              rel="noreferrer"
            >
              Meet Rosa on Treatwell
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section wrap environment-grid">
        <div>
          <div className="eyebrow">ONE CLINIC / STANNINGLEY</div>
          <h2>
            Come in with
            <br />
            <em>your own priorities.</em>
          </h2>
          <p>
            The clinic is based on Swinnow Crescent in Stanningley, Pudsey. When
            arranging your visit, contact NS Clinic for arrival details and
            current appointment availability. All treatment enquiries relate to
            this location.
          </p>
          <p>
            Explore the collections before your appointment, or simply tell us
            the concern you would like to discuss. You do not need to have
            chosen a technique, product or amount to start a useful
            conversation.
          </p>
          <p>
            The clinic welcomes clients from Leeds, Pudsey, Farsley, Bramley,
            Bradford and surrounding West Yorkshire areas. Phone, WhatsApp and
            the public Treatwell booking page give you direct ways to arrange
            your next step.
          </p>
          <Link className="text-link" href="/treatments">
            Explore the treatment range
            <ArrowRight size={15} />
          </Link>
        </div>
        <figure>
          <Image
            unoptimized
            src="/images/ns-clinic/clinic-detail.webp"
            alt="NS Clinic treatment room as published on the Leeds Treatwell listing"
            width={1000}
            height={680}
            loading="lazy"
          />
          <figcaption>
            Clinic photograph / NS Clinic Treatwell listing
          </figcaption>
        </figure>
      </section>
      <Reviews preview />
      <Location />
      <CTA />
    </>
  );
}
export function Prices() {
  return (
    <>
      <section className="section wrap prices-intro">
        <div>
          <div className="eyebrow">PLAN WITH CLARITY</div>
          <h2>
            The right treatment.
            <br />
            <em>A clear quote.</em>
          </h2>
          <p>
            Prices can depend on the area, product, amount or course recommended
            for you. Use our public Treatwell page to check current listed
            prices and appointments, or ask the clinic for a quote based on your
            treatment enquiry.
          </p>
          <p>
            Before proceeding, establish what your quote includes: the proposed
            procedure, any course, aftercare and follow-up. Offers and
            appointment availability can change, so confirm the current terms
            directly when you book.
          </p>
          <div className="actions">
            <Book text="Check Prices on Treatwell" />
            <Link
              className="btn outline"
              href={whatsapp("a current treatment quote")}
            >
              Request a Quote
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <aside className="price-callout">
          <span className="eyebrow">A USEFUL CONVERSATION</span>
          <h3>What to ask about.</h3>
          <ul>
            {[
              "The product or method proposed",
              "The amount or treatment area",
              "The total cost of a course",
              "Follow-up and aftercare",
              "Current offer and cancellation terms",
            ].map((n) => (
              <li key={n}>
                <Check size={15} />
                {n}
              </li>
            ))}
          </ul>
        </aside>
      </section>
      <section className="section soft">
        <div className="wrap">
          <SectionHead
            label="BROWSE BY COLLECTION"
            title="Ask about your treatment."
          />
          <Accordion type="multiple" className="faq price-accordion">
            {categories.map((c) => (
              <AccordionItem value={c.slug} key={c.slug}>
                <AccordionTrigger>{c.name}</AccordionTrigger>
                <AccordionContent>
                  <div className="price-list">
                    {treatments
                      .filter((t) => t.category === c.slug)
                      .map((t) => (
                        <div key={t.id}>
                          <Link href={t.link}>{t.name}</Link>
                          <Link
                            className="text-link"
                            href={whatsapp(`${t.name} pricing`)}
                          >
                            Request current price
                            <ArrowUpRight size={14} />
                          </Link>
                        </div>
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <section className="section wrap">
        <SectionHead
          label="CURRENT OFFERS"
          title="Ask what’s available when you book."
        />
        <p className="section-intro">
          The clinic’s public listing includes selected treatment offers and
          combinations. Contact NS Clinic to check the current treatments,
          eligibility, course structure and booking terms. A promotion does not
          replace a suitability assessment.
        </p>
        <Link
          className="text-link"
          href={business.treatwellURL}
          target="_blank"
          rel="noreferrer"
        >
          View the current clinic listing
          <ArrowUpRight size={15} />
        </Link>
      </section>
      <CTA />
    </>
  );
}
export function Areas() {
  return (
    <>
      <section className="section wrap areas-intro">
        <div>
          <div className="eyebrow">STANNINGLEY / WEST YORKSHIRE</div>
          <h2>
            One address.
            <br />
            <em>Many familiar places.</em>
          </h2>
          <p>
            NS Clinic is based on Swinnow Crescent in Stanningley, Pudsey, Leeds
            LS28 6NZ. The clinic welcomes clients from nearby neighbourhoods and
            across West Yorkshire, with all appointments taking place at the
            Stanningley location.
          </p>
          <p>
            You might be planning a regular lash appointment close to home, a
            first consultation about lip fillers, or a skin-treatment course
            that needs return visits. Knowing the location and speaking to the
            clinic before booking helps you plan those appointments around your
            routine.
          </p>
          <p>
            Our treatment collections cover facial aesthetics, skin and skin
            boosters, HIFU and advanced skin, body contouring, laser and beauty.
            Browse the information before your visit or contact us if you want
            help finding the right collection for the concern you have in mind.
          </p>
        </div>
        <div className="area-panel">
          <div className="eyebrow">WE WELCOME CLIENTS FROM</div>
          <ul>
            {areas.map((a) => (
              <li key={a}>
                {a}
                <ArrowUpRight size={15} />
              </li>
            ))}
          </ul>
          <p>All appointments at NS Clinic, Stanningley.</p>
        </div>
      </section>
      <Location />
      <section className="section soft">
        <div className="wrap care-grid">
          <div>
            <div className="eyebrow">BEFORE YOU SET OFF</div>
            <h2>
              Make a little room
              <br />
              <em>for your visit.</em>
            </h2>
            <p>
              Use our exact clinic location in Google Maps to plan your journey,
              and confirm arrival details with NS Clinic when you arrange the
              appointment. Contact the clinic for the current opening hours and
              available slots.
            </p>
            <p>
              If you are travelling from Bradford, Leeds or further across West
              Yorkshire, discuss the treatment and any recovery considerations
              in advance. Some procedures may involve multiple visits or
              follow-up; knowing the proposed course helps you plan the wider
              commitment, not just the first appointment.
            </p>
            <p>
              Tell the clinic if you need information about access or have
              questions about arriving. Travel times vary, so check your route
              on the day and allow time to find the address without rushing your
              appointment.
            </p>
          </div>
          <div>
            <h3>Start with a direct enquiry.</h3>
            <p>
              Phone {business.phone}, send a WhatsApp message or use the public
              Treatwell page. Explain which treatment or concern interests you,
              and ask about consultation, suitability and the next available
              appointment.
            </p>
            <p>
              An enquiry lets you clarify the appointment before travelling. If
              your question involves medical history or sensitive information,
              keep those details for the consultation rather than sending them
              through the website form.
            </p>
            <div className="actions">
              <Book />
              <Link className="btn outline" href="/contact">
                Contact the Clinic
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
export function Legal({ slug }: { slug: string }) {
  const content: Record<string, [string, string[]]> = {
    privacy: [
      "How your enquiry is handled",
      [
        "The appointment enquiry form prepares a WhatsApp message in your browser. This website does not submit the form to a clinic database or save its contents in browser storage. You choose whether to open WhatsApp and send the prepared message.",
        "Your name, contact details, treatment interest and message are shared with WhatsApp when you open the draft, and with NS Clinic when you send it. Provide only what is needed for your enquiry; leave sensitive medical details for your consultation. Contact NS Clinic on the phone number shown here to ask about the handling of information you send directly.",
        "The hosting provider may process technical request information. The embedded location map contacts Google when loaded. Google, WhatsApp and Treatwell apply their own privacy policies when you use their services.",
      ],
    ],
    cookies: [
      "Browser storage and external services",
      [
        "This website does not add advertising or analytics trackers. Enquiry form values remain in page memory until you leave or reload the page. They are not saved to local storage.",
        "The embedded map is provided by Google. Loading it allows your browser to contact Google, whose privacy and cookie policies apply. Opening a booking, WhatsApp or directions link takes you to a separate service. Those services may use their own cookies and storage.",
        "Essential hosting or access services may use technical cookies needed to deliver the website. Your browser settings let you manage cookies and site data.",
      ],
    ],
    terms: [
      "Using the website and arranging an appointment",
      [
        "This website provides general information about NS Clinic and its treatment range. Information does not establish your individual suitability, promise an outcome or replace a consultation. Treatment availability and prices are confirmed when you contact or book with the clinic.",
        "Preparing a form enquiry does not reserve an appointment. Confirm your appointment through Treatwell or directly with NS Clinic, and ask for the applicable payment, cancellation and rescheduling terms before committing.",
        "Portfolio photographs are identified by source. Other treatment photographs are illustrative and do not depict a specific NS Clinic client, practitioner or piece of equipment. Website text and photography must not be republished without the relevant permission.",
      ],
    ],
    "treatment-disclaimer": [
      "Individual assessment comes first",
      [
        "Aesthetic, skin and body procedures carry risks. Suitability, the proposed method, products, recovery and likely results need an individual assessment. No result is guaranteed and the appearance shown in a portfolio photograph cannot predict another person’s outcome.",
        "Before deciding, ask about the practitioner’s relevant qualifications and training, the product or equipment, alternatives, aftercare and complication management. Treatments involving prescription-only medicines require appropriate prescribing assessment. Teeth whitening requires an appropriate registered dental professional.",
        "If you have an unexpected reaction after a procedure, seek prompt professional advice. Severe pain, unusual skin-colour changes or visual symptoms after filler need urgent assessment. For a medical emergency, contact emergency services.",
      ],
    ],
  };
  const [title, paragraphs] = content[slug];
  return (
    <section className="section wrap legal-copy">
      <h2>{title}</h2>
      {paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
      <Link className="text-link" href="/contact">
        Contact NS Clinic
        <ArrowRight size={15} />
      </Link>
    </section>
  );
}
