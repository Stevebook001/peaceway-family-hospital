import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find practical answers about contacting Peaceway Family Hospital in Soka, Ibadan, confirming services, preparing for a visit and using this website.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions | Peaceway Family Hospital",
    description: "Practical website and visit-planning information for Peaceway Family Hospital.",
    url: "https://peaceway-family-hospital.vercel.app/faq",
    images: [{ url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85", alt: "Healthcare professional speaking with a patient" }]
  }
};

const questions = [
  ["Where is Peaceway Family Hospital located?", "The address listed on this website is Peaceway Family Hospital, Kofero Bus Stop, Faruku Road, Felele Extension, Soka, Ibadan, Oyo State, Nigeria. Please use the directions link on the Contact page and confirm the location if you need assistance."],
  ["How can I contact the hospital?", "Call 0701 275 3409. Please confirm current opening arrangements, service availability and any appointment requirements directly with the hospital team."],
  ["Can I book an appointment through this website?", "Online appointment booking is not currently active. Please call the hospital to ask about current appointment arrangements. Do not submit sensitive health information through a form that has not been explicitly provided for that purpose."],
  ["What services does the hospital provide?", "Service availability can change and should be confirmed by the hospital. The Services page is an enquiry guide, not a complete or guaranteed list of clinical services."],
  ["Can I create an online account?", "The signup page is a preview of a future feature. Account registration, patient portals and saved medical information are not active yet. Please do not enter passwords or personal health information there."],
  ["Are the health library articles personal medical advice?", "No. Articles provide general information and cannot diagnose a condition or replace an assessment by a qualified healthcare professional. If you have a personal health concern, speak with a qualified professional."],
  ["How are hospital announcements and health articles reviewed?", "Hospital-specific announcements should be approved by an authorised hospital representative. Clinical content should also be reviewed by a suitably qualified clinician designated by the hospital before it is presented as official hospital guidance."],
  ["Can I send medical records through Instagram or this website?", "Do not share sensitive medical records, identification documents, passwords or payment details through public social media messages. Call the hospital to confirm an approved, appropriate communication channel."],
  ["What should I do in a medical emergency?", "Do not wait for a website reply or social media response. Seek urgent local emergency medical assistance."],
  ["How can I report an error on this website?", "Please call the hospital and explain which page or detail appears incorrect. Do not send patient information when reporting a general website issue."]
];

export default function FAQPage() {
  return <main className="info-page">
    <nav className="article-nav"><Link href="/">Peaceway Family Hospital</Link><Link href="/contact">Contact ↗</Link></nav>
    <header className="info-hero">
      <span className="blog-kicker">HELP & INFORMATION</span>
      <h1>Good questions.<br/><em>Clear answers.</em></h1>
      <p>Quick answers about contacting the hospital, planning a visit and using this early version of the website.</p>
    </header>
    <section className="info-content">
      <div className="faq-list">{questions.map(([question, answer], index) => <details className="faq-item" key={question}>
        <summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b aria-hidden="true">+</b></summary>
        <p>{answer}</p>
      </details>)}</div>
      <aside className="info-callout"><strong>Still have a question?</strong><p>Contact the hospital directly to confirm current information. For emergencies, seek urgent local care.</p><a href="tel:+2347012753409">Call 0701 275 3409 ↗</a></aside>
      <Link className="info-back" href="/">Return to homepage ←</Link>
    </section>
    <footer className="blog-footer"><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/services">Healthcare</Link><Link href="/blog">Health library</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link></footer>
  </main>;
}
