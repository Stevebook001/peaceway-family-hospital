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
];
