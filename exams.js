// Comprehensive Entrance Examinations Directory
// Verified for Academic Year 2025-2026 / 2026-2027
// Sources: NTA, APSCHE, TSCHE, AICTE, NMC, Consortium of NLUs, UPSC

const EXAMS_DATA = [
  {
    id: "jee-main",
    name: "JEE (Main) - Joint Entrance Examination",
    level: "National",
    targetStage: "12th",
    applicableStates: ["All India", "Andhra Pradesh", "Telangana"],
    category: "Engineering & Architecture",
    conductingBody: "National Testing Agency (NTA)",
    officialUrl: "https://jeemain.nta.nic.in",
    frequency: "Twice a year (Session 1 in January, Session 2 in April)",
    eligibility: {
      qualification: "Passed or appearing in Class 12 with Physics, Mathematics, and one of Chemistry/Biology/Biotech.",
      minimumMarks: "75% aggregate in Class 12 (65% for SC/ST) OR top 20 percentile in respective State Board for NIT/IIIT/CFTI admissions.",
      ageLimit: "No upper age limit for JEE Main.",
      attemptsAllowed: "Can appear for 3 consecutive years starting from the year of passing Class 12."
    },
    pattern: {
      mode: "Computer Based Test (CBT)",
      duration: "3 Hours (180 minutes)",
      totalMarks: 300,
      sections: "Physics (100 marks), Chemistry (100 marks), Mathematics (100 marks).",
      markingScheme: "+4 for correct response, -1 for incorrect response; both MCQs and numerical questions have negative marking."
    },
    admissionTo: "NITs, IIITs, CFTIs, and qualifying cutoff for JEE (Advanced) for admission to the 23 IITs.",
    counselingAgency: "Joint Seat Allocation Authority (JoSAA) & CSAB (josaa.nic.in)",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "jee-adv",
    name: "JEE (Advanced) - IIT Entrance Examination",
    level: "National",
    targetStage: "12th",
    applicableStates: ["All India"],
    category: "Engineering & Pure Sciences",
    conductingBody: "One of the 7 Zonal IITs under Joint Admission Board (JAB)",
    officialUrl: "https://jeeadv.ac.in",
    frequency: "Once a year (May / June)",
    eligibility: {
      qualification: "Must be among the top 2,50,000 successful candidates in JEE (Main) across categories.",
      minimumMarks: "75% aggregate in 12th board (65% for SC/ST) or top 20 percentile.",
      ageLimit: "Candidates should have been born on or after Oct 1 of the eligibility window (5-year relaxation for SC/ST/PwD).",
      attemptsAllowed: "Maximum 2 times in 2 consecutive years."
    },
    pattern: {
      mode: "Computer Based Test (CBT)",
      duration: "Two mandatory papers of 3 Hours each (Paper 1 & Paper 2 on the same day)",
      totalMarks: "Varies annually (usually ~360 marks)",
      sections: "Physics, Chemistry, Mathematics (Advanced conceptual and multi-correct questions)",
      markingScheme: "Partial marking, negative marking applies on wrong choices."
    },
    admissionTo: "23 Indian Institutes of Technology (IITs) including IIT Madras, IIT Bombay, IIT Delhi, IIT Hyderabad, and IIT Tirupati.",
    counselingAgency: "JoSAA (josaa.nic.in)",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "neet-ug",
    name: "NEET (UG) - National Eligibility cum Entrance Test",
    level: "National",
    targetStage: "12th",
    applicableStates: ["All India", "Andhra Pradesh", "Telangana"],
    category: "Medicine, Dental & AYUSH",
    conductingBody: "National Testing Agency (NTA)",
    officialUrl: "https://neet.nta.nic.in",
    frequency: "Once a year (First Sunday of May)",
    eligibility: {
      qualification: "Passed or appearing in 10+2 with Physics, Chemistry, Biology/Biotechnology, and English as core subjects.",
      minimumMarks: "50% aggregate in PCB for General, 40% for SC/ST/OBC, 45% for Gen-PwD.",
      ageLimit: "Must be at least 17 years old by December 31 of admission year. No upper age limit.",
      attemptsAllowed: "Unlimited attempts as per Supreme Court & NMC guidelines."
    },
    pattern: {
      mode: "Pen and Paper (OMR based)",
      duration: "3 Hours and 20 Minutes (200 minutes)",
      totalMarks: 720,
      sections: "Physics (180 marks), Chemistry (180 marks), Biology: Botany (180 marks) + Zoology (180 marks). Total 200 questions (180 to be attempted).",
      markingScheme: "+4 for correct answer, -1 for incorrect answer, 0 for unattempted."
    },
    admissionTo: "All MBBS, BDS, BAMS, BHMS, BUMS, BSMS seats in all Medical Colleges in India (including AIIMS, JIPMER, and Armed Forces Medical College AFMC Pune).",
    counselingAgency: "MCC (15% All India Quota) + State Quota: Dr. YSRUHS (AP) & KNRUHS (TS).",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "ap-eapcet",
    name: "AP EAPCET - Engineering Stream (Andhra Pradesh)",
    level: "State (Andhra Pradesh)",
    targetStage: "12th",
    applicableStates: ["Andhra Pradesh", "Telangana (Non-local quota)"],
    category: "Engineering & Applied Technology",
    conductingBody: "JNTU Kakinada on behalf of Andhra Pradesh State Council of Higher Education (APSCHE)",
    officialUrl: "https://cets.apsche.ap.gov.in",
    frequency: "Once a year (May)",
    eligibility: {
      qualification: "Passed Intermediate (10+2) with Mathematics, Physics, and Chemistry (or 3-year Diploma in Engineering).",
      minimumMarks: "45% aggregate marks in group subjects (40% for reserved categories).",
      ageLimit: "Minimum 16 years of age by December 31 of the admission year. No upper age limit.",
      attemptsAllowed: "Unlimited while fulfilling basic qualification."
    },
    pattern: {
      mode: "Computer Based Test (CBT)",
      duration: "3 Hours (180 minutes)",
      totalMarks: 160,
      sections: "Mathematics (80 marks), Physics (40 marks), Chemistry (40 marks).",
      markingScheme: "+1 mark per correct answer; NO NEGATIVE MARKING."
    },
    admissionTo: "All Government, University, and Private Engineering Colleges across Andhra Pradesh (AU Region & SVU Region).",
    counselingAgency: "APSCHE Web Counseling (cets.apsche.ap.gov.in). Full tuition fee covered under Jagananna Vidya Deevena (JVD) for eligible family income brackets.",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "ap-eapcet-agri",
    name: "AP EAPCET - Agriculture & Pharmacy Stream (Andhra Pradesh)",
    level: "State (Andhra Pradesh)",
    targetStage: "12th",
    applicableStates: ["Andhra Pradesh"],
    category: "Agriculture, Pharmacy & Allied Sciences",
    conductingBody: "JNTU Kakinada on behalf of APSCHE",
    officialUrl: "https://cets.apsche.ap.gov.in",
    frequency: "Once a year (May)",
    eligibility: {
      qualification: "Passed Intermediate (10+2) with Biology, Physics, and Chemistry.",
      minimumMarks: "45% in group subjects (40% for reserved categories).",
      ageLimit: "Minimum 17 years for B.Sc Agri/Horti/Fisheries. Maximum 22 years (25 years for SC/ST).",
      attemptsAllowed: "Regular annual sittings."
    },
    pattern: {
      mode: "Computer Based Test (CBT)",
      duration: "3 Hours (180 minutes)",
      totalMarks: 160,
      sections: "Botany (40 marks), Zoology (40 marks), Physics (40 marks), Chemistry (40 marks).",
      markingScheme: "+1 mark per correct answer; NO NEGATIVE MARKING."
    },
    admissionTo: "ANGRAU (B.Sc Agri), YSRHU (B.Sc Horti), SVVU (B.V.Sc & B.F.Sc), B.Pharmacy, Pharm.D, and B.Tech Food Tech in Andhra Pradesh.",
    counselingAgency: "APSCHE Web Counseling & ANGRAU Combined Admissions.",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "tg-eapcet",
    name: "TG EAPCET - Engineering Stream (Telangana)",
    level: "State (Telangana)",
    targetStage: "12th",
    applicableStates: ["Telangana", "Andhra Pradesh (Non-local quota)"],
    category: "Engineering & Technology",
    conductingBody: "JNTU Hyderabad on behalf of Telangana State Council of Higher Education (TSCHE)",
    officialUrl: "https://eapcet.tsche.ac.in",
    frequency: "Once a year (May)",
    eligibility: {
      qualification: "Passed Intermediate (10+2) with Mathematics, Physics, and Chemistry.",
      minimumMarks: "45% in group subjects (40% for reserved categories).",
      ageLimit: "Minimum 16 years by December 31. No upper age limit.",
      attemptsAllowed: "Annual regular."
    },
    pattern: {
      mode: "Computer Based Test (CBT)",
      duration: "3 Hours (180 minutes)",
      totalMarks: 160,
      sections: "Mathematics (80 marks), Physics (40 marks), Chemistry (40 marks).",
      markingScheme: "+1 mark per correct answer; NO NEGATIVE MARKING."
    },
    admissionTo: "Engineering colleges in Telangana (JNTUH, Osmania University, Kakatiya University, CBA/Private colleges in Hyderabad region).",
    counselingAgency: "TSCHE Web Counseling. Tuition reimbursement supported via Telangana ePASS portal.",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "tg-eapcet-agri",
    name: "TG EAPCET - Agriculture & Pharmacy Stream (Telangana)",
    level: "State (Telangana)",
    targetStage: "12th",
    applicableStates: ["Telangana"],
    category: "Agriculture, Veterinary & Pharmacy",
    conductingBody: "JNTU Hyderabad on behalf of TSCHE",
    officialUrl: "https://eapcet.tsche.ac.in",
    frequency: "Once a year (May)",
    eligibility: {
      qualification: "Passed Intermediate (10+2) with Botany, Zoology, Physics, and Chemistry.",
      minimumMarks: "45% in group subjects (40% for reserved).",
      ageLimit: "17 to 22 years (25 years for SC/ST).",
      attemptsAllowed: "Annual regular."
    },
    pattern: {
      mode: "Computer Based Test (CBT)",
      duration: "3 Hours (180 minutes)",
      totalMarks: 160,
      sections: "Botany (40 marks), Zoology (40 marks), Physics (40 marks), Chemistry (40 marks).",
      markingScheme: "+1 mark per correct answer; NO NEGATIVE MARKING."
    },
    admissionTo: "PJTSAU (B.Sc Agri), PVNRTVU (B.V.Sc & B.F.Sc), SKLTSHU (B.Sc Horti), B.Pharmacy, Pharm.D in Telangana.",
    counselingAgency: "TSCHE & PJTSAU Single Window Admissions.",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "ap-polycet",
    name: "AP POLYCET - Polytechnic Common Entrance Test",
    level: "State (Andhra Pradesh)",
    targetStage: "10th",
    applicableStates: ["Andhra Pradesh"],
    category: "Polytechnic Diplomas",
    conductingBody: "State Board of Technical Education and Training (SBTET), Andhra Pradesh",
    officialUrl: "https://polycetap.nic.in",
    frequency: "Once a year (April / May)",
    eligibility: {
      qualification: "Passed SSC (Class 10) examination conducted by State Board of Andhra Pradesh or equivalent (CBSE / ICSE).",
      minimumMarks: "Minimum 35% in Class 10 with Mathematics as one of the subjects.",
      ageLimit: "No minimum or maximum age limit.",
      attemptsAllowed: "Any candidate satisfying Class 10 passing criteria."
    },
    pattern: {
      mode: "Pen and Paper (OMR based)",
      duration: "2 Hours (120 minutes)",
      totalMarks: 120,
      sections: "Mathematics (50 marks), Physics (40 marks), Chemistry (30 marks). For Diploma in Pharmacy: Biology (30 marks) replaces Chemistry.",
      markingScheme: "+1 for correct answer, NO NEGATIVE MARKING."
    },
    admissionTo: "3-Year Engineering & Non-Engineering Diploma courses in Government, Aided, and Private Polytechnics in Andhra Pradesh.",
    counselingAgency: "SBTET AP Web Counseling. Opens the pathway to 2nd year B.Tech via AP ECET.",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "ts-polycet",
    name: "TS POLYCET - Polytechnic Common Entrance Test",
    level: "State (Telangana)",
    targetStage: "10th",
    applicableStates: ["Telangana"],
    category: "Polytechnic Diplomas",
    conductingBody: "State Board of Technical Education and Training (SBTET), Telangana",
    officialUrl: "https://polycet.sbtet.telangana.gov.in",
    frequency: "Once a year (May)",
    eligibility: {
      qualification: "Passed SSC (Class 10) examination or recognized equivalent board.",
      minimumMarks: "35% aggregate with Mathematics and Science.",
      ageLimit: "No age restriction.",
      attemptsAllowed: "Annual regular."
    },
    pattern: {
      mode: "Pen and Paper (OMR based)",
      duration: "2 Hours and 30 Minutes",
      totalMarks: 120 (150 for Agricultural & Animal Husbandry diploma streams),
      sections: "Mathematics (60 marks), Physics (30 marks), Chemistry (30 marks), Biology (30 marks optional for Agri/Polytechnic).",
      markingScheme: "+1 for correct answer, NO NEGATIVE MARKING."
    },
    admissionTo: "3-Year Diplomas in Engineering & Technology in all Telangana Government and Private Polytechnics; PJTSAU Agri diplomas.",
    counselingAgency: "SBTET Telangana Online Web Counseling.",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "ap-ecet",
    name: "AP ECET - Engineering Common Entrance Test (Lateral Entry)",
    level: "State (Andhra Pradesh)",
    targetStage: "Polytechnic/B.Sc to B.Tech",
    applicableStates: ["Andhra Pradesh"],
    category: "Lateral Entry Engineering",
    conductingBody: "APSCHE (conducted by a state university)",
    officialUrl: "https://cets.apsche.ap.gov.in",
    frequency: "Once a year (May)",
    eligibility: {
      qualification: "Passed 3-year Diploma in Engineering and Technology or B.Sc (with Mathematics).",
      minimumMarks: "45% marks in qualifying diploma (40% for reserved categories).",
      ageLimit: "No age restriction.",
      attemptsAllowed: "Valid for diploma graduates."
    },
    pattern: {
      mode: "Computer Based Test (CBT)",
      duration: "3 Hours (180 minutes)",
      totalMarks: 200,
      sections: "Mathematics (50 marks), Physics (25 marks), Chemistry (25 marks), Engineering Branch Subject (100 marks).",
      markingScheme: "+1 per correct answer, NO NEGATIVE MARKING."
    },
    admissionTo: "Direct admission into 2nd Year (3rd Semester) regular B.Tech / B.E. programs under 10% supernumerary lateral entry quota.",
    counselingAgency: "APSCHE ECET Counseling.",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "ts-ecet",
    name: "TS ECET - Engineering Common Entrance Test (Lateral Entry)",
    level: "State (Telangana)",
    targetStage: "Polytechnic/B.Sc to B.Tech",
    applicableStates: ["Telangana"],
    category: "Lateral Entry Engineering",
    conductingBody: "Osmania University on behalf of TSCHE",
    officialUrl: "https://ecet.tsche.ac.in",
    frequency: "Once a year (May)",
    eligibility: {
      qualification: "Diploma in Engineering & Technology or B.Sc (Mathematics) from recognized board/university.",
      minimumMarks: "45% aggregate (40% for reserved).",
      ageLimit: "No age limit.",
      attemptsAllowed: "Annual regular."
    },
    pattern: {
      mode: "Computer Based Test (CBT)",
      duration: "3 Hours (180 minutes)",
      totalMarks: 200,
      sections: "Mathematics (50), Physics (25), Chemistry (25), Technical Core Branch Subject (100).",
      markingScheme: "+1 per correct response, NO NEGATIVE MARKING."
    },
    admissionTo: "Direct entry into 2nd year B.Tech / B.E. in engineering colleges across Telangana.",
    counselingAgency: "TSCHE Web Counseling.",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "cuet-ug",
    name: "CUET (UG) - Common University Entrance Test",
    level: "National",
    targetStage: "12th",
    applicableStates: ["All India"],
    category: "Central Universities (Arts, Science, Commerce)",
    conductingBody: "National Testing Agency (NTA)",
    officialUrl: "https://cuetug.ntaonline.in",
    frequency: "Once a year (May / June)",
    eligibility: {
      qualification: "Passed or appearing in Class 12 from any recognized board in India.",
      minimumMarks: "50% aggregate (varies slightly by specific participating university and course).",
      ageLimit: "No age bar for appearing in CUET-UG.",
      attemptsAllowed: "Annual regular."
    },
    pattern: {
      mode: "Hybrid / Computer Based Test (CBT)",
      duration: "45 to 60 minutes per chosen domain subject",
      totalMarks: "200 to 250 marks per subject paper",
      sections: "Section 1: Languages, Section 2: Domain-specific subjects (chosen from 29 domains), Section 3: General Aptitude Test.",
      markingScheme: "+5 for correct answer, -1 for incorrect answer."
    },
    admissionTo: "Undergraduate degree programs (BA Hons, B.Sc Hons, B.Com Hons, Integrated M.Sc) across 45+ Central Universities (DU, BHU, JNU, University of Hyderabad HCU, Visva-Bharati) and 100+ private/state universities.",
    counselingAgency: "Individual university CSAS portals (e.g. DU CSAS, UoH SAMARTH portal).",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "clat",
    name: "CLAT - Common Law Admission Test",
    level: "National",
    targetStage: "12th",
    applicableStates: ["All India"],
    category: "Law & Jurisprudence",
    conductingBody: "Consortium of National Law Universities",
    officialUrl: "https://consortiumofnlus.ac.in",
    frequency: "Once a year (First Sunday of December)",
    eligibility: {
      qualification: "Passed or appearing in 10+2 from any recognized board in ANY stream (Science, Commerce, Arts).",
      minimumMarks: "45% marks in 10+2 for General/OBC/NRI; 40% for SC/ST candidates.",
      ageLimit: "No upper age limit for CLAT UG.",
      attemptsAllowed: "Unlimited."
    },
    pattern: {
      mode: "Pen and Paper (Offline OMR)",
      duration: "2 Hours (120 minutes)",
      totalMarks: 120,
      sections: "English Language (24 Qs), Current Affairs & GK (28 Qs), Legal Reasoning (32 Qs), Logical Reasoning (24 Qs), Quantitative Techniques (12 Qs). Reading-comprehension based.",
      markingScheme: "+1 mark per correct answer, -0.25 mark per incorrect answer."
    },
    admissionTo: "5-Year Integrated Law Programs (B.A. LL.B, B.B.A. LL.B, B.Sc LL.B) across 24 premier National Law Universities (including NLSIU Bengaluru, NALSAR Hyderabad, WBNUJS Kolkata, NLU Jodhpur).",
    counselingAgency: "Consortium of NLUs Centralized Web Counseling.",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "ap-lawcet",
    name: "AP LAWCET - Law Common Entrance Test (Andhra Pradesh)",
    level: "State (Andhra Pradesh)",
    targetStage: "12th",
    applicableStates: ["Andhra Pradesh"],
    category: "5-Year Integrated Law",
    conductingBody: "Acharya Nagarjuna University on behalf of APSCHE",
    officialUrl: "https://cets.apsche.ap.gov.in",
    frequency: "Once a year (May)",
    eligibility: {
      qualification: "Passed 10+2 from any recognized board in any stream.",
      minimumMarks: "45% aggregate (42% for BC, 40% for SC/ST).",
      ageLimit: "As per Bar Council of India guidelines.",
      attemptsAllowed: "Annual regular."
    },
    pattern: {
      mode: "Computer Based Test (CBT)",
      duration: "90 Minutes",
      totalMarks: 120,
      sections: "General Knowledge and Mental Ability (30 marks), Current Affairs (30 marks), Aptitude for the Study of Law (60 marks).",
      markingScheme: "+1 per correct answer, NO NEGATIVE MARKING."
    },
    admissionTo: "5-Year Integrated LL.B courses in Andhra University, Sri Venkateswara University, Padmavati Mahila Visvavidyalayam, and affiliated private law colleges in AP.",
    counselingAgency: "APSCHE Web Counseling.",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "ts-lawcet",
    name: "TS LAWCET - Law Common Entrance Test (Telangana)",
    level: "State (Telangana)",
    targetStage: "12th",
    applicableStates: ["Telangana"],
    category: "5-Year Integrated Law",
    conductingBody: "Osmania University on behalf of TSCHE",
    officialUrl: "https://lawcet.tsche.ac.in",
    frequency: "Once a year (June)",
    eligibility: {
      qualification: "Passed 10+2 in any stream.",
      minimumMarks: "45% for General, 42% for OBC, 40% for SC/ST.",
      ageLimit: "As prescribed by BCI rules.",
      attemptsAllowed: "Annual regular."
    },
    pattern: {
      mode: "Computer Based Test (CBT)",
      duration: "90 Minutes",
      totalMarks: 120,
      sections: "Part A: GK & Mental Ability (30 marks), Part B: Current Affairs (30 marks), Part C: Aptitude for Law (60 marks).",
      markingScheme: "+1 per correct response, NO NEGATIVE MARKING."
    },
    admissionTo: "5-Year LL.B courses in Osmania University College of Law, Kakatiya University, and Telangana private law institutions.",
    counselingAgency: "TSCHE Web Counseling.",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "nata",
    name: "NATA - National Aptitude Test in Architecture",
    level: "National",
    targetStage: "12th",
    applicableStates: ["All India"],
    category: "Architecture & Spatial Design",
    conductingBody: "Council of Architecture (CoA)",
    officialUrl: "https://nata.in",
    frequency: "Multiple windows on weekends (April to July); best score considered",
    eligibility: {
      qualification: "Passed 10+2 with Physics, Chemistry, and Mathematics (mandatory) OR 10+3 Diploma with Mathematics.",
      minimumMarks: "50% aggregate marks in 10+2 with 50% in PCM.",
      ageLimit: "No age limit.",
      attemptsAllowed: "Maximum 3 attempts per academic cycle."
    },
    pattern: {
      mode: "Computer Based Cognitive Test + Offline Drawing Assessment",
      duration: "3 Hours (180 minutes)",
      totalMarks: 200,
      sections: "Visual Reasoning, Architectural Awareness, Mathematics, and Freehand 2D/3D Drawing.",
      markingScheme: "Questions carry 1, 2, or 3 marks; NO NEGATIVE MARKING."
    },
    admissionTo: "5-Year B.Arch degree in all recognized architectural colleges across India (excluding IITs/NITs which accept JEE Paper 2).",
    counselingAgency: "State counseling authorities (APSCHE, TSCHE) and individual universities.",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "ca-foundation",
    name: "CA Foundation - ICAI Entry-Level Examination",
    level: "National / International",
    targetStage: "12th",
    applicableStates: ["All India"],
    category: "Chartered Accountancy",
    conductingBody: "Institute of Chartered Accountants of India (ICAI)",
    officialUrl: "https://www.icai.org",
    frequency: "Thrice a year (January, May/June, September under New Scheme)",
    eligibility: {
      qualification: "Registered with ICAI after passing Class 10; eligible to appear after appearing for Class 12 board exams.",
      minimumMarks: "Pass in Class 12 from any recognized board in ANY stream.",
      ageLimit: "No age restriction.",
      attemptsAllowed: "Valid for 4 years (8 attempts); can be revalidated."
    },
    pattern: {
      mode: "Pen and Paper (Subjective + Objective)",
      duration: "3 Hours for subjective papers, 2 Hours for objective papers",
      totalMarks: 400 (4 papers of 100 marks each),
      sections: "Paper 1: Accounting (100 marks), Paper 2: Business Laws (100 marks), Paper 3: Quantitative Aptitude (100 marks), Paper 4: Business Economics (100 marks).",
      markingScheme: "Papers 1 & 2 are subjective (no negative marks). Papers 3 & 4 are objective (-0.25 negative marking for incorrect answer)."
    },
    admissionTo: "Admission to CA Intermediate, 2-year practical articleship, and CA Final course.",
    counselingAgency: "Direct qualification from ICAI Self Service Portal (SSP).",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "ipmat",
    name: "IPMAT - Integrated Program in Management Aptitude Test",
    level: "National",
    targetStage: "12th",
    applicableStates: ["All India"],
    category: "Business Management (IIMs)",
    conductingBody: "Indian Institute of Management Indore / IIM Rohtak",
    officialUrl: "https://www.iimidr.ac.in",
    frequency: "Once a year (May)",
    eligibility: {
      qualification: "Passed 10+2 or equivalent in ANY stream (Arts, Commerce, Science).",
      minimumMarks: "60% aggregate in Class 10 and Class 12 (55% for SC/ST/PwD).",
      ageLimit: "Maximum 20 years of age.",
      attemptsAllowed: "Regular."
    },
    pattern: {
      mode: "Computer Based Test (CBT)",
      duration: "2 Hours (120 minutes)",
      totalMarks: 400,
      sections: "Quantitative Ability (Multiple Choice - 40 mins), Quantitative Ability (Short Answer - 40 mins), Verbal Ability (40 mins). Followed by Personal Interview.",
      markingScheme: "+4 marks for correct MCQ answer, -1 for incorrect MCQ answer; NO negative marks for Short Answer questions."
    },
    admissionTo: "5-Year Integrated Program in Management (BBA + MBA) at IIM Indore, IIM Rohtak, IIM Ranchi, IIM Bodh Gaya, and IIM Jammu.",
    counselingAgency: "Direct IIM admissions based on Composite Score (Aptitude test score + Personal Interview).",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "nda",
    name: "NDA & NA - National Defence Academy & Naval Academy Examination",
    level: "National",
    targetStage: "12th",
    applicableStates: ["All India"],
    category: "Defense Officer Commission",
    conductingBody: "Union Public Service Commission (UPSC)",
    officialUrl: "https://upsc.gov.in",
    frequency: "Twice a year (NDA-I in April, NDA-II in September)",
    eligibility: {
      qualification: "Army Wing: 10+2 in ANY stream. Navy & Air Force Wings: 10+2 with Physics and Mathematics.",
      minimumMarks: "Passing grade in 10+2 board.",
      ageLimit: "16.5 to 19.5 years. Candidates must be unmarried (both male and female candidates eligible).",
      attemptsAllowed: "Permitted until the upper age limit is reached."
    },
    pattern: {
      mode: "Pen and Paper (Offline OMR)",
      duration: "5 Hours total (Mathematics: 2.5 hrs, GAT: 2.5 hrs)",
      totalMarks: 900 (Maths: 300 marks, General Ability Test: 600 marks) + 900 Marks for 5-day SSB interview,
      sections: "Paper 1: Mathematics (120 Qs). Paper 2: General Ability Test (Part A: English 200 marks, Part B: GK/Physics/Chem/History/Geography 400 marks).",
      markingScheme: "Negative marking: -0.83 in Maths, -1.33 in GAT."
    },
    admissionTo: "National Defence Academy (Khadakwasla, Pune) and Indian Naval Academy (Ezhimala, Kerala) leading to Commission as Lieutenant, Sub-Lieutenant, or Flying Officer.",
    counselingAgency: "UPSC + Services Selection Board (SSB) Ministry of Defence.",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  },

  {
    id: "ts-dost",
    name: "DOST - Degree Online Services, Telangana",
    level: "State (Telangana)",
    targetStage: "12th",
    applicableStates: ["Telangana"],
    category: "Undergraduate Degree Admissions",
    conductingBody: "Telangana State Council of Higher Education (TSCHE)",
    officialUrl: "https://dost.cgg.gov.in",
    frequency: "Annual web-based single window counseling (May to July)",
    eligibility: {
      qualification: "Passed Intermediate (10+2) from TSBIE or recognized board.",
      minimumMarks: "Passing marks in qualifying examination.",
      ageLimit: "No age limit.",
      attemptsAllowed: "Valid for immediate and past passed candidates."
    },
    pattern: {
      mode: "Online centralized merit-based allotment (No separate entrance test)",
      duration: "Phased web options",
      totalMarks: "Merit determined directly by Intermediate Board Group Marks + Domicile.",
      sections: "Admissions into B.Com, B.Sc, B.A, BBA, BCA across all Telangana state universities.",
      markingScheme: "Pure board merit and statutory state reservations."
    },
    admissionTo: "Osmania University, Kakatiya University, Telangana University, Mahatma Gandhi University, Palamuru University, and all affiliated degree colleges in Telangana.",
    counselingAgency: "TSCHE DOST Portal (dost.cgg.gov.in).",
    lastVerified: "October 2026",
    verificationStatus: "Verified for Academic Year 2025-26"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EXAMS_DATA };
}
