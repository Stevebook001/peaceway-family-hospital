export type BlogPost = { status: "draft" | "published"; slug: string; title: string; description: string; date: string; category: string; image: string; alt: string; intro: string; sections: [string, string][]; disclaimer: string };

export const blogPosts: BlogPost[] = [
  {
    "status": "draft",
    "slug": "understanding-mental-wellbeing",
    "title": "Understanding Mental Wellbeing: Small Steps That Can Help",
    "description": "A compassionate guide to mental wellbeing, everyday stress, when to seek professional support, and how families can talk about mental health.",
    "date": "2026-10-11",
    "category": "Mental wellbeing",
    "image": "https://images.unsplash.com/photo-1506126613408-acea07e8e630?auto=format&fit=crop&w=1200&q=85",
    "alt": "A calm sunlit space for reflection and mental wellbeing",
    "intro": "Mental wellbeing is part of overall health. It affects how we think, feel, relate to other people and respond to everyday pressures. Looking after it is not a sign of weakness; it is one way of caring for ourselves and our families.",
    "sections": [
      [
        "Make room for rest and connection",
        "Sleep routines, regular movement, time outdoors and meaningful contact with people you trust can support wellbeing. These steps are not a substitute for professional care, but they can be useful parts of a broader approach."
      ],
      [
        "Notice when stress is becoming too much",
        "If sadness, worry, irritability, sleep changes or loss of interest persist or begin to interfere with daily life, consider speaking with a qualified health professional. You do not need to wait until things feel unbearable to ask for help."
      ],
      [
        "Listen without judgement",
        "When someone opens up, listen calmly, take their feelings seriously and ask what kind of support would help. Avoid shaming language or assuming that a person can simply choose to feel better."
      ],
      [
        "When to seek urgent help",
        "If someone may harm themselves or another person, or cannot keep themselves safe, seek urgent local emergency or crisis support and stay with them if it is safe to do so. Do not rely on a website or social media message for emergency care."
      ]
    ],
    "disclaimer": "This article is general health education, not a diagnosis or treatment plan. A qualified clinician should review health content before it is treated as official hospital guidance."
  },
  {
    "status": "draft",
    "slug": "know-your-blood-pressure",
    "title": "Know Your Blood Pressure: Why Regular Checks Matter",
    "description": "Learn what blood pressure checks can tell you, why high blood pressure may have no obvious symptoms, and how to discuss results with a health professional.",
    "date": "2026-10-11",
    "category": "Preventive health",
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    "alt": "A healthcare professional discussing a patient's health check",
    "intro": "Blood pressure is one of the measurements a healthcare professional may use to understand cardiovascular health. High blood pressure often has no noticeable symptoms, so a person can feel well and still benefit from an appropriate check.",
    "sections": [
      [
        "A measurement needs context",
        "Blood pressure readings can vary with activity, stress, caffeine, posture and the way a measurement is taken. A single reading does not always establish a diagnosis. A clinician can explain what your result means and whether repeat measurements or follow-up are needed."
      ],
      [
        "Prepare for a more useful check",
        "Follow the provider's instructions. If possible, rest quietly for several minutes beforehand, sit with your back supported and feet flat, and avoid talking during the measurement. Tell the professional about medicines or symptoms that may be relevant."
      ],
      [
        "Build habits that support heart health",
        "Depending on your individual circumstances, a healthcare professional may discuss balanced eating, regular physical activity, limiting excess salt, avoiding tobacco, moderating alcohol, sleep and stress management. Do not stop prescribed medicine or change a dose without medical advice."
      ],
      [
        "Know when to get help",
        "If a reading is very high or you have concerning symptoms such as chest pain, severe shortness of breath, weakness, confusion or sudden vision changes, seek urgent medical assessment. Follow local emergency guidance."
      ]
    ],
    "disclaimer": "This article is educational and cannot interpret your personal readings. Ask a qualified healthcare professional for advice specific to you."
  },
  {
    "status": "draft",
    "slug": "protecting-your-eyes-everyday",
    "title": "Everyday Eye Care: Habits That Help Protect Your Vision",
    "description": "Practical eye-health guidance on routine eye checks, screen comfort, protective eyewear and symptoms that need prompt professional attention.",
    "date": "2026-10-11",
    "category": "Family health",
    "image": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85",
    "alt": "A person outdoors in natural daylight",
    "intro": "Vision helps us learn, work, move around and connect with others. Eye care is not only about responding when sight becomes blurry; it also includes noticing changes, protecting the eyes from injury and seeking professional advice when needed.",
    "sections": [
      [
        "Arrange appropriate eye checks",
        "The right timing for an eye examination depends on age, health history, symptoms and risk factors. Ask an optometrist, ophthalmologist or other qualified eye-care professional what schedule is suitable for you and your family."
      ],
      [
        "Make screen time more comfortable",
        "For long periods at a screen, take regular breaks, blink consciously and adjust screen brightness and distance for comfort. If headaches, eye strain or blurred vision persist, seek professional advice rather than assuming screens are the only cause."
      ],
      [
        "Use protection when it matters",
        "Use suitable protective eyewear for activities that risk eye injury and sunglasses that offer UV protection outdoors. Never look directly at the sun, including during an eclipse, without purpose-designed certified protection."
      ],
      [
        "Do not ignore sudden changes",
        "Sudden loss of vision, a curtain-like shadow, new flashes or many floaters, severe eye pain or an eye injury can require urgent assessment. Seek emergency eye care promptly when these occur."
      ]
    ],
    "disclaimer": "This is general information and does not replace an eye examination or personalised advice from a qualified professional."
  }
  ,
  {
    "status": "published",
    "slug": "making-healthcare-websites-easier-to-use",
    "title": "Making Healthcare Websites Easier for Everyone to Use",
    "description": "A practical look at readable content, accessible navigation, mobile-friendly pages and clear contact details on healthcare websites.",
    "date": "2026-10-11",
    "category": "Digital health",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    "alt": "A laptop showing a website development workspace",
    "intro": "A healthcare website is often a person's first digital introduction to a facility. Someone may be checking a location, trying to find a phone number, learning which services to ask about, or looking for basic information before making a call. A useful website should make those tasks straightforward rather than forcing visitors to guess where information is hidden. Good digital design is not a replacement for care; it is a way to make reliable information easier to find.",
    "sections": [
      ["Start with the visitor's real questions", "People usually arrive with a practical goal. They want to know where a facility is, how to contact it, what information to bring, and whether they need to call ahead. Put the most important details in predictable places and use plain labels such as Contact, Location, Services and About. Avoid vague navigation labels that sound clever but do not explain what visitors will find. A page should answer its main question near the top, then offer deeper detail for people who need it."],
      ["Make every page readable", "Use clear headings, short paragraphs and descriptive link text. A wall of dense text can be difficult to scan on a small phone screen, especially when a visitor is stressed or in a hurry. Keep text and background contrast strong, use a comfortable font size, and avoid relying on colour alone to communicate important information. Headings should follow a logical order so screen-reader users can navigate sections without having to listen to every sentence."],
      ["Design for phones and slower connections", "Many visitors use mobile data and entry-level phones. A page should fit narrow screens without sideways scrolling, and key information should remain available even when large images take time to load. Compress images, avoid unnecessary animation, and make buttons large enough to tap accurately. Test the site on a real phone as well as a desktop browser. A fast, focused page is often more helpful than a visually elaborate page that takes too long to become usable."],
      ["Keep contact details consistent", "A phone number, address and opening-hours statement should not contradict one another across the homepage, contact page, map listing and social profiles. If hours or services may change, say so and invite visitors to confirm by phone. Use a tap-to-call link on mobile and provide a map link that opens a familiar navigation app. Never publish a service, specialist, emergency capability or operating hour unless the facility has confirmed it."],
      ["Build accessibility into the design", "Accessibility is not just a final checklist. Images that convey information need meaningful alternative text; decorative images should not create unnecessary noise for assistive technology. Interactive controls need labels, links should make sense out of context, and all essential actions should be possible using a keyboard. Forms should identify required fields and explain errors in text. The W3C Web Content Accessibility Guidelines are a useful reference for teams planning and testing accessible experiences."],
      ["Protect trust and personal information", "A public information page should not ask visitors to enter sensitive health details unless there is a clear, approved reason and a secure system designed to handle them. Do not collect information through a decorative form that is not connected to a real service. Explain what any working form collects, why it is needed and how it will be used. Avoid publishing patient stories, photos or identifying details without documented permission and an appropriate review process."],
      ["Review content before it goes live", "A polished layout cannot make inaccurate information safe. A healthcare organisation should appoint people who can verify operational details and qualified reviewers for clinical content. Record who reviewed an article, when it was reviewed and which sources were used. If a statement becomes outdated or an error is found, correct it promptly. Draft pages should stay unpublished until the required approval is complete, and content should clearly distinguish general education from personalised medical advice."],
      ["Test the complete visitor journey", "Do not test only the homepage. Follow the journey a real visitor might take: open the site on a phone, find the address, tap the telephone number, open a service page, and return to the homepage. Check that links work, images have useful alternatives, page titles are descriptive, and no route leads to a blank page. Ask people with different levels of digital confidence to try the site and describe where they hesitate. Their feedback often reveals problems the developer has learned to overlook."],
      ["A website is an ongoing service", "A website needs maintenance after launch. Review contact information, update old announcements, check broken links, monitor performance and keep dependencies secure. Measure whether visitors can complete useful tasks rather than focusing only on page views. A clear, accessible and well-maintained site helps people find the information the organisation has approved for public use. The best design is the one that serves visitors reliably, including those using older devices, assistive technology or limited data." ]
    ],
    "disclaimer": "This is a digital-accessibility and website-design article, not medical advice or a statement of confirmed hospital services. Healthcare organisations should review and approve their own public information before publication."
  },
  {
    "status": "published",
    "slug": "checking-health-information-online",
    "title": "How to Check Health Information Before Sharing It Online",
    "description": "Simple ways to assess online health claims, identify trustworthy sources, protect privacy and know when to speak with a qualified professional.",
    "date": "2026-10-11",
    "category": "Health information literacy",
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=85",
    "alt": "A person reviewing written information at a desk",
    "intro": "Health information moves quickly through messaging groups, social media feeds, videos and websites. Some posts offer useful explanations; others leave out important context, promote products, or make claims that are not supported by good evidence. Before acting on a claim or forwarding it to family and friends, pause to check where it came from, what evidence is provided and whether a qualified source agrees.",
    "sections": [
      ["Look for the original source", "A screenshot or forwarded message may hide where a claim began. Look for the original article, public-health notice, research paper or official organisation statement. If a post makes a dramatic claim but gives no source, treat it cautiously. A named author and publication date help you investigate, but they do not prove that the information is accurate. Check whether the original source actually says what the social post claims it says."],
      ["Prefer accountable, qualified sources", "For health topics, start with recognised public-health agencies, established medical institutions, professional organisations and qualified clinicians speaking within their area of expertise. Reliable sources explain their reasoning and acknowledge uncertainty when evidence is limited. A large follower count, professional-looking logo or confident speaking style is not proof of medical expertise. Be especially careful when an influencer claims that one product or routine works for everyone."],
      ["Check the date and the context", "Health guidance can change as evidence develops, and a correct statement from years ago may no longer reflect current recommendations. Look for publication and update dates. Read beyond a headline: a study may involve a small group, a specific population or an early stage of research. Results from a laboratory study do not automatically show that a treatment benefits people in everyday clinical practice. A single study rarely settles a complex question on its own."],
      ["Notice warning signs in the language", "Be cautious of claims that promise a guaranteed cure, say a treatment works for every person, urge you to stop prescribed medicine, or insist that doctors are hiding a simple secret. Pressure to buy immediately, miracle before-and-after images, anonymous testimonials and claims that a product has no risks are further reasons to investigate. A real health intervention can have limits, side effects or different results for different people."],
      ["Understand what evidence can and cannot show", "Personal stories can be meaningful, but they cannot establish that a product caused a recovery. Symptoms may improve for many reasons, and people who have a bad experience may be less visible in promotional material. Research quality matters too: study design, number of participants, comparison groups, limitations and independent replication all affect how confidently results can be interpreted. If you cannot assess those details, seek an explanation from a qualified professional rather than guessing."],
      ["Do not make treatment changes based on a post", "Do not start, stop or change a prescribed medicine, dose or treatment because of a viral message. If information online raises a concern, write down the question and discuss it with a qualified healthcare professional who understands your circumstances. The same applies to advice about children, pregnancy, long-term conditions and interactions between medicines. An article can provide background, but it cannot examine you or safely replace personalised care."],
      ["Protect privacy when asking questions", "Avoid posting medical records, test results, phone numbers, home addresses or identifiable photos in public groups. Even a private group may allow screenshots or forwarding. If you use an online service, check that it is genuine and understand what information it requests. Do not send money or sensitive details to an account merely because it claims to represent a hospital or clinician. Verify contact information through an independently confirmed channel."],
      ["Share responsibly with family and friends", "Before forwarding a health claim, read it fully, verify its source and date, and check whether it could frighten people or encourage unsafe decisions. If you discover that you shared something inaccurate, correct it in the same place where you shared it. You do not need to embarrass anyone; a calm note with a trustworthy source is often more effective. Avoid presenting general information as a diagnosis for a relative or as a treatment plan for someone you have not assessed."],
      ["Know when online searching is not enough", "A website cannot assess an emergency or provide a reliable diagnosis from a short message. If someone has severe or rapidly worsening symptoms, seek urgent local medical care rather than continuing to search online. For non-urgent questions, use reputable sources to prepare for a conversation with a qualified professional. Bring the names of any products or medicines you are asking about and explain what you have read so the professional can help you evaluate it."],
      ["Make checking a habit", "A useful routine is to pause, trace the claim to its source, check the author and date, compare it with a trusted independent source, and ask whether the claim is trying to sell something. If important details remain unclear, do not share it as fact. Health literacy is not about knowing every medical answer; it is about recognising the limits of a post and knowing where to seek dependable help. A thoughtful pause can prevent misinformation from spreading through a family or community." ]
    ],
    "disclaimer": "This article provides general information-literacy guidance only. It does not diagnose or treat any condition. For personal health questions, consult a qualified healthcare professional; seek urgent local care for emergencies."
  },
];
