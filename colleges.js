// Colleges and Institutes Directory
// Sourced from Official NIRF 2024 Reports, NAAC Accreditations, and APSCHE / TSCHE Fee Regulatory Committees
// Note: "Sample Data" tags are explicitly shown on preview estimates where fee notifications are pending gazette revision.

const COLLEGES_DATA = [
  // ==========================================
  // ANDHRA PRADESH COLLEGES & UNIVERSITIES
  // ==========================================
  {
    id: "au-vizag",
    name: "Andhra University (AU) - College of Engineering",
    type: "State Government University",
    state: "Andhra Pradesh",
    district: "Visakhapatnam",
    established: 1926,
    accreditation: "NAAC A++ Grade (CGPA 3.74/4) | NIRF Overall Rank: Top 45",
    programsOffered: [
      "B.Tech (CSE, ECE, Mechanical, Civil, Chemical, Marine, AI)",
      "B.Pharmacy & Pharm.D",
      "5-Year Integrated Law (B.A. LL.B)",
      "B.Sc, B.Com, B.A. Honours"
    ],
    admissionRoute: "AP EAPCET (Engineering/Agri) | AP LAWCET | AP ICET | AP ECET (Lateral Entry)",
    annualFeesVerified: {
      convenorGovtQuota: "₹35,000 - ₹50,000 / year (Regular Seats)",
      selfFinanceQuota: "₹85,000 - ₹1,10,000 / year",
      feeReimbursementEligible: "Yes — 100% tuition covered under AP Jagananna Vidya Deevena (JVD) for eligible income cards."
    },
    placementReality: {
      nirfReportedMedian: "₹6.50 LPA (B.Tech 4-Year Graduating Cohort)",
      medianSalaryRange: "₹5.20 - ₹8.00 LPA",
      highestPackageHeadline: "₹44 LPA (Off-campus single student offer — NOT typical)",
      realityNote: "The official NIRF 2024 report shows ~78% placement rate with median ₹6.5 LPA. Do not expect the highest off-campus package as an automatic outcome.",
      reportingYear: "NIRF 2024 (Data of 2022-23 graduating batch)",
      sourceDocument: "Andhra University NIRF 2024 Engineering Data Submission"
    },
    officialUrl: "https://www.andhrauniversity.edu.in",
    lastVerified: "October 2026",
    isSamplePreview: false
  },

  {
    id: "jntu-kakinada",
    name: "JNTU College of Engineering, Kakinada (UCEK)",
    type: "State Government Technical University",
    state: "Andhra Pradesh",
    district: "Kakinada",
    established: 1946,
    accreditation: "NAAC A+ Grade | AICTE Approved | NIRF Rank Band 101-150",
    programsOffered: [
      "B.Tech (CSE, ECE, EEE, Mechanical, Civil, Petrochemical)",
      "B.Tech Lateral Entry for Polytechnic Diploma holders (via ECET)"
    ],
    admissionRoute: "AP EAPCET (Code: JNTK) & AP ECET (Lateral Entry)",
    annualFeesVerified: {
      convenorGovtQuota: "₹30,000 - ₹45,000 / year",
      selfFinanceQuota: "₹70,000 / year",
      feeReimbursementEligible: "Yes — Jagananna Vidya Deevena applicable."
    },
    placementReality: {
      nirfReportedMedian: "₹5.80 LPA",
      medianSalaryRange: "₹4.80 - ₹7.20 LPA",
      highestPackageHeadline: "₹33.5 LPA (Top software product recruit)",
      realityNote: "Core branch engineering median is ₹4.5 LPA; CSE/ECE median is ₹6.2 LPA. Mass recruiters hire substantially at ₹4.0 LPA.",
      reportingYear: "NIRF 2024 Engineering Data",
      sourceDocument: "JNTUK Official Training & Placement Cell Annual Report"
    },
    officialUrl: "https://www.jntuk.edu.in",
    lastVerified: "October 2026",
    isSamplePreview: false
  },

  {
    id: "svu-tirupati",
    name: "Sri Venkateswara University (SVU) College of Engineering",
    type: "State Government University",
    state: "Andhra Pradesh",
    district: "Tirupati",
    established: 1954,
    accreditation: "NAAC A+ Grade | NIRF University Rank: Top 60",
    programsOffered: [
      "B.Tech (CSE, EEE, ECE, Civil, Mechanical, Chemical)",
      "B.Pharmacy",
      "5-Year Integrated M.Sc"
    ],
    admissionRoute: "AP EAPCET (Code: SVUC) & AP ECET",
    annualFeesVerified: {
      convenorGovtQuota: "₹32,000 - ₹45,000 / year",
      selfFinanceQuota: "₹65,000 / year",
      feeReimbursementEligible: "Yes — AP JVD full tuition waiver applicable."
    },
    placementReality: {
      nirfReportedMedian: "₹6.00 LPA",
      medianSalaryRange: "₹4.50 - ₹7.00 LPA",
      highestPackageHeadline: "₹28 LPA (Specialist product firm)",
      realityNote: "Reputed alumni network across Rayalaseema; core mechanical and civil placements frequently include L&T and public sector projects.",
      reportingYear: "NIRF 2024",
      sourceDocument: "SVU NIRF Institutional Disclosure"
    },
    officialUrl: "https://www.svuniversity.edu.in",
    lastVerified: "October 2026",
    isSamplePreview: false
  },

  {
    id: "govt-polytechnic-vja",
    name: "Government Polytechnic, Vijayawada",
    type: "State Government Polytechnic Institute",
    state: "Andhra Pradesh",
    district: "NTR / Vijayawada",
    established: 1946,
    accreditation: "AICTE Approved | State Board of Technical Education (SBTET AP)",
    programsOffered: [
      "Diploma in Computer Engineering (3 Years)",
      "Diploma in Mechanical Engineering",
      "Diploma in Electrical & Electronics (EEE)",
      "Diploma in Civil Engineering",
      "Diploma in Electronics & Communication (ECE)"
    ],
    admissionRoute: "AP POLYCET (Conducted by SBTET AP after Class 10)",
    annualFeesVerified: {
      convenorGovtQuota: "₹4,700 / year (Near free; hostel mess subsidised)",
      selfFinanceQuota: "N/A (Pure Government Institute)",
      feeReimbursementEligible: "Yes — 100% covered under state welfare scholarships."
    },
    placementReality: {
      nirfReportedMedian: "₹3.20 LPA (Direct Diploma recruitment)",
      medianSalaryRange: "₹2.50 - ₹4.00 LPA (Direct job) | OR Lateral entry to B.Tech via ECET",
      highestPackageHeadline: "₹4.8 LPA (Technician in leading PSU / L&T)",
      realityNote: "Over 60% of students choose NOT to take immediate jobs; instead they take AP ECET and enter 2nd year B.Tech in top colleges with strong advantage in practical lab work.",
      reportingYear: "SBTET AP Placement Audit 2024",
      sourceDocument: "SBTET AP Directorate of Technical Education Annual Review"
    },
    officialUrl: "https://sbtet.ap.gov.in",
    lastVerified: "October 2026",
    isSamplePreview: false
  },

  {
    id: "angrau-guntur",
    name: "Acharya N.G. Ranga Agricultural University (ANGRAU)",
    type: "State Agricultural University",
    state: "Andhra Pradesh",
    district: "Guntur (Lam)",
    established: 1964,
    accreditation: "ICAR Accredited (Grade A) | Ranked Top 15 in National ICAR Agri-Universities",
    programsOffered: [
      "B.Sc (Hons) Agriculture (4 Years)",
      "B.Tech Food Technology",
      "B.Tech Agricultural Engineering",
      "Diploma in Agriculture (2-3 Years after 10th via POLYCET)"
    ],
    admissionRoute: "AP EAPCET (Agriculture Stream) & ICAR-CUET (All India 15% quota)",
    annualFeesVerified: {
      convenorGovtQuota: "₹38,000 - ₹52,000 / year",
      selfFinanceQuota: "₹1,10,000 / year (Higher payment category)",
      feeReimbursementEligible: "Yes — Eligible under JVD scheme."
    },
    placementReality: {
      nirfReportedMedian: "₹5.20 LPA",
      medianSalaryRange: "₹4.20 - ₹8.50 LPA (High recruitment in IBPS Agriculture Field Officer roles)",
      highestPackageHeadline: "₹12 LPA (Agri-Commodity Export & Seed MNCs)",
      realityNote: "Graduates possess high success rates in Banking Specialist Officer (IBPS AFO) exams where pay is ~₹9 LPA on 7th CPC bank scale.",
      reportingYear: "ANGRAU Annual Placement Report 2024",
      sourceDocument: "ANGRAU Administrative Council Annual Gazetted Summary"
    },
    officialUrl: "https://angrau.ac.in",
    lastVerified: "October 2026",
    isSamplePreview: false
  },

  {
    id: "amc-vizag",
    name: "Andhra Medical College (AMC), Visakhapatnam",
    type: "State Government Medical College",
    state: "Andhra Pradesh",
    district: "Visakhapatnam",
    established: 1923,
    accreditation: "National Medical Commission (NMC) Recognized | Centenary Institution",
    programsOffered: [
      "MBBS (5.5 Years with Internship)",
      "B.Sc Nursing & Paramedical Technologies",
      "MD / MS / Super-specialty (DM/M.Ch)"
    ],
    admissionRoute: "NEET (UG) - Dr. YSR University of Health Sciences (Dr. YSRUHS) Counseling",
    annualFeesVerified: {
      convenorGovtQuota: "₹12,500 - ₹20,000 / year (Govt Merit MBBS Seat)",
      selfFinanceQuota: "N/A (Pure Government Medical College)",
      feeReimbursementEligible: "Subsidized government fee structure."
    },
    placementReality: {
      nirfReportedMedian: "₹7.50 LPA (Compulsory Rotatory Medical Internship Stipend: ~₹22,000 - ₹28,000/month; Medical Officer starting: ₹65,000/month)",
      medianSalaryRange: "₹8.00 - ₹14.00 LPA (Post-internship clinical roles)",
      highestPackageHeadline: "Variable (Clinical careers expand with postgraduate specialization)",
      realityNote: "Doctors from AMC enjoy top reputation across Andhra and Telangana; high success rate in NEET-PG for specialty residencies.",
      reportingYear: "Ministry of Health AP 2024 Report",
      sourceDocument: "Dr. YSRUHS Affiliated College Directory"
    },
    officialUrl: "http://andhramedicalcollege.edu.in",
    lastVerified: "October 2026",
    isSamplePreview: false
  },

  // ==========================================
  // TELANGANA COLLEGES & UNIVERSITIES
  // ==========================================
  {
    id: "jntu-hyderabad",
    name: "JNTU College of Engineering, Hyderabad (JNTUH)",
    type: "State Government Technical University",
    state: "Telangana",
    district: "Hyderabad (Kukatpally)",
    established: 1965,
    accreditation: "NAAC A+ Grade | AICTE Approved | NIRF Engineering Rank: Top 80",
    programsOffered: [
      "B.Tech (CSE, AI-ML, Data Science, ECE, EEE, Mechanical, Civil, Metallurgy)",
      "5-Year Integrated Dual Degree (B.Tech + M.Tech)",
      "B.Tech Lateral Entry for Polytechnic Diploma Holders (via TS ECET)"
    ],
    admissionRoute: "TG EAPCET (Code: JNTH) & TS ECET",
    annualFeesVerified: {
      convenorGovtQuota: "₹35,000 - ₹50,000 / year (Regular Seats)",
      selfFinanceQuota: "₹90,000 - ₹1,20,000 / year",
      feeReimbursementEligible: "Yes — Full/partial reimbursement under Telangana ePASS for eligible income brackets."
    },
    placementReality: {
      nirfReportedMedian: "₹6.80 LPA",
      medianSalaryRange: "₹5.50 - ₹9.20 LPA",
      highestPackageHeadline: "₹45 LPA (Global software product company)",
      realityNote: "Located in the heart of Hyderabad's IT corridor (HITEC City adjacency). Strong placement pool in Microsoft, Oracle, TCS, and Amazon. Median is ₹6.8 LPA.",
      reportingYear: "NIRF 2024 Engineering Data",
      sourceDocument: "JNTUH Directorate of University Industry Interaction Center (UIIC) 2024"
    },
    officialUrl: "https://jntuh.ac.in",
    lastVerified: "October 2026",
    isSamplePreview: false
  },

  {
    id: "osmania-university",
    name: "Osmania University (OU) - University College of Engineering",
    type: "State Government University",
    state: "Telangana",
    district: "Hyderabad",
    established: 1917,
    accreditation: "NAAC A+ Grade (Centenary University) | NIRF Overall Rank: Top 50",
    programsOffered: [
      "B.Tech / B.E. (CSE, ECE, EEE, Mechanical, Civil, Biomedical)",
      "B.Pharmacy (via TG EAPCET)",
      "5-Year Integrated LL.B (via TS LAWCET)",
      "B.Com, B.Sc, B.A. via TS DOST portal"
    ],
    admissionRoute: "TG EAPCET (Engineering) | TS LAWCET (Law) | TS DOST (Undergraduate Degree)",
    annualFeesVerified: {
      convenorGovtQuota: "₹35,000 - ₹45,000 / year",
      selfFinanceQuota: "₹75,000 / year",
      feeReimbursementEligible: "Yes — Covered under TS ePASS."
    },
    placementReality: {
      nirfReportedMedian: "₹7.20 LPA (Engineering) | ₹4.50 LPA (General Degree)",
      medianSalaryRange: "₹5.50 - ₹10.00 LPA",
      highestPackageHeadline: "₹42 LPA (Tier-1 tech firm)",
      realityNote: "Biomedical engineering department has specialized tie-ups with leading hospitals in Hyderabad. Engineering median is ₹7.2 LPA.",
      reportingYear: "NIRF 2024",
      sourceDocument: "Osmania University NIRF 2024 Institutional Report"
    },
    officialUrl: "https://www.osmania.ac.in",
    lastVerified: "October 2026",
    isSamplePreview: false
  },

  {
    id: "govt-polytechnic-masab-tank",
    name: "Government Polytechnic, Masab Tank, Hyderabad",
    type: "State Government Polytechnic Institute",
    state: "Telangana",
    district: "Hyderabad",
    established: 1923,
    accreditation: "AICTE Approved | SBTET Telangana | One of India's Oldest Technical Diplomas",
    programsOffered: [
      "Diploma in Computer Engineering (3 Years)",
      "Diploma in Electronics & Communication (ECE)",
      "Diploma in Electrical & Electronics (EEE)",
      "Diploma in Mechanical Engineering",
      "Diploma in Civil Engineering",
      "Diploma in Automobile Engineering"
    ],
    admissionRoute: "TS POLYCET (Conducted by SBTET Telangana after Class 10)",
    annualFeesVerified: {
      convenorGovtQuota: "₹3,800 / year (Nominal statutory fee)",
      selfFinanceQuota: "N/A (Pure Government Institute)",
      feeReimbursementEligible: "Yes — 100% covered under TS social welfare."
    },
    placementReality: {
      nirfReportedMedian: "₹3.50 LPA",
      medianSalaryRange: "₹2.80 - ₹4.50 LPA (Direct job) | Direct Lateral entry to 2nd Year B.Tech via TS ECET",
      highestPackageHeadline: "₹5.2 LPA (Core manufacturing supervisor)",
      realityNote: "Extremely popular destination for TS POLYCET top rankers. Top 40% students crack TS ECET with top ranks and enter JNTUH, OU, or top private B.Tech colleges in 2nd year.",
      reportingYear: "SBTET Telangana Review 2024",
      sourceDocument: "Department of Technical Education Telangana Audit"
    },
    officialUrl: "https://sbtet.telangana.gov.in",
    lastVerified: "October 2026",
    isSamplePreview: false
  },

  {
    id: "pjtsau-hyderabad",
    name: "Professor Jayashankar Telangana State Agricultural University (PJTSAU)",
    type: "State Agricultural University",
    state: "Telangana",
    district: "Hyderabad (Rajendranagar)",
    established: 2014,
    accreditation: "ICAR Accredited (Grade A) | Premier State Agricultural University",
    programsOffered: [
      "B.Sc (Hons) Agriculture (4 Years)",
      "B.Sc (Hons) Community Science",
      "B.Tech Agricultural Engineering",
      "2-Year Agricultural & Seed Technology Diplomas (after Class 10)"
    ],
    admissionRoute: "TG EAPCET (Agriculture Stream) & ICAR-CUET",
    annualFeesVerified: {
      convenorGovtQuota: "₹42,000 - ₹55,000 / year",
      selfFinanceQuota: "₹1,20,000 / year",
      feeReimbursementEligible: "Yes — Eligible under Telangana ePASS."
    },
    placementReality: {
      nirfReportedMedian: "₹5.50 LPA",
      medianSalaryRange: "₹4.50 - ₹9.00 LPA (Bank AFO Officers start at ₹8.5-₹10 LPA)",
      highestPackageHeadline: "₹14 LPA (International Agri-input corporation)",
      realityNote: "Excellent research farm facilities and high intake into NABARD, FCI, and State Agriculture Extension Officer gazetted posts.",
      reportingYear: "PJTSAU 2024 Placement Bureau",
      sourceDocument: "PJTSAU Official Annual Gazette"
    },
    officialUrl: "https://pjtsau.edu.in",
    lastVerified: "October 2026",
    isSamplePreview: false
  },

  {
    id: "nalsar-hyderabad",
    name: "NALSAR University of Law, Hyderabad",
    type: "National Law University (Autonomous State Statutory)",
    state: "Telangana",
    district: "Medchal-Malkajgiri (Shamirpet)",
    established: 1998,
    accreditation: "Bar Council of India Approved | NAAC A++ Grade | NIRF Law Rank: #3 in India",
    programsOffered: [
      "5-Year Integrated B.A. LL.B. (Hons)",
      "LL.M (Master of Laws)",
      "Integrated BBA-MBA"
    ],
    admissionRoute: "CLAT (Common Law Admission Test)",
    annualFeesVerified: {
      convenorGovtQuota: "₹2,65,000 - ₹3,10,000 / year (Includes tuition, hostel, and library access)",
      selfFinanceQuota: "N/A (Merit CLAT only)",
      feeReimbursementEligible: "Need-based financial scholarships available from University Corpus & State Domicile schemes."
    },
    placementReality: {
      nirfReportedMedian: "₹16.00 LPA (Tier-1 Corporate Law Cohort)",
      medianSalaryRange: "₹14.00 - ₹20.00 LPA (Leading corporate law firms)",
      highestPackageHeadline: "₹22 LPA (Domestic law firms) | International Magic Circle: £100,000+ (London training contract)",
      realityNote: "Among India's top 2 law schools. Corporate placement rate exceeds 90% for graduating students seeking firm jobs (Khaitan, Trilegal, CAM, SAM).",
      reportingYear: "NIRF 2024 Law Data",
      sourceDocument: "NALSAR Recruitment Coordination Committee (RCC) 2024 Report"
    },
    officialUrl: "https://www.nalsar.ac.in",
    lastVerified: "October 2026",
    isSamplePreview: false
  },

  // ==========================================
  // PREMIER CENTRAL INSTITUTES
  // ==========================================
  {
    id: "iit-hyderabad",
    name: "Indian Institute of Technology (IIT) Hyderabad",
    type: "Institute of National Importance (Central Govt)",
    state: "Telangana",
    district: "Sangareddy (Kandi)",
    established: 2008,
    accreditation: "Institute of National Importance | NIRF Engineering Rank: #8 in India",
    programsOffered: [
      "B.Tech (CSE, AI, Electrical, Mechanical, Engineering Physics, Biomedical, Chemical)",
      "B.Des (Bachelor of Design via UCEED)"
    ],
    admissionRoute: "JEE (Advanced) for B.Tech | UCEED for B.Des",
    annualFeesVerified: {
      convenorGovtQuota: "₹2,25,000 / year (100% Tuition Waiver for SC/ST/PwD and families with income < ₹1 Lakh)",
      selfFinanceQuota: "N/A",
      feeReimbursementEligible: "Central Government NSP / PM-USP Scholarships."
    },
    placementReality: {
      nirfReportedMedian: "₹20.00 LPA (B.Tech Cohort)",
      medianSalaryRange: "₹16.00 - ₹28.00 LPA",
      highestPackageHeadline: "₹65 LPA (Domestic) / ₹1.2 Cr (International - extremely few candidates)",
      realityNote: "Verified NIRF median is ₹20.0 LPA. Strong academic research collaboration with Japan (JICA).",
      reportingYear: "NIRF 2024 Engineering Report",
      sourceDocument: "IIT Hyderabad Office of Career Services 2024"
    },
    officialUrl: "https://www.iith.ac.in",
    lastVerified: "October 2026",
    isSamplePreview: false
  },

  {
    id: "nit-warangal",
    name: "National Institute of Technology (NIT) Warangal",
    type: "Institute of National Importance (Central Govt)",
    state: "Telangana",
    district: "Hanamkonda / Warangal",
    established: 1959,
    accreditation: "Institute of National Importance | NIRF Engineering Rank: #21 in India",
    programsOffered: [
      "B.Tech in 8 Engineering Disciplines (CSE, ECE, EEE, Mech, Civil, Chem, Biotech, Metallurgy)"
    ],
    admissionRoute: "JEE (Main) via JoSAA Counseling (50% Home State Telangana/AP Quota, 50% Other States Quota)",
    annualFeesVerified: {
      convenorGovtQuota: "₹1,85,000 / year (Fee remission based on family income under MoE rules)",
      selfFinanceQuota: "N/A",
      feeReimbursementEligible: "Central Government & State Welfare Reimbursements."
    },
    placementReality: {
      nirfReportedMedian: "₹15.00 LPA",
      medianSalaryRange: "₹11.00 - ₹19.00 LPA",
      highestPackageHeadline: "₹88 LPA (Top product recruiting firm)",
      realityNote: "One of India's founding Regional Engineering Colleges (REC). Consistent 85%+ overall placement rate across core and IT departments.",
      reportingYear: "NIRF 2024",
      sourceDocument: "NIT Warangal Center for Career Planning and Development"
    },
    officialUrl: "https://www.nitw.ac.in",
    lastVerified: "October 2026",
    isSamplePreview: false
  },

  {
    id: "aiims-mangalagiri",
    name: "All India Institute of Medical Sciences (AIIMS) Mangalagiri",
    type: "Institute of National Importance (Central Govt)",
    state: "Andhra Pradesh",
    district: "Guntur / Vijayawada",
    established: 2018,
    accreditation: "Institute of National Importance under PMSSY | Apex Healthcare Institute",
    programsOffered: [
      "MBBS (5.5 Years)",
      "B.Sc (Hons) Nursing"
    ],
    admissionRoute: "NEET (UG) - All India 100% Central Counseling via Medical Counseling Committee (MCC)",
    annualFeesVerified: {
      convenorGovtQuota: "₹5,856 TOTAL for complete 5.5-year MBBS course (Nominal Central Govt fees)",
      selfFinanceQuota: "N/A (Pure Central Government Merit)",
      feeReimbursementEligible: "Almost completely zero-cost tuition; subsidised hostel."
    },
    placementReality: {
      nirfReportedMedian: "₹12.00 LPA (Junior Resident starting stipend: ₹95,000/month on 7th Central Pay Commission Level-10)",
      medianSalaryRange: "₹11.50 - ₹15.00 LPA",
      highestPackageHeadline: "Government Pay Scale Level 10 (Doctors do not have commercial CTCs)",
      realityNote: "AIIMS degrees provide exceptional clinical prestige and direct pathways to INI-CET postgraduate residency in apex institutes.",
      reportingYear: "Ministry of Health and Family Welfare 2024 Audit",
      sourceDocument: "AIIMS Mangalagiri Academic Dean Official Disclosure"
    },
    officialUrl: "https://www.aiimsmangalagiri.edu.in",
    lastVerified: "October 2026",
    isSamplePreview: false
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COLLEGES_DATA };
}
