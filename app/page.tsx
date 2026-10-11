const phone = "07012753409";
const phoneLink = "tel:+2347012753409";
const address = "Peaceway Family Hospital, Kofero Bus Stop, Faruku Road, Felele Extension, Soka, Ibadan, Oyo State, Nigeria";
const logoUrl = "https://i.ibb.co/8DnNhyzN/WA-1791745407700.jpg";

const services = [
  { number: "01", title: "Family healthcare", text: "A welcoming point of contact for families seeking professional healthcare guidance." },
  { number: "02", title: "Screening & prevention", text: "Ask the hospital about available checks and preventive health services." },
  { number: "03", title: "Health education", text: "Practical, clinician-guided information to help people make informed health decisions." },
  { number: "04", title: "Community outreach", text: "Health awareness and community activities designed to encourage early attention to wellbeing." },
];

export default function Home() {
  return (
    <main>
      <div className="announcement"><span className="pulse" /> Family-focused healthcare in Soka, Ibadan <a href="#contact">Contact the hospital <span aria-hidden="true">↗</span></a></div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Peaceway Family Hospital home">
          <img className="brand-mark" src={logoUrl} alt="Peaceway Family Hospital logo" />
          <span className="brand-copy"><strong>PEACEWAY</strong><small>FAMILY HOSPITAL</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#services">Healthcare</a><a href="#wellness">Health library</a><a href="#contact">Contact</a>
        </nav>
        <a className="button button-small" href={phoneLink}>Call the hospital <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> COMPASSIONATE CARE. HEALTHIER FAMILIES.</div>
          <h1>Your health.<br /><span>Your family.</span><br />Our care.</h1>
          <p className="hero-lede">Healthcare begins with being heard. Peaceway Family Hospital is here to support individuals and families with professional care, health education and a commitment to community wellbeing.</p>
          <div className="hero-actions"><a className="button" href={phoneLink}>Speak with our team <span aria-hidden="true">↗</span></a><a className="text-link" href="#services">Explore healthcare <span aria-hidden="true">↓</span></a></div>
          <div className="hero-trust"><div className="trust-icon">✳</div><p><strong>Care that starts with you</strong><br /><span>Find the information you need before your visit.</span></p></div>
        </div>
        <div className="hero-art" aria-label="Peaceway Family Hospital brand panel">
          <div className="art-glow" />
          <div className="art-top"><span>PEACEWAY FAMILY HOSPITAL</span><span>IBADAN · NIGERIA</span></div>
          <div className="art-center"><div className="cross-ring"><span>+</span></div><div className="art-script">Care for every<br /><em>chapter of life.</em></div></div>
          <div className="art-bottom"><span className="art-dot" /> FAMILY HEALTH · COMMUNITY WELLNESS <span>PFH</span></div>
          <div className="floating-card"><span className="floating-icon">♡</span><div><strong>Every family matters.</strong><small>Care with compassion</small></div></div>
        </div>
      </section>

      <section className="quick-facts" aria-label="Hospital information">
        <div><span className="fact-icon">⌖</span><p><small>FIND US</small><strong>Soka, Ibadan</strong></p></div>
        <div><span className="fact-icon">☎</span><p><small>CALL OUR TEAM</small><strong>0701 275 3409</strong></p></div>
        <div><span className="fact-icon">♡</span><p><small>OUR APPROACH</small><strong>Care with compassion</strong></p></div>
      </section>

      <section className="intro section-wrap" id="about">
        <div className="section-label"><span>01</span> A HOSPITAL FOR YOUR FAMILY</div>
        <div className="intro-content"><h2>Good healthcare should feel <span>human.</span></h2><div><p>When you are looking for care, clear information and a respectful welcome matter. Peaceway Family Hospital serves its community in Soka, Ibadan, with a focus on family wellbeing, health awareness and professional guidance.</p><p>We believe that helping people understand their health is an important part of caring for them. If you have a question about a service or a visit, contact our team directly.</p><a className="text-link green-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a></div></div>
      </section>

      <section className="services-section" id="services">
        <div className="section-wrap">
          <div className="services-heading"><div><div className="section-label"><span>02</span> HEALTHCARE & SUPPORT</div><h2>Here for the things<br />that <span>matter most.</span></h2></div><p>Every patient's needs are different. Contact the hospital to confirm service availability, opening hours and the best next step for your care.</p></div>
          <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-top"><span>{service.number}</span><span className="service-arrow">↗</span></div><div className="service-symbol">{service.number === "01" ? "✚" : service.number === "02" ? "⌁" : service.number === "03" ? "✳" : "◎"}</div><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`Ask about ${service.title}`}>Ask our team <span aria-hidden="true">↗</span></a></article>)}</div>
        </div>
      </section>

      <section className="wellness-section" id="wellness">
        <div className="wellness-art"><div className="wellness-orbit orbit-one" /><div className="wellness-orbit orbit-two" /><div className="wellness-core">+</div><span className="wellness-caption">MIND · BODY · COMMUNITY</span></div>
        <div className="wellness-copy"><div className="section-label"><span>03</span> KNOWLEDGE IS PART OF CARE</div><h2>Small steps today.<br /><span>Healthier tomorrows.</span></h2><p>From preventive health awareness to mental wellbeing, trustworthy information can help families know when to seek professional advice. Our health education content will be reviewed with qualified healthcare professionals before publication.</p><div className="wellness-points"><div><span>01</span><p><strong>Know your numbers</strong><small>Ask a qualified provider about appropriate health checks.</small></p></div><div><span>02</span><p><strong>Care for your mind</strong><small>Mental wellbeing deserves compassion and professional support.</small></p></div><div><span>03</span><p><strong>Ask when unsure</strong><small>Online information cannot replace personalised medical assessment.</small></p></div></div><a className="button button-outline" href={phoneLink}>Talk to the hospital <span aria-hidden="true">↗</span></a></div>
      </section>

      <section className="community-section">
        <div className="community-inner"><div className="community-mark">✳</div><div><div className="section-label light-label">04 / COMMUNITY FIRST</div><h2>Healthier people.<br /><em>Stronger communities.</em></h2><p>Peaceway's community health awareness activities reflect a simple belief: prevention, education and timely professional guidance can make a difference.</p></div><a className="button button-light" href="#contact">Connect with us <span aria-hidden="true">↗</span></a></div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="contact-copy"><div className="section-label"><span>05</span> WE'RE HERE TO HELP</div><h2>Let's take the<br /><span>next step together.</span></h2><p>For current services, appointments, opening hours or directions, please contact the hospital directly. In a medical emergency, seek urgent local emergency care rather than waiting for an online response.</p></div>
        <div className="contact-card"><div className="contact-card-head"><img src={logoUrl} alt="" /><div><strong>Peaceway Family Hospital</strong><small>Official contact information</small></div></div><div className="contact-row"><span>PHONE</span><a href={phoneLink}>{phone}</a></div><div className="contact-row"><span>ADDRESS</span><p>{address}</p></div><a className="button contact-button" href="https://www.google.com/maps/search/?api=1&query=Peaceway+Family+Hospital+Kofero+Bus+Stop+Soka+Ibadan" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a><p className="contact-note">Please confirm service availability and hours by phone before travelling.</p></div>
      </section>

      <footer className="site-footer"><div className="footer-main"><a className="brand footer-brand" href="#home"><img className="brand-mark" src={logoUrl} alt="" /><span className="brand-copy"><strong>PEACEWAY</strong><small>FAMILY HOSPITAL</small></span></a><p>Compassionate care. Healthier families.<br />Soka, Ibadan, Oyo State, Nigeria.</p><div className="footer-links"><a href="#about">About</a><a href="#services">Healthcare</a><a href="#wellness">Health education</a><a href="#contact">Contact</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Peaceway Family Hospital. All rights reserved.</span><span>Medical information on this website is educational and does not replace care from a qualified clinician.</span></div></footer>
    </main>
  );
}
