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

  {
    "status": "published",
    "slug": "prepare-for-a-hospital-visit",
    "title": "How to Prepare for a Hospital Visit: A Practical Checklist",
    "description": "A calm, practical checklist for planning a healthcare visit, organising questions, bringing useful information and protecting your privacy.",
    "date": "2026-10-12",
    "category": "Patient resources",
    "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
    "alt": "A healthcare professional speaking with a patient",
    "intro": "A healthcare visit can feel easier when you know what to expect and have the information you need close at hand. Whether you are asking about a new concern, following up on previous care or accompanying a family member, a little preparation can help you communicate clearly. Every facility has its own process, so use this as a general planning guide and contact the hospital directly to confirm its current arrangements.",
    "sections": [
      ["Confirm the practical details first", "Before leaving home, check the facility's address, phone number, opening arrangements and whether you need an appointment. Ask whether the service you need is available on the day you plan to visit. If you are travelling from another part of town, allow time for transport and consider saving the location on your phone. Do not assume that every service is available at every facility or at all hours. For Peaceway Family Hospital, contact the team directly on 0701 275 3409 to confirm current arrangements."],
      ["Write down the main reason for your visit", "It can be easy to forget details when you are busy or worried. Before the visit, write a short note about what you want help with and the questions you hope to ask. If you are describing a concern, note when you first noticed it and any changes you have observed. Keep your notes factual and do not feel that you must know the medical name for something. Your own description is useful information for a healthcare professional."],
      ["Prepare a current information list", "Where relevant, make a list of medicines and supplements you currently use, including names and strengths if you know them. Note any allergies or previous reactions that you are aware of, and bring relevant records if the facility asks for them. Do not stop, start or change a prescribed treatment simply to prepare for a visit. If you are uncertain which records are useful, call ahead and ask what to bring. Only share sensitive information through appropriate, trusted channels."],
      ["Bring the essentials without overpacking", "Depending on the purpose of the visit, useful items may include identification, appointment details, previous reports, a list of medicines, glasses or hearing aids, and a notebook. If someone is accompanying you, discuss what support you want from them. For a child or another person you help care for, confirm what documentation the facility requires. Keep original documents secure and avoid leaving personal papers unattended."],
      ["Ask questions and request clarification", "You do not need to understand every unfamiliar term immediately. It is reasonable to ask a healthcare professional to explain a word, repeat an instruction or write down the next step. Consider questions such as: What should I understand about this? Are there options? What should I do next? When should I follow up? If a recommendation is unclear, say so before leaving. Clear communication is a shared process, and asking questions helps you participate in decisions."],
      ["Share information honestly", "Tell the professional what you have noticed and what you are concerned about, even if a detail feels embarrassing. Accurate information helps them understand the situation. If you do not know an answer, it is fine to say so rather than guess. If you are supporting another adult, respect their privacy and involve them in the conversation as much as possible. Ask before sharing their information with others, and follow the facility's consent and confidentiality procedures."],
      ["Understand what happens after the visit", "Before leaving, make sure you understand any next steps that have been discussed, such as a follow-up appointment, a test, a referral or written instructions. Confirm whom to contact if you have a question later and how results will be communicated. If you are given written information, read it and ask about anything that seems inconsistent or unclear. Do not rely on a website article to interpret your personal results or replace instructions from the clinician who assessed you."],
      ["Make the experience more accessible", "If you need help with mobility, communication, language, hearing or vision, tell the facility before the visit where possible. Ask whether an accompanying person or other support can be arranged. If you use a mobility aid or assistive device, plan how you will transport it. People have different access needs, and explaining yours is a practical way to help staff understand what support may be useful."],
      ["Protect your information", "Avoid posting appointment cards, test reports or identifiable hospital documents on public social media. Check who can see messages before sharing sensitive details. Do not send medical records to an account unless you have verified that it belongs to the intended facility and that the channel is appropriate. If you are unsure, call a confirmed telephone number and ask about the safest process. Never share passwords, one-time codes or payment credentials with someone claiming to arrange care."],
      ["If the situation is urgent", "Preparation checklists are for routine planning and should never delay urgent care. If a person appears to be in immediate danger or has severe, rapidly worsening symptoms, seek urgent local emergency assistance rather than waiting for an appointment, email response or website message. This article cannot assess an individual's condition. When in doubt about an urgent situation, use local emergency services or a qualified professional's guidance."],
      ["After the visit, review your notes", "When you have time, look at any written instructions and note questions that remain. If the facility gave you a specific contact route for follow-up, use it. Keep records in a safe place where you can find them when needed, but do not store sensitive details in a public or shared account. If you are helping a relative, ask how they want you to support them and respect their choices and privacy."],
      ["A final checklist", "Before leaving, check the address and timing, confirm the service, collect the records you were asked to bring, write down your questions, and plan your transport. During the visit, describe your concerns in your own words and ask for clarification when needed. Before leaving, confirm the next steps and who to contact with follow-up questions. This simple preparation cannot guarantee a particular outcome, but it can help make communication more organised and respectful." ]
    ],
    "disclaimer": "This article is general patient-resource information, not medical advice and not a confirmation of every service offered by any hospital. Contact the facility to confirm arrangements. For emergencies, seek urgent local care."
  },
  {
    "status": "published",
    "slug": "questions-to-ask-your-healthcare-professional",
    "title": "Questions to Ask Your Healthcare Professional",
    "description": "How to prepare for a clear, respectful conversation with a healthcare professional and understand the next steps in your care.",
    "date": "2026-10-12",
    "category": "Patient communication",
    "image": "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=85",
    "alt": "A clinician and patient having a conversation",
    "intro": "A healthcare conversation is a chance to explain what matters to you, share information and understand possible next steps. It is normal to feel unsure about what to ask, especially when a conversation includes unfamiliar terms or several decisions. Preparing a few questions can help you use your time well. The right questions depend on your circumstances, and your healthcare professional is the person to guide you about your individual care.",
    "sections": [
      ["Start with the concern that matters most", "If you have several questions, tell the professional which one is most important to you today. Describe your concern in your own words and mention what you most want to understand. You do not need to use technical language or arrive with a self-diagnosis. A clear description of what you have noticed and what you are worried about gives the conversation a useful starting point."],
      ["Ask what the information means for you", "When a professional explains a finding, you can ask, 'Could you explain that in everyday language?' or 'What does this mean in my situation?' General information online may describe a condition in broad terms, but individual decisions depend on personal history, examination and other relevant details. If an explanation includes uncertainty, ask what is known, what is not yet known and whether further assessment is recommended."],
      ["Understand the available options", "When a decision is needed, consider asking what options are available, what the purpose of each option is, and what benefits, risks or limitations the professional wants you to understand. You can also ask whether there is time to think about the decision or seek another qualified opinion. The aim is not to challenge for the sake of it; it is to make sure you understand the choices relevant to you."],
      ["Clarify instructions before leaving", "If you receive instructions, repeat back your understanding in your own words and invite the professional to correct anything you misunderstood. Ask whether the instructions are written down and whom to contact if you have questions later. If a step is difficult for you to follow because of cost, transport, work, language or another barrier, say so. The team may be able to discuss practical alternatives or explain which parts are most important."],
      ["Ask about follow-up", "A useful conversation includes a plan for what happens next. Ask whether another visit is needed, whether there are results to expect, how you will receive them and whom to contact if you have not heard back within the timeframe given. If a referral is mentioned, ask what the next step is and whether you need to arrange it yourself. Keep the contact details provided by the facility."],
      ["Bring someone when it helps", "If you would like support, ask whether a trusted person can accompany you. They may help you remember questions or take notes, but the conversation should still respect your preferences and privacy. If you are attending on behalf of another adult, consent and confidentiality matter. The facility may need to confirm that the patient agrees to share information with you."],
      ["Be open about concerns and constraints", "Tell the professional if you have difficulty understanding a plan or following it in everyday life. This might involve schedules, transportation, accessibility, cost or concerns about a treatment. Do not hide a problem because you fear being judged. Honest discussion gives the professional a better opportunity to explain the plan, review alternatives or direct you to an appropriate source of support."],
      ["Use online research as a conversation starter", "If you read something that worries you, bring the source or write down the question rather than relying on a screenshot without context. Ask whether the information is trustworthy and how it applies to your situation. Avoid starting, stopping or changing medicines based on an online post. The professional can help you interpret claims in light of your circumstances and the best available evidence."],
      ["Respect the limits of a short appointment", "Time with a professional may be limited, so a short written list can help. If your questions are numerous, ask which should be addressed first and whether a separate follow-up is appropriate. You can request clarification without expecting every possible issue to be resolved immediately. The goal is to leave with a clearer understanding of the most important concern and the agreed next steps."],
      ["A simple question list to save", "Before a visit, consider writing down: What should I understand about my concern? What are the possible next steps? What should I watch for, and when should I seek further help? What are the benefits and risks of the options being discussed? How will follow-up happen? Who should I contact if I have questions? Not every question will apply to every visit, so choose those that fit your situation."],
      ["Make communication a partnership", "Good communication is built on respect from both sides. You can share your goals, ask for an explanation and say when something is unclear. A professional should help you understand relevant information and the decisions being discussed. If language or accessibility is a barrier, ask what support may be available. A short conversation that ends with clear next steps can be more useful than leaving with unanswered questions." ]
    ],
    "disclaimer": "This article supports general communication and preparation only. It does not provide diagnosis or treatment advice. For decisions about your own health, speak with a qualified healthcare professional."
  },
  {
    "status": "published",
    "slug": "protecting-personal-health-information-online",
    "title": "Protecting Your Personal Health Information Online",
    "description": "Practical privacy habits for sharing health information, using messaging apps, spotting impersonation and keeping digital records safer.",
    "date": "2026-10-12",
    "category": "Digital privacy",
    "image": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85",
    "alt": "A laptop and phone used for digital security",
    "intro": "Phones and online services can make health information easier to organise and share, but sensitive details deserve care. A photo of a report, appointment card or prescription may reveal more than you intended. A message that appears to come from a healthcare organisation may not be genuine. These general privacy practices can help you think carefully before sharing information, while remembering that each facility should explain its own approved communication channels.",
    "sections": [
      ["Pause before posting", "Before uploading a health-related image or story, check whether it contains names, dates of birth, addresses, identification numbers, appointment details or other information that could identify someone. Cropping a picture may not remove every detail, and screenshots can be copied. If you do not need to publish the information publicly, the safest choice is often not to post it."],
      ["Share only what is needed", "When using a service, consider why it asks for each piece of information. Do not provide extra sensitive details just because a form has an empty field. A legitimate healthcare provider may need certain information for care, but you should be able to understand the purpose and the process for submitting it. If something feels unusual, verify the request through an independently confirmed contact route before proceeding."],
      ["Verify accounts and messages", "Scammers can imitate organisations, professionals and customer-support accounts. Check the exact account name and web address, but do not rely on a logo or profile picture alone. If a message asks for money, passwords, one-time codes or urgent personal details, pause and verify it independently. Use a phone number obtained from a trusted source rather than simply replying to the suspicious message."],
      ["Use safer device habits", "Keep your phone and apps updated when possible, use a screen lock, and avoid sharing device access with people you do not trust. Use a unique password for important accounts and enable multi-factor authentication when offered. Be cautious on shared devices, sign out when finished and avoid saving sensitive records in public folders. These steps reduce risk but cannot eliminate every possible security problem."],
      ["Be careful with public Wi-Fi and shared phones", "A public network or a borrowed phone may not offer the privacy you expect. Avoid entering sensitive account information on a device you do not control. If you must use a shared device, do not allow it to remember your password and sign out completely afterward. Be aware that notifications may appear on a lock screen where other people can read them."],
      ["Understand links and downloads", "Unexpected links may lead to fake login pages or unwanted downloads. If a message claims that a test result or hospital document is ready, confirm through a known official channel before opening it. Check that the web address matches the service you intended to use. Do not install an app or browser extension merely because a stranger says it is needed to view health information."],
      ["Ask how a service handles data", "Before using a digital health service, look for an understandable privacy notice that explains what is collected, why, who can access it and how to ask questions. A trustworthy service should not make unrealistic promises such as perfect security. If the privacy information is missing or unclear, avoid submitting sensitive records until you can confirm the service's legitimacy and practices."],
      ["Respect other people's information", "Do not forward another person's test result, photograph, diagnosis or personal story without their permission and a legitimate reason. Being a relative or caregiver does not automatically mean every detail should be shared in a group chat. If you help someone manage records, agree on how information will be stored and who may see it. Keep paper copies and devices secure."],
      ["What to do if you make a mistake", "If you accidentally send sensitive information to the wrong recipient or suspect an account has been compromised, act promptly. Use the relevant service's official process to secure the account, change affected passwords from a trusted device and report the incident to the organisation involved. If another person's information was exposed, notify the appropriate responsible party rather than spreading the material further."],
      ["Remember the limits of online messages", "Ordinary social media messages and website contact forms may not be suitable for urgent symptoms or sensitive medical records. Confirm which channels a facility has approved and what they are designed to handle. Do not assume that a message has been read simply because it was sent. For urgent medical concerns, seek urgent local care rather than waiting for an online response."],
      ["Build privacy into everyday habits", "Before sharing, ask whether the information is necessary, whether the recipient is genuine, whether the channel is appropriate and whether you have permission. Review app permissions occasionally and remove access that is no longer needed. These small habits help protect your own information and the privacy of people you care for. They complement, but do not replace, the security and privacy responsibilities of organisations that handle health data." ]
    ],
    "disclaimer": "This article provides general digital-privacy education, not legal advice or a guarantee of security. Follow the privacy and communication guidance of the healthcare provider you use."
  },
];
