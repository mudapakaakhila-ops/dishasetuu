// Guided Pathway Explorer Question Bank & Recommendation Heuristics
// Designed for Indian Students (Class 10 & 12) and Parents

const QUIZ_QUESTIONS = [
  {
    id: "q-stage",
    step: 1,
    title: "What is your current education stage?",
    subtitle: "Select the milestone you have recently passed or are currently completing.",
    options: [
      {
        id: "stage-10",
        label: "I have completed (or am finishing) Class 10",
        badge: "Class 10 Pass",
        description: "Explore Intermediate streams (MPC, BiPC, MEC, CEC, HEC), Polytechnic Diplomas, or ITI technical training.",
        value: "10th"
      },
      {
        id: "stage-12",
        label: "I have completed (or am finishing) Class 12",
        badge: "Class 12 / +2 Pass",
        description: "Explore undergraduate degrees (B.Tech, MBBS, B.Pharm, Agri, Law, CA, Management, Design, NDA, Lateral Entry).",
        value: "12th"
      }
    ]
  },

  {
    id: "q-state",
    step: 2,
    title: "Which state is your domicile / home state?",
    subtitle: "State quotas, local reservation rules (AU/SVU/OU regions), and fee reimbursement schemes depend heavily on this.",
    options: [
      {
        id: "state-ap",
        label: "Andhra Pradesh (AP)",
        badge: "AP EAPCET / POLYCET / JVD",
        description: "Includes AU Region, SVU Region, and Jagananna Vidya Deevena fee reimbursement schemes.",
        value: "Andhra Pradesh"
      },
      {
        id: "state-ts",
        label: "Telangana (TS)",
        badge: "TG EAPCET / DOST / ePASS",
        description: "Includes Osmania University (OU) region, TS DOST degree services, and Telangana ePASS schemes.",
        value: "Telangana"
      },
      {
        id: "state-all-india",
        label: "Other States / Pan-India",
        badge: "National Quotas",
        description: "Focus primarily on All-India entrance exams (JEE, NEET, CUET, CLAT, NATA, NDA, etc.).",
        value: "All India"
      }
    ]
  },

  {
    id: "q-stream-10",
    step: 3,
    conditionalOn: { questionId: "q-stage", value: "10th" },
    title: "Which school subjects or activities do you enjoy most?",
    subtitle: "Be honest about what naturally engages your curiosity, not just what peers are choosing.",
    options: [
      {
        id: "pref-math-tech",
        label: "Mathematics, Physics, Computers & Logic",
        description: "Solving equations, understanding machinery, coding basics, analytical thinking.",
        tags: ["p10-mpc", "p10-polytechnic"],
        score: { "p10-mpc": 4, "p10-polytechnic": 3 }
      },
      {
        id: "pref-bio-health",
        label: "Biology, Plants, Human Anatomy & Health",
        description: "Curious about human diseases, nature, living systems, and saving lives.",
        tags: ["p10-bipc"],
        score: { "p10-bipc": 5 }
      },
      {
        id: "pref-hands-on-practical",
        label: "Hands-on Workshop, Gadgets & Direct Machine Work",
        description: "Love taking things apart, electrical circuits, tools, practical lab experiments.",
        tags: ["p10-polytechnic", "p10-iti-vocational"],
        score: { "p10-polytechnic": 4, "p10-iti-vocational": 4 }
      },
      {
        id: "pref-commerce-money",
        label: "Business, Money, Stock Markets & Economics",
        description: "Interested in how companies make profit, banking, trade, and financial investments.",
        tags: ["p10-commerce-mec-cec"],
        score: { "p10-commerce-mec-cec": 5 }
      },
      {
        id: "pref-arts-humanities",
        label: "Social Issues, History, Politics, Debating & Law",
        description: "Passionate about reading, civil justice, human behavior, current affairs, or creative writing.",
        tags: ["p10-humanities-hec"],
        score: { "p10-humanities-hec": 5 }
      }
    ]
  },

  {
    id: "q-stream-12",
    step: 3,
    conditionalOn: { questionId: "q-stage", value: "12th" },
    title: "Which stream or subject combination are you studying in Class 12?",
    subtitle: "Your Class 12 subjects determine your legal statutory eligibility for degree entrance examinations.",
    options: [
      {
        id: "stream12-mpc",
        label: "MPC / PCM (Maths, Physics, Chemistry)",
        description: "Eligible for Engineering, Architecture, Defense, Pure Science, Merchant Navy, Law, Management.",
        score: { "p12-pcm-engineering": 5, "p12-design-architecture": 3, "p12-defense-nda-cadet": 4 }
      },
      {
        id: "stream12-bipc",
        label: "BiPC / PCB (Biology, Physics, Chemistry)",
        description: "Eligible for Medicine (NEET), Pharmacy, Paramedical, Agriculture, Veterinary, Biotechnology.",
        score: { "p12-pcb-allied-pharmacy": 4, "p12-pcb-agriculture-allied": 4 }
      },
      {
        id: "stream12-pcmb",
        label: "PCMB (Maths, Biology, Physics, Chemistry)",
        description: "Maximum eligibility across both Engineering and Medical / Agri-Science entrances.",
        score: { "p12-pcm-engineering": 3, "p12-pcb-allied-pharmacy": 3, "p12-pcb-agriculture-allied": 3 }
      },
      {
        id: "stream12-commerce",
        label: "Commerce (MEC / CEC / with or without Maths)",
        description: "Eligible for CA, CMA, CS, B.Com, BBA, Law, IPMAT (IIMs), Actuarial Science.",
        score: { "p12-commerce-ca-management": 5, "p12-law-5yr-integrated": 3 }
      },
      {
        id: "stream12-arts",
        label: "Humanities / Arts (HEC / Social Sciences)",
        description: "Eligible for 5-Year Integrated Law, Civil Services, Journalism, Design, Social Work.",
        score: { "p12-law-5yr-integrated": 4, "p12-design-architecture": 3 }
      },
      {
        id: "stream12-polytechnic",
        label: "Polytechnic Diploma Completed (Seeking Degree)",
        description: "Eligible for direct 2nd-year B.Tech / B.E. admission via ECET Lateral Entry.",
        score: { "p12-pcm-engineering": 5 }
      }
    ]
  },

  {
    id: "q-work-style",
    step: 4,
    title: "What is your preferred everyday work style?",
    subtitle: "Think about the environment where you would feel energised 5 to 10 years from now.",
    options: [
      {
        id: "ws-analytical",
        label: "Analytical & Problem-Solving Desk",
        description: "Coding, analyzing data, financial statements, architecture modeling, or technical design.",
        score: { "p10-mpc": 2, "p12-pcm-engineering": 3, "p10-commerce-mec-cec": 2, "p12-commerce-ca-management": 3 }
      },
      {
        id: "ws-caring-health",
        label: "Patient Care, Diagnosis & Biological Science",
        description: "Clinics, hospitals, diagnostic laboratories, agricultural farms, animal health care.",
        score: { "p10-bipc": 3, "p12-pcb-allied-pharmacy": 3, "p12-pcb-agriculture-allied": 3 }
      },
      {
        id: "ws-practical-hands-on",
        label: "Practical, Field-Oriented or Machine Workshops",
        description: "Working with tangible hardware, industrial machinery, field inspections, or outdoors.",
        score: { "p10-polytechnic": 4, "p10-iti-vocational": 4, "p12-defense-nda-cadet": 3 }
      },
      {
        id: "ws-social-verbal",
        label: "Public Impact, Advocacy, Governance & People Leadership",
        description: "Debating, legal courtrooms, public administration, media reporting, corporate leadership.",
        score: { "p10-humanities-hec": 3, "p12-law-5yr-integrated": 4, "p12-defense-nda-cadet": 3 }
      },
      {
        id: "ws-creative-visual",
        label: "Creative, Visual & Aesthetic Invention",
        description: "Designing user interfaces, drawing, product styling, spatial layout, brand identity.",
        score: { "p12-design-architecture": 4, "p10-humanities-hec": 2 }
      }
    ]
  },

  {
    id: "q-timeline-budget",
    step: 5,
    title: "What is your preference for study duration and budget?",
    subtitle: "Being realistic about family finances and timelines prevents unnecessary academic stress.",
    options: [
      {
        id: "tb-fast-independence",
        label: "Earlier Financial Independence (Job by age 18 to 20; Low Cost)",
        description: "Need to start earning quickly with affordable training (ITI, Polytechnic Diploma, or Govt Apprenticeship).",
        score: { "p10-iti-vocational": 5, "p10-polytechnic": 4 }
      },
      {
        id: "tb-standard-degree-subsidized",
        label: "Standard 3 to 4 Year Degree with Govt Fee Reimbursement",
        description: "Aiming for state university or convenor seats under AP JVD / TS ePASS / Central scholarships.",
        score: { "p10-mpc": 3, "p12-pcm-engineering": 3, "p12-pcb-allied-pharmacy": 3, "p12-pcb-agriculture-allied": 4 }
      },
      {
        id: "tb-long-term-high-investment",
        label: "Prepared for Long-Term Rigorous Professional Studies (5 to 7 Years)",
        description: "Willing to invest extensive time into Medicine (MBBS), Law (5-yr NLU), or Chartered Accountancy (CA).",
        score: { "p10-bipc": 3, "p12-commerce-ca-management": 3, "p12-law-5yr-integrated": 3 }
      },
      {
        id: "tb-zero-cost-defense",
        label: "Fully Govt-Funded Military / Defense Cadetship with Officer Commission",
        description: "100% free education, uniform, and lodging by the nation via NDA & Armed Forces.",
        score: { "p12-defense-nda-cadet": 5 }
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QUIZ_QUESTIONS };
}
