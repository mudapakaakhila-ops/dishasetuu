// Comprehensive Educational and Career Pathways Dataset
// Verified for Academic Years 2025-2026 / 2026-2027
// Sources: UGC, AICTE, NMC, APSCHE, TSCHE, NTA, MoE NIRF Reports

const PATHWAYS_DATA = [
  // ==========================================
  // PATHWAYS AFTER CLASS 10
  // ==========================================
  {
    id: "p10-mpc",
    stage: "10th",
    title: "Class 10 → Intermediate MPC (Maths, Physics, Chemistry)",
    category: "Science & Technology",
    streamName: "MPC / Higher Secondary PCM",
    duration: "2 Years (Inter) + 3 to 4 Years (Degree)",
    studyIntensity: "High to Very High",
    tagline: "The premier analytical and STEM foundation — opening engineering, architecture, pure sciences, defense, and data careers.",
    summary: "Intermediate MPC is India's most popular STEM stream. While widely known as the gateway to engineering via JEE and EAPCET, it equally qualifies students for Architecture, Statistics, Data Science, Commercial Aviation, Merchant Navy, NDA Officer commissions, and BS-MS Pure Science research.",
    mythBuster: "MISCONCEPTION: 'MPC is strictly for engineering or B.Tech.' REALITY: MPC graduates excel in Actuarial Sciences, NDA Armed Forces, Commercial Pilot training, Mathematics/Economics research at ISI, B.Des design, and Corporate Law.",
    eligibility: {
      minimumCriteria: "Pass in Class 10 (SSC / CBSE / ICSE) with Mathematics and Science as core subjects.",
      marksThreshold: "Usually 50% - 60% aggregate depending on college; top junior colleges conduct admission screening tests.",
      reservationNotes: "State reservations apply for Govt Junior Colleges and Model Schools in AP & TS."
    },
    costRange: {
      governmentJuniorCollege: "₹1,500 - ₹5,000 / year (Near free with state welfare)",
      privateJuniorCollege: "₹45,000 - ₹1,80,000 / year (Higher with integrated JEE coaching)",
      degreeGovt: "₹35,000 - ₹80,000 / year (Eligible for AP JVD / TS ePASS reimbursement)",
      degreePrivate: "₹85,000 - ₹3,50,000 / year (Varies by category A vs B seats)"
    },
    stateSpecificNotes: {
      allIndia: "Eligible for JEE Main, JEE Advanced (IITs), BITSAT, NDA, IISER IAT, CUET-UG.",
      andhraPradesh: "Administered by BIEAP. State entrance: AP EAPCET (Engineering, Agriculture and Pharmacy Common Entrance Test) conducted by APSCHE. Fee reimbursement eligible under Jagananna Vidya Deevena (JVD). 85% local reservation in AU & SVU regions.",
      telangana: "Administered by TSBIE. State entrance: TG EAPCET (formerly TS EAMCET) conducted by JNTU Hyderabad for TSCHE. Full/partial fee reimbursement via TS ePASS for eligible income brackets. OU region local reservation."
    },
    steps: [
      {
        stepNumber: 1,
        title: "Intermediate 1st & 2nd Year (Classes 11 & 12)",
        focus: "Master foundational concepts in Mathematics (Calculus, Coordinate Geometry, Vectors), Physics (Mechanics, Electromagnetism), and Chemistry (Organic, Physical, Inorganic).",
        milestone: "Score 75%+ in Board Exams (Crucial for JEE / BITSAT eligibility criteria)."
      },
      {
        stepNumber: 2,
        title: "Entrance Examinations Phase",
        focus: "Appear for National (JEE Main/Adv, BITSAT, NDA) and State-level (AP EAPCET / TG EAPCET) examinations during Jan-May.",
        milestone: "Securing a valid rank and percentile; attending JoSAA / State Web Counseling."
      },
      {
        stepNumber: 3,
        title: "Undergraduate Degree Program",
        focus: "4-Year B.Tech / B.E., 5-Year B.Arch, 4-Year BS-MS (IISERs), 3-Year B.Sc (Hons) in Mathematics / Statistics / Computer Science, or NDA Military Academy.",
        milestone: "Academic GPA, core technical skills, summer internships, and capstone projects."
      },
      {
        stepNumber: 4,
        title: "Career Launch or Postgraduation",
        focus: "Campus placements, GATE for M.Tech/PSUs, CAT for IIMs, or GRE/TOEFL for global MS degrees.",
        milestone: "Transition into professional engineering, software, data analytics, or civil/defense services."
      }
    ],
    entranceExams: ["jee-main", "jee-adv", "ap-eapcet", "tg-eapcet", "bitsat", "nata", "nda", "iiser-iat"],
    furtherStudy: ["M.Tech / M.S. via GATE", "MBA via CAT/XAT", "M.Sc in Applied Mathematics / Data Science", "Civil Services (UPSC CSE)"],
    careerRoles: [
      "Software Engineer / Systems Architect",
      "Core Mechanical / Civil / Electrical Design Engineer",
      "Data Scientist / AI-ML Engineer",
      "Architect (via NATA / JEE Paper 2)",
      "Commissioned Officer in Indian Armed Forces (via NDA)",
      "Commercial Pilot / Merchant Navy Officer",
      "Actuary / Quantitative Financial Analyst"
    ],
    salaryEstimate: {
      entryMedian: "₹4.50 - ₹8.50 LPA",
      midCareer: "₹12.00 - ₹24.00 LPA",
      highestPackageReality: "Debunking headline hype: College hoardings touting '₹50 LPA' usually refer to 1 or 2 off-campus international packages. The verified institutional median (NIRF data) across tier-2/tier-3 engineering colleges ranges between ₹4.2 LPA and ₹6.8 LPA.",
      dataQuality: "High (Verified from AICTE Mandatory Disclosures & NIRF 2024 Engineering Reports)"
    },
    tradeOffs: {
      pros: [
        "Unlocks the widest variety of technical and non-technical career paths.",
        "High flexibility: Can switch to commerce, law, design, or management at degree level.",
        "Clear institutional campus placement pipelines in engineering and software sectors."
      ],
      cons: [
        "Extremely intense competition (14+ lakh candidates in JEE Main alone).",
        "Junior college schedule can be high-pressure with long study hours.",
        "High disparity in teaching quality between premium coaching institutions and standard colleges."
      ]
    },
    lastVerified: "October 2026",
    officialSource: "APSCHE (cets.apsche.ap.gov.in), TSCHE (tsche.ac.in), NTA (nta.ac.in)"
  },

  {
    id: "p10-bipc",
    stage: "10th",
    title: "Class 10 → Intermediate BiPC (Biology, Physics, Chemistry)",
    category: "Medical & Life Sciences",
    streamName: "BiPC / Higher Secondary PCB",
    duration: "2 Years (Inter) + 4 to 5.5 Years (Professional Degree)",
    studyIntensity: "Very High",
    tagline: "The premier pathway for medicine, veterinary sciences, pharmacy, biotechnology, agriculture, and healthcare leadership.",
    summary: "BiPC builds in-depth knowledge of living organisms, cellular biology, organic chemistry, and medical physics. While MBBS through NEET-UG is the top choice, BiPC offers equally respectable, highly stable careers in Pharmacy, Agricultural Sciences, Physiotherapy, Forensic Science, Nursing, and Biotech research.",
    mythBuster: "MISCONCEPTION: 'If you don't get an MBBS seat, BiPC is a dead end.' REALITY: B.Sc Agriculture, Veterinary Medicine (BVSc), Pharm.D (Clinical Pharmacy), BPT Physiotherapy, B.Sc Nursing, and Medical Lab Technology provide excellent, highly rewarding careers in healthcare and government sectors.",
    eligibility: {
      minimumCriteria: "Pass in Class 10 with Science and English.",
      marksThreshold: "Minimum 50% aggregate for general category; 40% for reserved categories.",
      reservationNotes: "Extensive constitutional and local reservations apply in state medical and agricultural colleges."
    },
    costRange: {
      governmentJuniorCollege: "₹1,500 - ₹5,000 / year",
      privateJuniorCollege: "₹50,000 - ₹1,90,000 / year (With NEET preparation modules)",
      mbbsGovtCollege: "₹10,000 - ₹80,000 / year (Highly subsidized by State / Central Govt)",
      mbbsPrivateCollege: "₹12,00,000 - ₹25,00,000 / year (Management / NRI quotas)",
      alliedHealthGovt: "₹20,000 - ₹60,000 / year"
    },
    stateSpecificNotes: {
      allIndia: "NEET-UG is the single mandatory entrance exam for MBBS, BDS, BAMS, BHMS, and BSMS across all Indian states and institutions (AIIMS, JIPMER).",
      andhraPradesh: "Administered by BIEAP. State entrance AP EAPCET (Agriculture & Pharmacy stream) covers B.Pharm, Pharm.D, B.Sc Agriculture (ANGRAU), B.Tech Food Tech, B.Sc Horticulture, and BFSc (Fisheries).",
      telangana: "Administered by TSBIE. State entrance TG EAPCET (Agriculture & Pharmacy stream) covers B.Pharm, Pharm.D, B.Sc (Hons) Agriculture (PJTSAU), B.V.Sc (PVNRTVU), and allied courses."
    },
    steps: [
      {
        stepNumber: 1,
        title: "Intermediate BiPC (Classes 11 & 12)",
        focus: "Thorough mastery of NCERT Biology (Botany & Zoology), Organic/Inorganic Chemistry, and Physics fundamentals with diagrammatic precision.",
        milestone: "Board examinations and sustained NEET/EAPCET mock testing discipline."
      },
      {
        stepNumber: 2,
        title: "Medical & Agriculture Entrance Tests",
        focus: "Appear for NEET-UG (May) and State EAPCET (Agriculture/Pharmacy) stream.",
        milestone: "Qualifying MCC national 15% quota counseling or Dr. YSRUHS (AP) / KNRUHS (TS) state counseling."
      },
      {
        stepNumber: 3,
        title: "Professional Healthcare or Agri-Sciences Degree",
        focus: "MBBS (5.5 yrs including internship), BDS (5 yrs), Pharm.D (6 yrs), B.Pharm (4 yrs), B.Sc Agriculture (4 yrs), or BPT (4.5 yrs).",
        milestone: "Clinical clinical rotations, hospital ward rounds, or field agricultural research stations."
      },
      {
        stepNumber: 4,
        title: "Licensure & Specialization",
        focus: "Register with State Medical / Pharmacy / Dental Council; prepare for NEET-PG / NEXT or GPAT for postgraduate specializations.",
        milestone: "Commencing clinical practice, hospital residency, or pharmaceutical research."
      }
    ],
    entranceExams: ["neet-ug", "ap-eapcet-agri", "tg-eapcet-agri", "icar-cuet", "aiims-paramedical"],
    furtherStudy: ["MD / MS / DNB (Postgraduate Medical)", "M.Pharm / Ph.D", "M.Sc Agriculture / Horticulture", "MHA (Hospital Administration)"],
    careerRoles: [
      "Physician / Medical Specialist (MBBS + MD/MS)",
      "Dental Surgeon (BDS)",
      "Agricultural Officer / Agronomist",
      "Veterinary Surgeon (B.V.Sc)",
      "Clinical Pharmacist / Drug Regulatory Specialist (Pharm.D / B.Pharm)",
      "Cardiovascular / Dialysis / Radiology Technologist",
      "Biotechnology Research Scientist / Bioinformatician"
    ],
    salaryEstimate: {
      entryMedian: "₹4.80 - ₹9.50 LPA (Doctors during residency: ₹50k-₹85k/month stipend; Allied/Pharmacy: ₹3.6-₹6 LPA)",
      midCareer: "₹14.00 - ₹35.00+ LPA (Substantially rises after MD/MS or specialist clinical practice)",
      highestPackageReality: "Unlike corporate tech jobs, medical salaries do not follow 'placement package' models; income grows progressively with clinical reputation, patient footfall, and super-specialization (DM/MCh).",
      dataQuality: "High (National Medical Commission & Ministry of Health workforce data)"
    },
    tradeOffs: {
      pros: [
        "Unrivalled social respect, direct positive impact on human lives, and lifelong job security.",
        "Recession-proof healthcare, clinical, and agricultural sectors.",
        "Vast choice of noble professions beyond just MBBS."
      ],
      cons: [
        "Long gestation period (5.5 to 9 years before independent specialist practice).",
        "Intense psychological stamina required for medical emergencies and hospital shifts.",
        "Extreme competition for government medical college seats (over 24 lakh NEET aspirants for ~1.1 lakh MBBS seats)."
      ]
    },
    lastVerified: "October 2026",
    officialSource: "National Medical Commission (nmc.org.in), NTA (neet.nta.nic.in), APSCHE, TSCHE"
  },

  {
    id: "p10-polytechnic",
    stage: "10th",
    title: "Class 10 → Polytechnic Diploma (3 Years) with Lateral Entry",
    category: "Technical & Applied Engineering",
    streamName: "3-Year Diploma in Engineering / Technology",
    duration: "3 Years (Diploma) + Optional 3 Years (B.Tech via Lateral Entry)",
    studyIntensity: "Moderate to Practical",
    tagline: "The hands-on engineering secret: Gain deep technical skills early, or leap straight into 2nd year B.Tech via ECET without Class 11-12 coaching stress.",
    summary: "Polytechnic diplomas offer high-value practical training right after Class 10. Students spend 3 years in workshops, coding labs, and industrial visits. Upon completion, graduates can either land direct technical employment in PSUs and manufacturing, or take the ECET exam to enter directly into the 2nd year of B.Tech (Lateral Entry), graduating at the exact same age as regular 12th students!",
    mythBuster: "MISCONCEPTION: 'Polytechnic diplomas are only for students with poor marks who can't get into Intermediate.' REALITY: Many top performers deliberately choose Polytechnic for its hands-on practical syllabus, heavy lab emphasis, and the powerful ECET lateral entry quota that bypasses the cutthroat JEE rat race.",
    eligibility: {
      minimumCriteria: "Pass in Class 10 (SSC / equivalent) with Mathematics and Science (minimum 35% marks).",
      marksThreshold: "Admissions governed entirely by state-level POLYCET rank.",
      reservationNotes: "Full state reservation applies; government polytechnic seats are heavily subsidized."
    },
    costRange: {
      governmentPolytechnic: "₹4,500 - ₹12,000 / year (Near free under state fee reimbursement schemes)",
      privatePolytechnic: "₹25,000 - ₹45,000 / year",
      lateralEntryBTechGovt: "₹35,000 - ₹70,000 / year (Covered under JVD / ePASS)"
    },
    stateSpecificNotes: {
      allIndia: "Diplomas recognized by AICTE. Lateral entry recognized across Indian university engineering faculties.",
      andhraPradesh: "Conducted by State Board of Technical Education and Training (SBTET AP). Entrance: AP POLYCET. Lateral entry to B.Tech: AP ECET (Engineering Common Entrance Test) with 10% supernumerary seats in engineering colleges.",
      telangana: "Conducted by SBTET Telangana. Entrance: TS POLYCET. Lateral entry to B.Tech: TS ECET with dedicated 10% lateral entry quota."
    },
    steps: [
      {
        stepNumber: 1,
        title: "Pass Class 10 & Appear for POLYCET",
        focus: "Take the state entrance test (AP POLYCET / TS POLYCET) covering 10th Maths, Physics, and Chemistry.",
        milestone: "Securing a seat in popular branches like Computer Engineering, Mechanical, ECE, EEE, or Civil."
      },
      {
        stepNumber: 2,
        title: "3-Year Polytechnic Curriculum",
        focus: "Intensive laboratory experiments, machine shop practice, AutoCAD, circuit design, programming, and mandatory 6-month industrial internship.",
        milestone: "Earning the State Board Diploma with practical technical proficiency."
      },
      {
        stepNumber: 3,
        title: "The Crossroads: Job or Degree",
        focus: "Option A: Direct recruitment into Railways, DISCOMs, DRDO, or private tech firms as Junior Engineer / CAD Drafter. Option B: Appear for ECET for 2nd Year B.Tech Lateral Entry.",
        milestone: "ECET counseling seat allotment directly into 2nd year B.Tech."
      },
      {
        stepNumber: 4,
        title: "Graduate Engineer / Senior Technologist",
        focus: "Complete 3 years of B.Tech alongside regular peers with superior hands-on lab foundation.",
        milestone: "Placement in premier tech/core firms with full engineering degree credentials."
      }
    ],
    entranceExams: ["ap-polycet", "ts-polycet", "ap-ecet", "ts-ecet"],
    furtherStudy: ["B.Tech / B.E. via Lateral Entry (ECET)", "Advanced Post-Diploma specializations", "AMIE certification"],
    careerRoles: [
      "Junior Engineer (JE) in State PWD, Irrigation, DISCOMs, and Indian Railways",
      "Technician / Assistant Engineer in PSUs (BHEL, NTPC, ONGC, ISRO, DRDO)",
      "Software Developer / Embedded Systems Programmer",
      "CAD / BIM Design Specialist",
      "Plant Maintenance & Automation Supervisor"
    ],
    salaryEstimate: {
      entryMedian: "Diploma level: ₹2.80 - ₹4.50 LPA | After ECET + B.Tech: ₹4.80 - ₹8.00 LPA",
      midCareer: "₹9.00 - ₹18.00 LPA",
      highestPackageReality: "Direct diploma recruits start at modest salaries (₹18k-₹30k/month), but those who complete B.Tech lateral entry achieve campus placements on par with regular IIT/NIT/State university graduates.",
      dataQuality: "High (State Board of Technical Education Reports & AICTE Data)"
    },
    tradeOffs: {
      pros: [
        "Hands-on practical training from day one, skipping abstract theoretical memorization.",
        "Direct bypass to 2nd year B.Tech via ECET without JEE stress.",
        "Very affordable government tuition; rapid route to earning livelihood by age 19."
      ],
      cons: [
        "Starting salaries for diploma-only holders are lower than 4-year degree engineers.",
        "Switching outside STEM (e.g. to Economics or Law) is more bureaucratic compared to Class 12.",
        "Diploma students must work extra hard on higher mathematics during 2nd year B.Tech."
      ]
    },
    lastVerified: "October 2026",
    officialSource: "SBTET AP (sbtet.ap.gov.in), SBTET TS (sbtet.telangana.gov.in), AICTE"
  },

  {
    id: "p10-iti-vocational",
    stage: "10th",
    title: "Class 10 → ITI & Vocational Training (1 to 2 Years)",
    category: "Vocational & Skilled Trades",
    streamName: "Industrial Training Institute (ITI) / Craftsmen Scheme (CTS)",
    duration: "1 to 2 Years (ITI) + 1 Year (Apprenticeship)",
    studyIntensity: "Hands-on / Practical",
    tagline: "The fastest pathway to financial independence: Master skilled trades, government apprenticeship, and PSU technical jobs by age 18.",
    summary: "Industrial Training Institutes (ITIs) deliver craft and trade-based training certified by the National Council for Vocational Training (NCVT). Popular trades like Electrician, Fitter, Welder, Machinist, and COPA (Computer Operator) lead directly to National Apprenticeship Certificates (NAC) with paid stipends and strong eligibility for Indian Railways, Defense factories, and state electricity corporations.",
    mythBuster: "MISCONCEPTION: 'ITI is an inferior, dead-end course.' REALITY: ITI certificate holders enjoy specific statutory reservation quotas in Indian Railways (RRB Assistant Loco Pilot & Tech), DRDO, Ordnance Factories, and State Power Grids that degree holders cannot apply for. ITI graduates can also take lateral entry into 2nd year Polytechnic!",
    eligibility: {
      minimumCriteria: "Pass in Class 10 (or Class 8 for specific trades).",
      marksThreshold: "Merit-based admission in government ITIs.",
      reservationNotes: "Standard state reservation for SC, ST, BC, EWS, and Persons with Disabilities."
    },
    costRange: {
      governmentITI: "₹1,000 - ₹3,000 / year (Heavily subsidized; toolkits provided)",
      privateITI: "₹15,000 - ₹35,000 / year",
      apprenticeshipStipend: "Students EARN ₹7,500 - ₹12,000 / month under the National Apprenticeship Promotion Scheme (NAPS)."
    },
    stateSpecificNotes: {
      allIndia: "Regulated by the Directorate General of Training (DGT), Ministry of Skill Development and Entrepreneurship (MSDE). NCVT certificates valid globally.",
      andhraPradesh: "Administered by the Department of Employment and Training AP. Centralized online admissions at itiap.gov.in.",
      telangana: "Administered by the Department of Employment and Training Telangana. Centralized online admissions at ite.telangana.gov.in."
    },
    steps: [
      {
        stepNumber: 1,
        title: "Class 10 Completion & Trade Choice",
        focus: "Select high-demand trade: Electrician (2 yrs), Fitter (2 yrs), COPA (1 yr), Machinist (2 yrs), or Welder (1 yr).",
        milestone: "Allotment into a certified Govt or accredited private ITI."
      },
      {
        stepNumber: 2,
        title: "Trade Theory & 80% Practical Workshop",
        focus: "Wiring, transformer maintenance, precision lathe machining, TIG/MIG welding, or computerized data processing.",
        milestone: "Passing the All India Trade Test (AITT) and receiving NTS (National Trade Certificate)."
      },
      {
        stepNumber: 3,
        title: "National Apprenticeship (1 Year)",
        focus: "Undergo paid industrial apprenticeship under NAPS with Tata Motors, L&T, BHEL, or Indian Railways.",
        milestone: "Award of National Apprenticeship Certificate (NAC)."
      },
      {
        stepNumber: 4,
        title: "Employment or Lateral Progression",
        focus: "Option A: Recruitment as Technician in Railways / PSUs. Option B: Lateral entry into 2nd year Polytechnic Diploma.",
        milestone: "Stable income and continuous upward mobility."
      }
    ],
    entranceExams: ["aitt-ncvt", "rrb-alp-technician"],
    furtherStudy: ["Lateral Entry into 2nd Year Polytechnic Diploma", "Craft Instructor Training Scheme (CITS) to become ITI Trainer", "Advanced Diploma in IT / Automation"],
    careerRoles: [
      "Indian Railways Assistant Loco Pilot (ALP) / Railway Technician",
      "State Electricity Board Lineman / Substation Operator",
      "Defense / Ordnance Factory Machinist",
      "Industrial Plant Maintenance Technician",
      "Independent Electrical / HVAC Contractor & Entrepreneur"
    ],
    salaryEstimate: {
      entryMedian: "₹2.20 - ₹3.80 LPA (Plus overtime allowances; Railway Technicians start with standard 7th CPC Level-2 salary)",
      midCareer: "₹5.50 - ₹9.00 LPA",
      highestPackageReality: "Salary comes with exceptional job stability, pensions (in applicable Govt roles), and private contracting opportunities rather than corporate CTC packages.",
      dataQuality: "High (Ministry of Skill Development & Employment Published Reports)"
    },
    tradeOffs: {
      pros: [
        "Earliest financial independence: Earning by age 18-19 with zero educational debt.",
        "Dedicated reservation vacancies in massive public sector employers (Railways, Defense).",
        "Clear ladder: Can move from ITI to Diploma to B.Tech over time."
      ],
      cons: [
        "Involves physical workshop labour and safety diligence.",
        "Initial pay scale is lower compared to white-collar corporate desk jobs.",
        "Career ceiling can be reached without further upgrading to diploma/degree."
      ]
    },
    lastVerified: "October 2026",
    officialSource: "DGT (dgt.gov.in), MSDE (skillindia.gov.in)"
  },

  {
    id: "p10-commerce-mec-cec",
    stage: "10th",
    title: "Class 10 → Intermediate Commerce (MEC / CEC)",
    category: "Commerce, Finance & Business",
    streamName: "MEC (Maths, Economics, Commerce) or CEC (Civics, Economics, Commerce)",
    duration: "2 Years (Inter) + 3 to 5 Years (Degree / CA)",
    studyIntensity: "Moderate to High",
    tagline: "The engine of business, corporate finance, chartered accountancy, stock markets, and entrepreneurship.",
    summary: "Intermediate Commerce prepares students for the multi-trillion dollar financial economy. Students opting for MEC (with Mathematics) gain a supreme advantage for Chartered Accountancy (CA), Data Analytics, Actuarial Science, and IIM 5-year integrated management programs (IPMAT). CEC offers a balanced focus on business, public systems, and corporate law.",
    mythBuster: "MISCONCEPTION: 'Commerce is only for students who cannot handle science.' REALITY: Top Commerce graduates who clear CA, CFA, or IIM IPM programs often earn higher starting salaries than average engineering graduates, with unparalleled opportunities in investment banking, audit, and tax consulting.",
    eligibility: {
      minimumCriteria: "Pass in Class 10 with English and Social Sciences.",
      marksThreshold: "Minimum 45% - 55% depending on college reputation.",
      reservationNotes: "Standard state quotas applicable in all government and aided degree colleges."
    },
    costRange: {
      governmentJuniorCollege: "₹1,200 - ₹4,000 / year",
      privateJuniorCollege: "₹35,000 - ₹1,20,000 / year (Higher with CA-Foundation coaching)",
      bcomDegreeGovt: "₹5,000 - ₹20,000 / year",
      caRouteTotalCost: "₹1,50,000 - ₹3,00,000 over 4-5 years (Very affordable compared to private B.Tech/MBBS; includes ICAI registration & coaching)"
    },
    stateSpecificNotes: {
      allIndia: "ICAI CA Foundation, ICSI CS, and CMA are uniform national credentials recognized worldwide.",
      andhraPradesh: "Administered by BIEAP. Undergraduate admissions via OAMDC (Online Admissions Module for Degree Colleges).",
      telangana: "Administered by TSBIE. Undergraduate degree admissions through DOST (Degree Online Services, Telangana)."
    },
    steps: [
      {
        stepNumber: 1,
        title: "Intermediate MEC / CEC (Classes 11 & 12)",
        focus: "Master Double Entry Bookkeeping, Accountancy, Micro/Macro Economics, Business Studies, and Commercial Arithmetic.",
        milestone: "High percentage in Board exams; register for ICAI CA Foundation exam."
      },
      {
        stepNumber: 2,
        title: "Professional Certification or Degree Entrance",
        focus: "Appear for CA Foundation, CMA Foundation, or university entrance exams like CUET-UG, IPMAT (IIMs), and NMIMS NPAT.",
        milestone: "Clearing CA Foundation on 1st attempt or securing admission in top commerce colleges."
      },
      {
        stepNumber: 3,
        title: "Articleship / Degree Phase",
        focus: "B.Com / BBA / BMS + 3 Years of mandatory CA Articleship training under a practicing Chartered Accountant firm with monthly stipend.",
        milestone: "Clearing CA Intermediate (Group 1 & 2) and executive internships."
      },
      {
        stepNumber: 4,
        title: "Chartered Accountant / Corporate Leader",
        focus: "Clear CA Final; register as Fellow Member of ICAI, or graduate with top campus placement.",
        milestone: "Induction into Big 4 accounting firms, multinational investment banks, or starting independent audit practice."
      }
    ],
    entranceExams: ["ca-foundation", "cma-foundation", "ipmat", "cuet-ug", "clat"],
    furtherStudy: ["CA Final / CFA (USA) / ACCA (UK)", "MBA in Finance via CAT / GMAT", "M.Com / M.Sc Finance", "Corporate Law (LLB)"],
    careerRoles: [
      "Chartered Accountant (Auditor / Tax Consultant)",
      "Investment Banking Analyst / Equity Research Associate",
      "Financial Controller / Chief Financial Officer (CFO)",
      "Company Secretary / Corporate Governance Officer (CS)",
      "Management Consultant / Business Strategist",
      "FinTech Product Specialist / Risk Underwriter"
    ],
    salaryEstimate: {
      entryMedian: "CA Freshers: ₹8.50 - ₹12.50 LPA | General B.Com/BBA: ₹3.50 - ₹5.50 LPA | IIM IPM: ₹15.00 - ₹24.00 LPA",
      midCareer: "₹18.00 - ₹35.00+ LPA",
      highestPackageReality: "While standard B.Com freshers start moderately, qualified CAs enjoy high campus placement averages (ICAI 2024 placement median ₹9.5 LPA, with domestic offers reaching ₹24 LPA).",
      dataQuality: "High (ICAI Official Placement Committee Reports & NIRF Commerce Data)"
    },
    tradeOffs: {
      pros: [
        "Unbeatable return on investment: CA qualification costs under ₹3 Lakhs total with world-class corporate value.",
        "Paid articleship stipend while studying, instilling corporate maturity by age 21.",
        "High flexibility to launch independent consultancy practice or join corporate executive leadership."
      ],
      cons: [
        "CA exams have historically low pass percentages (15% - 25%), requiring extraordinary self-discipline.",
        "Requires keen attention to numbers, changing statutory tax laws, and compliance standards.",
        "Without professional certifications (CA/CS/CFA/MBA), general B.Com starting salaries can be modest."
      ]
    },
    lastVerified: "October 2026",
    officialSource: "Institute of Chartered Accountants of India (icai.org), DOST Telangana, OAMDC AP"
  },

  {
    id: "p10-humanities-hec",
    stage: "10th",
    title: "Class 10 → Intermediate Humanities & Arts (HEC / Social Sciences)",
    category: "Humanities, Law & Public Policy",
    streamName: "HEC (History, Economics, Civics) / Psychology / Sociology / Political Science",
    duration: "2 Years (Inter) + 3 to 5 Years (Degree / Integrated Law)",
    studyIntensity: "Engaged & Analytical",
    tagline: "The bedrock for Civil Services (UPSC), Judiciary & Corporate Law, Public Policy, Journalism, and Creative Design.",
    summary: "Intermediate Humanities equips students with critical thinking, constitutional literacy, socio-economic analysis, and articulate communication. Far from being an outdated stream, Arts is the strongest springboard for cracking the Civil Services Examination (IAS/IPS/IFS), gaining entry into prestigious National Law Universities (NLUs via CLAT), and pursuing global careers in International Relations, Psychology, and Media.",
    mythBuster: "MISCONCEPTION: 'Arts has no jobs and is only for weak students.' REALITY: Graduates from top law universities (like NALSAR Hyderabad) secure corporate law firm jobs with starting salaries of ₹14 - ₹20 LPA. Furthermore, over 50% of successful UPSC Civil Services rank-holders come from humanities backgrounds.",
    eligibility: {
      minimumCriteria: "Pass in Class 10 with English and Social Studies.",
      marksThreshold: "Minimum 45% aggregate.",
      reservationNotes: "Standard state quotas applicable in all state degree colleges and universities."
    },
    costRange: {
      governmentJuniorCollege: "₹1,000 - ₹3,500 / year",
      privateJuniorCollege: "₹30,000 - ₹90,000 / year",
      baGovtUniversity: "₹4,000 - ₹15,000 / year",
      nluLaw5Years: "₹2,20,000 - ₹3,50,000 / year (Subsidized by national scholarships for eligible students)"
    },
    stateSpecificNotes: {
      allIndia: "CLAT, AILET, CUET-UG, NID-DAT, NIFT are premier national entrance routes for 5-Year Law, Humanities, and Design.",
      andhraPradesh: "Administered by BIEAP. State Law entrance: AP LAWCET for 5-Year integrated LL.B. Degree admissions through OAMDC portal.",
      telangana: "Administered by TSBIE. State Law entrance: TS LAWCET for 5-Year integrated LL.B. Degree admissions through TS DOST."
    },
    steps: [
      {
        stepNumber: 1,
        title: "Intermediate HEC / Arts (Classes 11 & 12)",
        focus: "Deepen understanding of Modern World & Indian History, Constitutional Governance, Microeconomics, and Sociology / Psychology.",
        milestone: "Develop reading habits (The Hindu / Indian Express editorials); prepare for CLAT / CUET-UG."
      },
      {
        stepNumber: 2,
        title: "Competitive Entrance or Degree Admission",
        focus: "Appear for CLAT (for top NLUs like NALSAR), CUET-UG (for Central Universities like DU, JNU, HCU), or NID/NIFT (for Design).",
        milestone: "Admission into a leading 5-Year Integrated BA-LLB, B.Des, or BA (Hons) program."
      },
      {
        stepNumber: 3,
        title: "Undergraduate Development & Research",
        focus: "Moot court competitions, legal internships, policy paper publishing, social impact fieldwork, and Civil Services syllabus mapping.",
        milestone: "Building a stellar portfolio, editorial internships, or preparing for UPSC Civil Services / State PSCs."
      },
      {
        stepNumber: 4,
        title: "Civil Service, Legal Practice, or Media Career",
        focus: "Attempt UPSC Civil Services / State Group-1 exams, join corporate legal teams, or enroll in Master's / Public Policy at institutes like TISS.",
        milestone: "Induction into civil administration, judiciary, corporate law firms, or investigative journalism."
      }
    ],
    entranceExams: ["clat", "ap-lawcet", "ts-lawcet", "cuet-ug", "nid-dat", "nift"],
    furtherStudy: ["LL.M (Master of Laws)", "Master in Public Policy (MPP)", "M.A. in Psychology / International Relations", "Ph.D. / Think-tank Research"],
    careerRoles: [
      "Civil Servant (IAS, IPS, IFS, IRS via UPSC)",
      "Corporate Lawyer / Legal Advisor (via CLAT/NLU)",
      "Judicial Magistrate / Public Prosecutor",
      "Journalist / Foreign Affairs Correspondent",
      "UX / Industrial Product Designer (via NID/UCEED)",
      "Clinical / Organizational Psychologist",
      "Public Policy Analyst in Think-Tanks & UN Bodies"
    ],
    salaryEstimate: {
      entryMedian: "Corporate Law (NLUs): ₹10.00 - ₹16.00 LPA | Civil Services (Govt Pay Level 10): ₹8.50 LPA + Perks | Media / General BA: ₹3.60 - ₹5.50 LPA",
      midCareer: "₹15.00 - ₹30.00+ LPA",
      highestPackageReality: "Corporate law firms offer among the highest starting packages in India for non-tech roles, while civil services provide statutory executive power, housing, and lifelong societal impact.",
      dataQuality: "High (Consortium of NLUs Placement Data & Union Public Service Commission Gazettes)"
    },
    tradeOffs: {
      pros: [
        "Unbeatable preparation head-start for Civil Services (UPSC CSE) and State Group-1 officers.",
        "NLU law routes offer corporate compensation rivaling top-tier software engineers.",
        "Cultivates deep analytical, writing, and leadership abilities that machines cannot easily automate."
      ],
      cons: [
        "Civil Services has an intense selection funnel (under 0.2% final selection rate).",
        "General non-honours BA degrees require supplementary skill certifications to land lucrative corporate jobs.",
        "Demands extensive reading, essay formulation, and verbal presentation skills."
      ]
    },
    lastVerified: "October 2026",
    officialSource: "Consortium of NLUs (consortiumofnlus.ac.in), UPSC (upsc.gov.in), APSCHE, TSCHE"
  },

  // ==========================================
  // PATHWAYS AFTER CLASS 12
  // ==========================================
  {
    id: "p12-pcm-engineering",
    stage: "12th",
    title: "Class 12 (PCM) → 4-Year B.Tech / B.E. Engineering",
    category: "Engineering & Applied Technology",
    streamName: "PCM / MPC Completed",
    duration: "4 Years",
    studyIntensity: "High",
    tagline: "The premier pathway to software engineering, core hardware, AI-ML, robotics, and technological entrepreneurship.",
    summary: "For students completing Class 12 with Physics, Chemistry, and Mathematics, the 4-year B.Tech / B.E. remains India's primary driver of high-growth technology careers. With evolving specializations in Computer Science, AI-ML, Data Science, Electronics & VLSI, Mechanical, and Sustainable Energy, this pathway offers extensive campus placement opportunities across multinational tech enterprises, startups, and public sector undertakings.",
    mythBuster: "MISCONCEPTION: 'Only IITs and NITs offer great careers.' REALITY: While premier institutes provide top-bracket opportunities, state university colleges (AU, JNTUH, JNTUK, OU) and accredited private colleges provide strong campus placements with 75%+ placement records for diligent students.",
    eligibility: {
      minimumCriteria: "10+2 with Physics, Mathematics, and Chemistry / Computer Science with minimum 50% aggregate (75% for JEE Main IIT/NIT admission).",
      marksThreshold: "Passing mark in state board or national board.",
      reservationNotes: "85% local area reservation in AP & TS state engineering colleges; national 15% All-India quota."
    },
    costRange: {
      governmentUniversityCollege: "₹35,000 - ₹65,000 / year (Covered under JVD in AP / ePASS in TS)",
      privateUnaidedCollege: "₹75,000 - ₹1,80,000 / year (Convenor Category A)",
      privateManagementQuota: "₹2,50,000 - ₹5,00,000 / year (Category B / NRI seats)",
      iitNitPremier: "₹1,80,000 - ₹2,50,000 / year (100% fee waiver for SC/ST and low-income families)"
    },
    stateSpecificNotes: {
      allIndia: "Admission to 23 IITs, 32 NITs, and IIITs via JEE Main and JEE Advanced counseling through JoSAA / CSAB.",
      andhraPradesh: "State engineering admissions through AP EAPCET. Counseling conducted by APSCHE. Full fee reimbursement under Jagananna Vidya Deevena for eligible students.",
      telangana: "State engineering admissions through TG EAPCET. Counseling by TSCHE. Full/partial tuition reimbursement through Telangana ePASS."
    },
    steps: [
      {
        stepNumber: 1,
        title: "Appear for JEE & State EAPCET",
        focus: "Target JEE Main Session 1 (Jan) & Session 2 (Apr), followed by AP/TG EAPCET in May.",
        milestone: "Securing competitive state rank or 90+ percentile in JEE Main."
      },
      {
        stepNumber: 2,
        title: "Branch & College Web Counseling",
        focus: "Exercise web options based on authentic NIRF placement data, faculty credentials, and branch interest (CSE, ECE, EEE, Mech, Civil).",
        milestone: "College seat allotment and document verification."
      },
      {
        stepNumber: 3,
        title: "B.Tech Curriculum & Skill Mastery (Years 1 to 3)",
        focus: "Data structures, algorithms, circuit design, full-stack development, competitive coding, hackathons, and industrial internships.",
        milestone: "Building a live GitHub portfolio, winning hackathons, maintaining 8.0+ CGPA."
      },
      {
        stepNumber: 4,
        title: "Final Year Placements & GATE / Higher Studies",
        focus: "Participate in on-campus recruitment (Day-1 service firms, product giants, core engineering companies) or appear for GATE for PSUs / M.Tech.",
        milestone: "Securing full-time engineering offer letter."
      }
    ],
    entranceExams: ["jee-main", "jee-adv", "ap-eapcet", "tg-eapcet", "bitsat"],
    furtherStudy: ["M.Tech via GATE", "M.S. in USA/Europe/Singapore", "MBA via CAT/GMAT", "Direct Ph.D. programs"],
    careerRoles: [
      "Software Development Engineer (SDE-1)",
      "Cloud Architect / DevOps Engineer",
      "VLSI & Embedded Systems Design Engineer",
      "Artificial Intelligence & Machine Learning Specialist",
      "Executive Engineer in PSUs (IOCL, BHEL, ONGC, NTPC via GATE)",
      "Data Analyst / BI Consultant"
    ],
    salaryEstimate: {
      entryMedian: "Tier-1 (IITs/NITs/BITS): ₹12.00 - ₹22.00 LPA | Tier-2/3 (State Univ & Accredited Colleges): ₹4.20 - ₹7.50 LPA",
      midCareer: "₹14.00 - ₹30.00+ LPA",
      highestPackageReality: "Don't fall for flashy hoardings: The ₹1 Crore international package goes to 0.01% of students globally. Look at the NIRF reported median salary: For most good state colleges, the true median is ₹4.5 to ₹6.5 LPA.",
      dataQuality: "Very High (Audited NIRF 2024 Institutional Placement Reports)"
    },
    tradeOffs: {
      pros: [
        "Unrivalled campus placement ecosystem with hundreds of hiring employers.",
        "High international mobility and remote global working potential.",
        "Merit-driven career acceleration: Skills matter more than family connections."
      ],
      cons: [
        "Crowded job market: Over 1.5 million engineering graduates pass out every year in India.",
        "Tech skills become obsolete quickly; continuous upskilling is compulsory.",
        "Mass-recruiter packages (₹3.5 - ₹4.2 LPA) have remained relatively flat over recent years."
      ]
    },
    lastVerified: "October 2026",
    officialSource: "AICTE (aicte-india.org), JoSAA (josaa.nic.in), APSCHE, TSCHE"
  },

  {
    id: "p12-pcb-allied-pharmacy",
    stage: "12th",
    title: "Class 12 (PCB) → Pharmacy, Paramedical & Allied Healthcare",
    category: "Allied Health & Pharmacy",
    streamName: "PCB / BiPC Completed",
    duration: "4 Years (B.Pharm) / 6 Years (Pharm.D) / 3-4 Years (Paramedical)",
    studyIntensity: "Moderate to High",
    tagline: "High-demand healthcare professions without the 5.5-year MBBS grind: Clinical pharmacy, physiotherapy, medical radiology, and drug discovery.",
    summary: "While millions compete for scarce MBBS seats, healthcare delivery depends on Pharmacists, Physiotherapists, Medical Technologists, and Diagnostic Specialists. This pathway covers B.Pharmacy, Pharm.D (Doctor of Pharmacy), BPT (Physiotherapy), B.Sc Nursing, and B.Sc Medical Lab Technology — all accessible through State EAPCET or direct university merit with immediate employability.",
    mythBuster: "MISCONCEPTION: 'Pharmacy is just working in a medical shop.' REALITY: Pharmacists and Pharm.D graduates work as Clinical Research Specialists, Pharmacovigilance Associates, Medical Writers, and Drug Formulation Scientists in top pharmaceutical multinational corporations (Novartis, Dr. Reddy's, Pfizer).",
    eligibility: {
      minimumCriteria: "10+2 with Physics, Chemistry, and Biology (or Mathematics for B.Pharm) with minimum 50% marks.",
      marksThreshold: "State EAPCET qualification or university entrance score.",
      reservationNotes: "Standard state quotas applicable in all government and private pharmacy/paramedical colleges."
    },
    costRange: {
      governmentCollege: "₹15,000 - ₹45,000 / year (Covered under JVD in AP / ePASS in TS)",
      privatePharmacyCollege: "₹55,000 - ₹1,40,000 / year",
      pharmDPrivateCollege: "₹90,000 - ₹2,20,000 / year"
    },
    stateSpecificNotes: {
      allIndia: "Regulated by Pharmacy Council of India (PCI) and Indian Nursing Council (INC). GPAT for M.Pharm admissions.",
      andhraPradesh: "B.Pharm & Pharm.D admissions via AP EAPCET (BiPC / MPC stream). Paramedical courses through Dr. YSR University of Health Sciences (YSRUHS).",
      telangana: "B.Pharm & Pharm.D admissions via TG EAPCET. Allied health degrees administered through Kaloji Narayana Rao University of Health Sciences (KNRUHS)."
    },
    steps: [
      {
        stepNumber: 1,
        title: "Appear for State EAPCET (Agri & Pharmacy)",
        focus: "Take the state exam covering Class 11-12 Botany, Zoology, Physics, and Chemistry.",
        milestone: "Securing a seat in PCI-approved Pharmacy / Allied Health college."
      },
      {
        stepNumber: 2,
        title: "Degree Coursework & Clinical Labs",
        focus: "Pharmaceutical Chemistry, Pharmacology, Hospital Ward Rounds (Pharm.D), Anatomy, Physiology, and Pathology.",
        milestone: "Clinical hospital internship and laboratory formulation projects."
      },
      {
        stepNumber: 3,
        title: "Registration & State Council Licensure",
        focus: "Register as Registered Pharmacist / Licensed Practitioner with State Pharmacy / Nursing Council.",
        milestone: "Receiving official statutory practice license."
      },
      {
        stepNumber: 4,
        title: "Pharma MNC / Hospital Clinical Career",
        focus: "Join Clinical Research Organizations (CROs), hospital pharmacovigilance, QA/QC, or prepare for GPAT for M.Pharm.",
        milestone: "Senior specialist or research formulation scientist."
      }
    ],
    entranceExams: ["ap-eapcet-agri", "tg-eapcet-agri", "neet-ug", "gpat"],
    furtherStudy: ["M.Pharm via GPAT / NIPER JEE", "Ph.D. in Pharmaceutical Sciences", "MBA in Pharma Management", "Master of Public Health (MPH)"],
    careerRoles: [
      "Clinical Pharmacist / Hospital Formulary Consultant",
      "Pharmacovigilance & Drug Safety Scientist",
      "Physiotherapist in Sports & Orthopedic Clinics",
      "Formulation R&D Chemist in Pharma MNCs",
      "Government Drug Inspector (via State PSC exams)",
      "Regulatory Affairs Specialist"
    ],
    salaryEstimate: {
      entryMedian: "₹3.60 - ₹6.20 LPA (Clinical Research & Pharmacovigilance roles start at ₹4-₹5 LPA)",
      midCareer: "₹9.00 - ₹18.00 LPA",
      highestPackageReality: "Salary grows steadily in the booming pharmaceutical and life-sciences corridor of Hyderabad and Visakhapatnam. Overseas opportunities in USA, UK, and Gulf are exceptionally strong.",
      dataQuality: "High (Pharmacy Council of India & NIPER Institutional Data)"
    },
    tradeOffs: {
      pros: [
        "Noble healthcare role with balanced work hours and no emergency night-call pressures.",
        "Hyderabad & AP are major global pharma hubs offering massive local employment.",
        "Pharm.D grants doctor title ('Dr.') with direct clinical patient advisory status."
      ],
      cons: [
        "Initial starting salaries for retail pharmacy are modest compared to software jobs.",
        "Requires deep memorization of drug interactions, chemical compounds, and regulations.",
        "State Drug Inspector government jobs have infrequent notification cycles."
      ]
    },
    lastVerified: "October 2026",
    officialSource: "Pharmacy Council of India (pci.nic.in), APSCHE, TSCHE, NIPER"
  },

  {
    id: "p12-pcb-agriculture-allied",
    stage: "12th",
    title: "Class 12 (PCB/PCMB) → B.Sc (Hons) Agriculture & Allied Sciences",
    category: "Agricultural & Environmental Sciences",
    streamName: "PCB / BiPC / PCMB Completed",
    duration: "4 Years",
    studyIntensity: "Practical & Field-Oriented",
    tagline: "Powering India's food security: Agribusiness, seed genetics, soil biotechnology, and direct state agricultural officer gazetted posts.",
    summary: "B.Sc (Hons) Agriculture is one of India's most respected professional degrees. Combining agronomy, genetics, plant pathology, agricultural economics, and farm machinery, it prepares graduates for coveted Agriculture Extension Officer (AEO) posts in state governments, nationalized bank Agriculture Field Officer (AFO) positions, and high-growth agri-tech startups.",
    mythBuster: "MISCONCEPTION: 'Agriculture degree means traditional farming in fields.' REALITY: Agriculture graduates work in high-tech corporate seed research, drone-based precision agriculture, international commodity export firms, and banking (NABARD, IBPS AFO) with gazetted-scale government pay.",
    eligibility: {
      minimumCriteria: "10+2 with Physics, Chemistry, Biology / Agriculture with minimum 50% aggregate.",
      marksThreshold: "Competitive rank in State EAPCET or ICAR-CUET.",
      reservationNotes: "Special Farmer's Quota (Non-Municipal area study) reservations available in AP (ANGRAU) and TS (PJTSAU)."
    },
    costRange: {
      governmentAgriUniversity: "₹25,000 - ₹55,000 / year (Covered under JVD / ePASS)",
      privateAgriCollege: "₹85,000 - ₹1,80,000 / year (Ensure ICAR accreditation before enrolling!)"
    },
    stateSpecificNotes: {
      allIndia: "ICAR (Indian Council of Agricultural Research) conducts All India entrance through CUET-UG for 15% national seats.",
      andhraPradesh: "Administered by Acharya N.G. Ranga Agricultural University (ANGRAU), Dr. YSR Horticultural University, and SV Veterinary University. Entrance: AP EAPCET.",
      telangana: "Administered by Professor Jayashankar Telangana State Agricultural University (PJTSAU). Entrance: TG EAPCET."
    },
    steps: [
      {
        stepNumber: 1,
        title: "Take AP/TG EAPCET (Agriculture Stream)",
        focus: "Appear for state EAPCET exam and apply for Farmer's Quota certificate if eligible.",
        milestone: "Securing an allotment in premier state universities (ANGRAU / PJTSAU)."
      },
      {
        stepNumber: 2,
        title: "Agri-Sciences Core Education",
        focus: "Crop Production, Genetics, Plant Breeding, Soil Chemistry, Entomology, Plant Pathology, and Farm Management.",
        milestone: "Hands-on rural living: Mandatory Rural Agricultural Work Experience (RAWE) semester."
      },
      {
        stepNumber: 3,
        title: "Experiential Learning & Agribusiness",
        focus: "Hands-on commercial seed production, tissue culture, hydroponics, or agri-drone operations.",
        milestone: "Completing experiential learning module with commercial viability."
      },
      {
        stepNumber: 4,
        title: "Government Exams or Agri-Corporate Careers",
        focus: "Appear for IBPS AFO (Bank Specialist Officer), State PSC Agriculture Officer, or campus interviews with ITC, Bayer, Syngenta.",
        milestone: "Appointment as Bank Agricultural Officer or Seed Tech Specialist."
      }
    ],
    entranceExams: ["ap-eapcet-agri", "tg-eapcet-agri", "icar-cuet"],
    furtherStudy: ["M.Sc Agriculture / Agronomy via ICAR JRF", "MBA in Agribusiness Management (IIM Ahmedabad / MANAGE Hyderabad)", "Ph.D. in Crop Genetics"],
    careerRoles: [
      "Bank Agriculture Field Officer (IBPS SO - Scale 1)",
      "State Agriculture Extension Officer (AEO) / Mandal Agri Officer",
      "Seed Production / Breeding Scientist in Agri-MNCs",
      "Precision Agriculture & Drone Specialist",
      "Commodity Trading & Supply Chain Executive",
      "NABARD Assistant Manager (Grade A Officer)"
    ],
    salaryEstimate: {
      entryMedian: "IBPS Bank AFO: ₹8.50 - ₹10.50 LPA | Corporate Agri-MNCs: ₹4.50 - ₹7.20 LPA | State Govt AEO: ₹5.50 - ₹7.50 LPA",
      midCareer: "₹12.00 - ₹22.00 LPA",
      highestPackageReality: "Agricultural careers offer extraordinary job security via banking and public service examinations with clear promotional ladders to general manager levels.",
      dataQuality: "High (ICAR & IBPS Public Sector Exam Gazettes)"
    },
    tradeOffs: {
      pros: [
        "Dedicated banking reservation: 3,000+ IBPS AFO specialist officer posts exclusive to agri graduates.",
        "High demand in booming agri-tech and sustainable environmental sectors.",
        "Healthy blend of laboratory science and outdoor field engagement."
      ],
      cons: [
        "Crucial caution: Private colleges without ICAR accreditation are NOT eligible for many government jobs and ICAR PG seats.",
        "Field postings in rural or semi-urban agricultural belts are common initially.",
        "Coursework is credit-heavy with extensive practical field record work."
      ]
    },
    lastVerified: "October 2026",
    officialSource: "ICAR (icar.org.in), ANGRAU (angrau.ac.in), PJTSAU (pjtsau.edu.in)"
  },

  {
    id: "p12-commerce-ca-management",
    stage: "12th",
    title: "Class 12 (Commerce/Any) → CA, CMA, CS & BBA/B.Com",
    category: "Finance, Audit & Corporate Management",
    streamName: "Commerce / MEC / CEC / Science with Maths",
    duration: "3 Years (Degree) + 3 to 4 Years (Professional Qualification)",
    studyIntensity: "High",
    tagline: "The pinnacle of corporate finance, tax advisory, forensic audit, statutory governance, and corporate management.",
    summary: "For students completing Class 12, the professional trio of Chartered Accountancy (ICAI), Cost & Management Accountancy (ICMAI), and Company Secretary (ICSI) represents the highest corporate credibility. Alternatively, 3-year B.Com / BBA or 5-year integrated management programs (IPMAT) at IIMs launch students directly into tier-1 corporate consulting and investment banking.",
    mythBuster: "MISCONCEPTION: 'Only Commerce students can do CA.' REALITY: Any Class 12 student (even MPC or BiPC science stream) can register for CA Foundation. In fact, science students with strong analytical skills often do exceptionally well in CA quantitative aptitude.",
    eligibility: {
      minimumCriteria: "10+2 in any stream from a recognized board.",
      marksThreshold: "Minimum 50% aggregate.",
      reservationNotes: "ICAI is a statutory professional body; admissions are purely exam-qualification based."
    },
    costRange: {
      caTotalCourseFees: "₹1,20,000 - ₹2,50,000 (Over full 4-5 year lifecycle; very low compared to MBA/B.Tech)",
      articleshipEarnings: "Students receive monthly stipend of ₹4,000 - ₹15,000 during 2 years of articleship.",
      bbaBcomGovt: "₹8,000 - ₹25,000 / year",
      iimIpm5Years: "₹25,00,000 - ₹35,00,000 total (High-end, but 100% bank educational loan accessible)"
    },
    stateSpecificNotes: {
      allIndia: "ICAI, ICMAI, and ICSI are recognized by Parliament of India. Qualifications valid across GCC, UK, and worldwide.",
      andhraPradesh: "Degree college admissions via OAMDC portal. Major CA examination centers in Vijayawada, Visakhapatnam, Guntur, Tirupati.",
      telangana: "Degree college admissions via DOST portal. Major CA examination centers across Hyderabad, Warangal, Karimnagar."
    },
    steps: [
      {
        stepNumber: 1,
        title: "Pass CA Foundation Examination",
        focus: "Appear for CA Foundation (Accounting, Business Laws, Quantitative Aptitude, Business Economics).",
        milestone: "Securing 50% aggregate with 40% minimum in each paper."
      },
      {
        stepNumber: 2,
        title: "CA Intermediate & IT Training",
        focus: "Advanced Accounting, Corporate Laws, Taxation, Costing, Auditing, and Financial Management.",
        milestone: "Clearing both Intermediate groups; completing ICITSS soft skill & IT course."
      },
      {
        stepNumber: 3,
        title: "Mandatory Practical Articleship (2 Years)",
        focus: "Hands-on statutory audits, GST filings, corporate tax returns, and client management under a Chartered Accountant firm.",
        milestone: "Real-world financial audit exposure and monthly stipend."
      },
      {
        stepNumber: 4,
        title: "CA Final & ICAI Campus Placements",
        focus: "Clear CA Final examination; participate in official ICAI campus recruitment.",
        milestone: "Receiving the FCA/ACA Chartered Accountant designation and corporate appointment."
      }
    ],
    entranceExams: ["ca-foundation", "cma-foundation", "ipmat", "cuet-ug"],
    furtherStudy: ["CFA (Chartered Financial Analyst)", "Executive MBA", "DISA (Information Systems Audit)", "Insolvency Professional Certification"],
    careerRoles: [
      "Chartered Accountant / Statutory Auditor",
      "Tax Consultant & Transfer Pricing Specialist",
      "Financial Controller / Corporate Treasurer",
      "Investment Banker / Equity Analyst",
      "Forensic Accountant & Fraud Investigator",
      "Independent Audit & Tax Practitioner"
    ],
    salaryEstimate: {
      entryMedian: "CA Freshers: ₹9.00 - ₹13.50 LPA | IIM IPM Freshers: ₹16.00 - ₹26.00 LPA | General B.Com/BBA: ₹3.60 - ₹5.40 LPA",
      midCareer: "₹20.00 - ₹45.00+ LPA",
      highestPackageReality: "ICAI 2024 campus placement records average compensation of ~₹10.5 LPA, with international Big-4 postings reaching ₹30 LPA+.",
      dataQuality: "Very High (ICAI Official Annual Placement Reports)"
    },
    tradeOffs: {
      pros: [
        "Extremely high return on investment (qualification costs less than 1 semester of private engineering).",
        "Statutory monopoly: Only Chartered Accountants can audit and sign balance sheets in India.",
        "Complete career independence: You can start your own firm and never depend on a corporate employer."
      ],
      cons: [
        "Pass percentage requires sustained, intense self-discipline over 4-5 years.",
        "Articleship involves long working hours during statutory tax filing seasons (July-October).",
        "Balancing regular college graduation with CA studies requires excellent time management."
      ]
    },
    lastVerified: "October 2026",
    officialSource: "ICAI (icai.org), ICMAI (icmai.in), ICSI (icsi.edu)"
  },

  {
    id: "p12-law-5yr-integrated",
    stage: "12th",
    title: "Class 12 (Any Stream) → 5-Year Integrated B.A./B.B.A. LL.B (Hons)",
    category: "Law & Judiciary",
    streamName: "Arts / Commerce / Science (Any Stream)",
    duration: "5 Years",
    studyIntensity: "High & Articulate",
    tagline: "The gateway to National Law Universities, corporate mergers & acquisitions, intellectual property, constitutional litigation, and the judiciary.",
    summary: "The 5-Year Integrated Law degree transformed Indian legal education. Open to students from Science, Commerce, and Humanities alike, admissions via CLAT (Common Law Admission Test) into National Law Universities (NLUs) place students directly into premier corporate law firms, international arbitration bodies, venture capital legal teams, and judicial magistrate examinations.",
    mythBuster: "MISCONCEPTION: 'Lawyers only argue in criminal district courts for years with little money.' REALITY: Corporate law graduates from top NLUs (like NALSAR Hyderabad or NLSIU Bengaluru) start in corporate law firms (Cyril Amarchand Mangaldas, Trilegal, Khaitan & Co) with initial salaries matching or exceeding top software engineers.",
    eligibility: {
      minimumCriteria: "10+2 in any stream with minimum 45% aggregate (40% for SC/ST).",
      marksThreshold: "Rank in CLAT (for NLUs) or State LAWCET (for state university law colleges).",
      reservationNotes: "Local domicile reservation in NALSAR (Hyderabad) and DSNLU (Visakhapatnam); national category quotas."
    },
    costRange: {
      governmentLawCollege: "₹15,000 - ₹35,000 / year (Covered under JVD / ePASS in AP & TS)",
      nationalLawUniversity: "₹2,40,000 - ₹3,60,000 / year (Subsidized by means-based scholarships & education loans)",
      privateLawCollege: "₹75,000 - ₹1,80,000 / year"
    },
    stateSpecificNotes: {
      allIndia: "CLAT covers 24 National Law Universities. AILET covers NLU Delhi.",
      andhraPradesh: "Damodaram Sanjivayya National Law University (DSNLU) Visakhapatnam. State entrance: AP LAWCET (5-year integrated LL.B).",
      telangana: "NALSAR University of Law, Hyderabad (Ranked among top 3 in India). State entrance: TS LAWCET (5-year integrated LL.B)."
    },
    steps: [
      {
        stepNumber: 1,
        title: "CLAT & State LAWCET Examination",
        focus: "Prepare for reading comprehension, legal reasoning, logical reasoning, and current affairs.",
        milestone: "Securing an all-India rank in CLAT (held in December) or State LAWCET (May)."
      },
      {
        stepNumber: 2,
        title: "5-Year Integrated Curriculum (BA LLB / BBA LLB)",
        focus: "Constitutional Law, Corporate Contracts, Cyber Law, International Trade, IPR, and Criminal Jurisprudence.",
        milestone: "National Moot Court Competitions and research paper publications."
      },
      {
        stepNumber: 3,
        title: "Law Firm & Judicial Internships",
        focus: "Mandatory annual internships with trial court advocates, High Court justices, corporate law firms, and human rights NGOs.",
        milestone: "Pre-placement offers (PPOs) from top corporate law firms during 4th/5th year."
      },
      {
        stepNumber: 4,
        title: "Bar Council Enrollment & Career Launch",
        focus: "Enroll with State Bar Council; clear All India Bar Examination (AIBE) for court practice, or join corporate firm.",
        milestone: "Receiving Bar Council Advocate license."
      }
    ],
    entranceExams: ["clat", "ap-lawcet", "ts-lawcet"],
    furtherStudy: ["LL.M (Master of Laws) in India or abroad (Harvard, Oxford, Cambridge)", "Judicial Services Examination (Civil Judge / Magistrate)", "UPSC Civil Services"],
    careerRoles: [
      "Corporate Associate in Top Law Firms (M&A, Banking, Capital Markets)",
      "Civil Judge / Judicial Magistrate (via State Judicial Exam)",
      "In-House Legal Counsel in MNCs & Tech Companies",
      "Litigation Advocate in High Court & Supreme Court",
      "Intellectual Property & Patent Attorney",
      "Public Prosecutor / Legal Advisor to Public Sector"
    ],
    salaryEstimate: {
      entryMedian: "Tier-1 NLU Corporate Law: ₹12.00 - ₹18.00 LPA | State University / Litigating Advocate: ₹3.60 - ₹6.00 LPA | Civil Judge: State Pay Scale Level 10 (~₹10 LPA)",
      midCareer: "₹22.00 - ₹50.00+ LPA (Corporate partners and senior advocates earn significantly higher)",
      highestPackageReality: "Corporate law packages are very real and verified by NLU placement committees, but trial court litigation requires 3-5 years of patience before practice flourishes.",
      dataQuality: "High (Consortium of NLUs Official Reports & Bar Council Data)"
    },
    tradeOffs: {
      pros: [
        "Unrivalled intellectual prestige, constitutional advocacy, and corporate compensation.",
        "Wide career agility: Corporate contracts, civil litigation, judicial office, or politics.",
        "Deep understanding of commercial regulations gives massive advantage in entrepreneurship."
      ],
      cons: [
        "Independent court litigation requires initial struggle and mentorship under a senior lawyer.",
        "Intensive reading workload: analyzing hundreds of case precedents and legal briefs.",
        "High tuition fees in premier NLUs (though covered by bank loans)."
      ]
    },
    lastVerified: "October 2026",
    officialSource: "Consortium of NLUs (consortiumofnlus.ac.in), Bar Council of India (barcouncilofindia.org)"
  },

  {
    id: "p12-design-architecture",
    stage: "12th",
    title: "Class 12 (Any/PCM) → Design & Architecture (B.Des / B.Arch)",
    category: "Design, Architecture & Creative Tech",
    streamName: "Design (Any Stream) | Architecture (PCM Required)",
    duration: "4 Years (B.Des) / 5 Years (B.Arch)",
    studyIntensity: "Creative & Project-Heavy",
    tagline: "Shaping physical and digital worlds: UI/UX design, industrial product innovation, sustainable architecture, and smart cities.",
    summary: "Design and Architecture blend artistic creativity with technological engineering. For Class 12 students with visual flair, B.Des (Bachelor of Design) opens booming careers in UI/UX Product Design, Gaming, Animation, and Fashion through premier institutes like NID and NIFT. B.Arch (Bachelor of Architecture) requires PCM and leads to licensed architectural practice.",
    mythBuster: "MISCONCEPTION: 'Design degrees are just drawing or hobby crafts.' REALITY: UI/UX Product Designers in digital tech firms are among the highest-paid professionals in Bengaluru and Hyderabad, shaping apps used by hundreds of millions of users daily.",
    eligibility: {
      minimumCriteria: "B.Des: 10+2 in ANY stream. B.Arch: 10+2 with Physics, Chemistry, and Mathematics (mandatory NATA or JEE Paper 2 score).",
      marksThreshold: "Minimum 50% marks in 10+2.",
      reservationNotes: "Standard national quotas at NID, NIFT, IIT-UCEED, and SPA."
    },
    costRange: {
      governmentColleges: "₹45,000 - ₹90,000 / year",
      premierInstitutesNIDNIFT: "₹1,80,000 - ₹2,80,000 / year",
      privateColleges: "₹1,50,000 - ₹3,50,000 / year"
    },
    stateSpecificNotes: {
      allIndia: "NID-DAT, NIFT, UCEED/CEED, and NATA are the national standards.",
      andhraPradesh: "SPA Vijayawada (School of Planning and Architecture - Institute of National Importance). NID Andhra Pradesh located in Amaravati.",
      telangana: "NIFT Hyderabad, Jawaharlal Nehru Architecture and Fine Arts University (JNAFAU) Hyderabad. State entrance via JNAFAU."
    },
    steps: [
      {
        stepNumber: 1,
        title: "National Design / Architecture Entrances",
        focus: "Appear for NID DAT, UCEED, NIFT, or NATA / JEE Main Paper 2 (Jan to April).",
        milestone: "Studio test / personal interview qualification."
      },
      {
        stepNumber: 2,
        title: "Foundation & Studio Studio Learning",
        focus: "Design thinking, typography, ergonomics, 3D modeling, human-computer interaction (HCI), and architectural structural design.",
        milestone: "Developing hands-on design studio portfolios."
      },
      {
        stepNumber: 3,
        title: "Industry Internships & Graduation Project",
        focus: "Work with digital product tech companies, architectural design studios, or consumer hardware brands.",
        milestone: "Exhibiting graduation design show and UX prototype testing."
      },
      {
        stepNumber: 4,
        title: "Product Designer / Licensed Architect",
        focus: "Council of Architecture (COA) registration for architects; tech recruitment for digital UI/UX designers.",
        milestone: "Designing consumer products, apps, or urban buildings."
      }
    ],
    entranceExams: ["nata", "jee-main-paper2", "nid-dat", "nift", "uceed"],
    furtherStudy: ["M.Des via CEED", "M.Arch in Urban Design / Landscape", "M.S. in Human-Computer Interaction (HCI) abroad"],
    careerRoles: [
      "Digital UI/UX Product Designer",
      "Licensed Architect / Sustainable Building Consultant",
      "Industrial & Transportation Designer",
      "Game Designer / 3D Visual Effects Artist",
      "Creative Director / Brand Identity Strategist",
      "Urban Planner (via SPA / CEPT)"
    ],
    salaryEstimate: {
      entryMedian: "UI/UX Designers (Top Tier): ₹7.50 - ₹14.00 LPA | B.Arch Junior Architect: ₹3.60 - ₹5.50 LPA | Industrial Designer: ₹6.00 - ₹10.00 LPA",
      midCareer: "₹16.00 - ₹32.00+ LPA",
      highestPackageReality: "Digital product and UX designers command high corporate tech salaries, whereas traditional architecture has a slower initial trajectory that expands as you establish your own firm.",
      dataQuality: "High (NID, NIFT, and Council of Architecture Annual Gazettes)"
    },
    tradeOffs: {
      pros: [
        "Extraordinarily fulfilling creative expression combined with digital economy high salaries.",
        "Work is portfolio-driven: A stellar visual portfolio beats paper credentials every time.",
        "High flexibility to freelance, consult internationally, or build creative agencies."
      ],
      cons: [
        "Architecture (B.Arch) is a 5-year rigorous course with heavy studio model-making costs.",
        "Junior architects face modest starting stipends in traditional architecture studios.",
        "Demands continuous critique tolerance and iteration under client deadlines."
      ]
    },
    lastVerified: "October 2026",
    officialSource: "Council of Architecture (coa.gov.in), NID (nid.edu), NIFT (nift.ac.in)"
  },

  {
    id: "p12-defense-nda-cadet",
    stage: "12th",
    title: "Class 12 (PCM/Any) → National Defence Academy (NDA) & Naval Academy",
    category: "Defense & Armed Forces",
    streamName: "12th Completed (PCM for Navy/Air Force; Any Stream for Army)",
    duration: "3 Years (NDA Khadakwasla) + 1 Year (IMA/AFA/INA)",
    studyIntensity: "Very High (Physical & Academic)",
    tagline: "Serve the nation with the highest honour: Become a Commissioned Officer in the Indian Army, Navy, or Air Force right after Class 12.",
    summary: "The National Defence Academy (NDA) at Khadakwasla, Pune, is India's premier joint services training academy. Open to students immediately upon completing Class 12, cadets undergo world-class physical training and earn a prestigious B.A., B.Sc., or B.Tech degree from Jawaharlal Nehru University (JNU) with all tuition, boarding, uniform, and books 100% funded by the Government of India, culminating in a permanent commission as a Lieutenant, Sub-Lieutenant, or Flying Officer.",
    mythBuster: "MISCONCEPTION: 'NDA is only about physical fitness.' REALITY: The UPSC NDA written exam requires rigorous mathematics and general ability skills, followed by the demanding 5-day Services Selection Board (SSB) interview that tests psychological stamina, leadership, and emotional intelligence.",
    eligibility: {
      minimumCriteria: "Army Wing: 10+2 in ANY stream. Air Force & Navy Wings: 10+2 with Physics and Mathematics. Open to unmarried male and female candidates aged 16.5 to 19.5 years.",
      marksThreshold: "Pass in 10+2; selection based on UPSC written examination and SSB interview.",
      reservationNotes: "Purely merit and medical fitness based. No caste-based reservations."
    },
    costRange: {
      totalCost: "₹0 (Zero tuition fees; complete government scholarship covering lodging, food, uniforms, and medicals).",
      cadetStipend: "Cadets receive a monthly stipend of ₹56,100 during their final year of academy training!"
    },
    stateSpecificNotes: {
      allIndia: "Conducted uniformly twice a year (NDA-I and NDA-II) across all major Indian cities by the Union Public Service Commission (UPSC).",
      andhraPradesh: "Major written examination and SSB preparation centers in Visakhapatnam, Vijayawada, and Tirupati. High cadet representation from Sainik School Korukonda.",
      telangana: "Major examination centers across Hyderabad. High cadet intake from Sainik School Kalikiri & military schools."
    },
    steps: [
      {
        stepNumber: 1,
        title: "UPSC NDA Written Examination",
        focus: "Paper 1: Mathematics (300 Marks). Paper 2: General Ability Test (English + GK/Science, 600 Marks).",
        milestone: "Clearing UPSC written cutoff and receiving Call Letter for SSB Interview."
      },
      {
        stepNumber: 2,
        title: "5-Day SSB Interview & Medical Board",
        focus: "Screening tests, Psychological tests, Group Testing Officer (GTO) outdoor tasks, and Personal Interview.",
        milestone: "Recommended by SSB and declared Medically Fit by Service Medical Board."
      },
      {
        stepNumber: 3,
        title: "3-Year Joint Cadet Training at NDA",
        focus: "Academic degree (B.Tech / B.Sc / B.A. from JNU) alongside drill, weapon training, horse riding, swimming, and leadership.",
        milestone: "Passing Out Parade at Khadakwasla as a graduate cadet."
      },
      {
        stepNumber: 4,
        title: "Finishing Academy & Commissioning",
        focus: "1 Year at Indian Military Academy (Dehradun), Air Force Academy (Dundigal, Hyderabad), or Indian Naval Academy (Ezhimala).",
        milestone: "Commissioned as Lieutenant / Flying Officer / Sub-Lieutenant with President's Commission."
      }
    ],
    entranceExams: ["nda"],
    furtherStudy: ["Defense Services Staff College (DSSC)", "M.Tech / M.Sc sponsored by Armed Forces", "Special Forces qualifications"],
    careerRoles: [
      "Commissioned Officer in Indian Army (Lieutenant → Captain → Major → Colonel)",
      "Fighter Pilot / Transport Pilot in Indian Air Force",
      "Executive / Technical Officer in Indian Navy Warships & Submarines",
      "Military Intelligence / Cyber Defense Specialist",
      "UN Peacekeeping Force Mission Officer"
    ],
    salaryEstimate: {
      entryMedian: "Level 10 Pay Scale: ₹56,100 basic + Military Service Pay (MSP ₹15,500) + DA + Free Housing, Ration, CSD & Medicals (~₹1.10 - ₹1.45 Lakhs / month gross)",
      midCareer: "₹20.00 - ₹35.00+ LPA (Equivalent value including all allowances, travel concessions, and official accommodation)",
      highestPackageReality: "The rewards of an Armed Forces officer transcend commercial CTC: complete family medical coverage (ECHS), government housing, adventure, and unparalleled national honour.",
      dataQuality: "Very High (Ministry of Defence Gazette & 7th Central Pay Commission Rules)"
    },
    tradeOffs: {
      pros: [
        "Zero financial burden on parents: Entire education, living, and medicals 100% funded by Govt of India.",
        "Permanent Commissioned Officer rank by age 21 with extraordinary leadership authority.",
        "Unbeatable lifelong prestige, pension, canteen benefits, and club facilities."
      ],
      cons: [
        "Demanding SSB selection rate (around 350-400 candidates selected out of 4+ lakh applicants).",
        "Rigorous physical stamina, strict discipline, and readiness for border postings in challenging terrains.",
        "Service commitments and transfers every 2-3 years."
      ]
    },
    lastVerified: "October 2026",
    officialSource: "Union Public Service Commission (upsc.gov.in), Join Indian Army (joinindianarmy.nic.in)"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PATHWAYS_DATA };
}
