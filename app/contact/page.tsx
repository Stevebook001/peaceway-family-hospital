import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact and Directions",
  description: "Contact Peaceway Family Hospital at Kofero Bus Stop, Faruku Road, Felele Extension, Soka, Ibadan, Oyo State, Nigeria.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Peaceway Family Hospital",
    description: "Phone and directions for Peaceway Family Hospital in Soka, Ibadan.",
    url: "https://peaceway-family-hospital.vercel.app/contact",
    images: [{ url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85", alt: "A welcoming reception and workspace" }]
  }
};

const address = "Peaceway Family Hospital, Kofero Bus Stop, Faruku Road, Felele Extension, Soka, Ibadan, Oyo State, Nigeria";

export default function ContactPage() {
  return <main className="info-page">
    <nav className="article-nav"><Link href="/">Peaceway Family Hospital</Link><Link href="/faq">FAQs ↗</Link></nav>
    <header className="info-hero service-hero">
      <span className="blog-kicker">CONTACT & DIRECTIONS</span>
      <h1>Let’s make<br/><em>getting in touch easier.</em></h1>
      <p>For current services, appointment arrangements and opening information, please speak directly with the hospital team.</p>
      <a className="info-primary" href="tel:+2347012753409">Call 0701 275 3409 ↗</a>
    </header>
    <section className="info-content">
      <div className="contact-detail-grid">
        <article><span className="contact-detail-icon">☎</span><p className="blog-kicker">PHONE</p><h2>Speak with the team</h2><p>Call to confirm current availability and visit arrangements.</p><a href="tel:+2347012753409">0701 275 3409 ↗</a></article>
        <article><span className="contact-detail-icon">⌖</span><p className="blog-kicker">LOCATION</p><h2>Find the hospital</h2><p>{address}</p><a href="https://www.google.com/maps/search/?api=1&query=Peaceway+Family+Hospital+Kofero+Bus+Stop+Soka+Ibadan" target="_blank" rel="noreferrer">Open directions ↗</a></article>
        <article><span className="contact-detail-icon">◎</span><p className="blog-kicker">SOCIAL</p><h2>Follow updates</h2><p>Use the hospital's linked Instagram profile for public posts. Verify important arrangements by phone.</p><a href="https://www.instagram.com/p/DeNCp8_t7Hh/?stkn=MWxyN3JpanRiNHJxOQ==" target="_blank" rel="noreferrer">View Instagram ↗</a></article>
      </div>
      <aside className="info-callout"><strong>Please note</strong><p>This website does not currently offer live booking, patient messaging or emergency response. Avoid sending medical records or sensitive personal information through public social media. For urgent medical concerns, seek urgent local care.</p></aside>
      <Link className="info-back" href="/">Return to homepage ←</Link>
    </section>
    <footer className="blog-footer"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Healthcare</Link><Link href="/faq">FAQs</Link><Link href="/blog">Health library</Link><Link href="/privacy">Privacy</Link></footer>
  </main>;
}
