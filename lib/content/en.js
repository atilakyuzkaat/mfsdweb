// English site copy. Keys mirror tr.js.

const en = {
  lang: "en",
  langName: "English",
  switchTo: { label: "TR", aria: "Türkçeye geç" },

  meta: {
    home: {
      title: "MFSD | Maternal Fetal Health and Consulting",
      description:
        "MFSD brings perinatal medicine and digital health together: clinical consulting for hospitals, labour ward training and the PartoAI digital partograph.",
    },
    services: { title: "Services", description: "Perinatal and labour ward consulting, digital health solutions and training programmes for physicians, midwives and nurses." },
    projects: { title: "Projects", description: "MFSD's clinical and digital health projects, including the PartoAI digital partograph and labour decision support system." },
    partoai: {
      title: "PartoAI: digital partograph and labour decision support",
      description: "A digital partograph based on the WHO Labour Care Guide, with maternal early warning, NST/CTG assessment and Robson quality analysis. On-premise or Turkey-hosted deployment.",
    },
    team: { title: "Team", description: "The MFSD team: Clinical Director Prof. Resul Arısoy, MD, and IT Director M. Atıl Akyüz." },
    about: { title: "About", description: "About Maternal Fetal Sağlık ve Danışmanlık Hizmetleri Tic. Ltd. Şti. (MFSD): our purpose, how we work and company details." },
    contact: { title: "Contact", description: "Contact MFSD for a PartoAI demo, clinical consulting, training or partnerships." },
    privacy: { title: "Privacy notice", description: "MFSD privacy notice under the Turkish Personal Data Protection Law (KVKK)." },
    cookies: { title: "Cookie policy", description: "MFSD cookie policy." },
  },

  nav: [
    ["services", "Services"],
    ["projects", "Projects"],
    ["team", "Team"],
    ["about", "About"],
    ["contact", "Contact"],
  ],
  header: { demo: "Request a demo", menu: "Menu", close: "Close", home: "MFSD home", skip: "Skip to content", mainNav: "Main menu" },
  crumbHome: "Home",

  company: {
    registry: (no) => `Istanbul Trade Registry Office, Registry No: ${no}`,
    mersis: "MERSIS No",
    tagline: "Clinical consulting and digital health for mothers and babies",
  },

  ctg: { aria: "Drawing resembling a cardiotocography trace: fetal heart rate and uterine contractions", fhr: "Fetal heart rate", toco: "Uterine contractions" },

  home: {
    h1: "The right decision in the labour ward, at the right time.",
    lead: "MFSD is a health and consulting company that brings perinatal expertise and software together. We offer hospitals clinical consulting, training and the PartoAI digital partograph.",
    ctaPrimary: "Explore PartoAI",
    ctaSecondary: "Get in touch",
    asideTitle: "Clinical leadership",
    asideText: "Our clinical work is led by our Clinical Director, perinatologist Prof. Resul Arısoy, MD.",
    whatTitle: "What we do",
    whatText: "We work in three areas of maternal and newborn health, and each feeds the others: problems we see on the ward shape the product, and data from the product shapes our training.",
    servicesMore: "Service details",
    teamLink: "Meet the team",
    ctaTitle: "Let's talk about what we can do for your hospital",
    ctaText: "Write to us about a demo, a pilot, training or a consulting project. If you share your birth volume and current systems, we will prepare the first meeting around them.",
    ctaConsult: "Consulting enquiry",
  },

  services: [
    {
      id: "danismanlik",
      title: "Perinatal and labour ward consulting",
      text: "We review hospitals' labour ward processes against clinical guidelines and write high-risk pregnancy and obstetric emergency protocols together with the hospital team.",
      items: [
        "Labour ward process and protocol review",
        "Caesarean section rate analysis with the Robson classification",
        "Setting up maternal early warning (MEWS) and escalation pathways",
        "Quality indicators and audit readiness",
      ],
    },
    {
      id: "dijital",
      title: "Digital health solutions",
      text: "We turn clinical knowledge into software. Our first product, PartoAI, is a decision support system that follows labour on a digital partograph and alerts the team in time.",
      items: ["PartoAI digital partograph and decision support", "Integration with hospital information systems, HL7 and CTG central stations", "On-premise or Turkey-hosted deployment"],
      link: { key: "partoai", label: "Explore PartoAI" },
    },
    {
      id: "egitim",
      title: "Training programmes",
      text: "We run case-based, hands-on training for physicians, midwives and nurses, delivered on site or online depending on the hospital's needs.",
      items: ["Intrapartum CTG/NST interpretation (FIGO and NICHD classifications)", "Using the modern partograph with the WHO Labour Care Guide", "Obstetric emergency simulations"],
    },
  ],

  servicesPage: {
    title: "Services",
    lead: "We work with hospitals to improve labour ward quality: we assess the process, put the tools in place and train the team.",
    writeUs: "Enquire about this service",
    processTitle: "How a project starts",
    processText: "Every hospital has a different birth volume, team structure and infrastructure. We write our proposal after we have seen them.",
    steps: [
      ["Initial call", "We discuss your needs, birth volume and current systems."],
      ["On-site assessment", "We review labour ward processes, records and infrastructure."],
      ["Proposal and plan", "We put scope, timeline and success criteria in writing."],
      ["Delivery and measurement", "We start the pilot, track results with you and report on them."],
    ],
  },

  partoai: {
    status: "In clinical validation and pilot phase",
    lead: "Follow labour on screen instead of a paper partograph. PartoAI keeps the data in one place, tracks guideline thresholds for you and tells the team when action is needed.",
    origin: "Developed at MFSD under the clinical direction of Prof. Resul Arısoy, MD. Thresholds can be configured for each hospital.",
    demo: "Request a demo",
    modulesLink: "See the modules",
    disclaimer: "PartoAI is clinical decision support software and does not make diagnoses. Every output is presented for a healthcare professional's assessment, and the final decision rests with the physician.",
    modules: [
      ["Digital partograph", "Based on the WHO Labour Care Guide; cervical dilatation, fetal head descent, fetal heart rate and contractions are charted automatically."],
      ["Risk classification and alerts", "A risk group is assigned at admission; red and amber alerts are raised when thresholds are crossed."],
      ["Maternal early warning (MEWS)", "Vital signs produce a score and an escalation time; score-independent triggers are tracked separately."],
      ["NST/CTG assessment", "A rules engine and AI work together; if they disagree, the higher-risk category is used. The physician signs the official interpretation."],
      ["Caesarean and Robson analysis", "Births are sorted into the 10 Robson groups automatically; indications are tiered by strength of evidence and a printable quality report is produced."],
      ["Integration and security", "Hospital information system, HL7 and e-Nabız layer; role-based access, patient data encryption and a full audit trail."],
    ],
  },

  projectsPage: {
    title: "Projects",
    lead: "Projects born from problems our clinical team meets on the ward. None is released for use before it has been clinically validated.",
    validationTitle: "Our approach to clinical validation",
    validationLead: "A decision support tool is only as reliable as its agreement with expert decisions.",
    validation: [
      "PartoAI's thresholds and scoring rules are based on published guidelines (WHO Labour Care Guide, FIGO, NICHD, Robson) and are reviewed one by one by our clinical team.",
      "Before clinical use, the system's outputs are compared with expert physicians' decisions on real cases. Pilots start only after ethics and data protection requirements are met.",
    ],
    details: "PartoAI details",
  },

  partoaiPage: {
    lead: "A digital partograph and labour decision support system: labour ward software where midwives, nurses and physicians work on the same screen and thresholds are watched continuously.",
    modulesTitle: "Modules",
    modulesText: "Each module can be used on its own or together with the others. Thresholds and rules are configured for each hospital.",
    journeyTitle: "One patient's journey",
    journeyText: "PartoAI keeps the whole process in one record, from admission to the postnatal quality report.",
    journey: [
      ["Admission", "History and findings are entered; the risk group is assigned automatically."],
      ["Labour monitoring", "Examinations are plotted on the partograph; criteria for delayed progress are tracked."],
      ["Early warning", "The MEWS score and NST/CTG category are calculated and the team is alerted when needed."],
      ["Birth close-out", "Mode of birth and indication are recorded; a Robson group is assigned."],
      ["Quality analysis", "Indicators are reported at unit and physician level."],
    ],
    blocks: [
      ["Deployment options", "The software can run on the hospital's own servers (on-premise), so patient data never leaves the institution. A cloud deployment hosted in Turkey is also available."],
      ["Integration", "Connects to hospital information systems over HL7 and to CTG central stations through device output. The e-Nabız layer is ready for official authorisation."],
      ["Data security", "Role-based access (administrator, physician, midwife, nurse), patient data encryption, automatic backups and a full audit trail showing who changed what and when."],
    ],
    calloutTitle: "Decision support, not diagnosis.",
    callout: "PartoAI's alerts are presented for a healthcare professional's assessment. Clinical decisions and responsibility remain with the physician.",
    pilotTitle: "We are looking for pilot hospitals",
    pilotText: "We want to run pilots with high-volume labour wards that are open to digital change.",
    pilotCta: "Request a demo or pilot",
  },

  team: {
    title: "Team",
    lead: "Clinical experience and software engineering at the same table. Every product decision is made by a physician and an engineer together.",
    careerTitle: "Education and career",
    focusTitle: "Clinical interests",
    membershipsTitle: "Memberships",
    joinTitle: "Work with us",
    joinText: "If you would like to join our projects as a clinical adviser, researcher or pilot hospital, write to us.",
    joinCta: "Discuss a partnership",
    resul: {
      role: "Clinical Director",
      summary:
        "Specialist in Obstetrics and Gynaecology with a subspecialty in perinatology. He has focused more than twenty years of clinical experience on high-risk pregnancy, labour management and perinatal quality. At MFSD he is responsible for clinical content, protocols and the clinical validation of PartoAI.",
      focus: [
        "High-risk pregnancy care and detailed fetal ultrasound",
        "Gestational diabetes, pre-eclampsia, placenta praevia and placenta accreta",
        "Amniocentesis, fetal diagnosis and fetal therapy",
        "Birth planning and labour ward management",
      ],
      timeline: [
        ["2005", "Istanbul University Cerrahpaşa Faculty of Medicine"],
        ["2011", "Specialist in Obstetrics and Gynaecology, Okmeydanı Training and Research Hospital"],
        ["2015", "Subspecialty in Perinatology, Zeynep Kamil Women's and Children's Training and Research Hospital"],
        ["2015–2017", "Perinatology clinic and Deputy Chief Physician, Gaziantep Cengiz Gökçek Women's and Children's Hospital"],
        ["2017–2025", "Perinatologist, Memorial Ataşehir and Şişli hospitals"],
        ["2019", "Associate Professor of Obstetrics and Gynaecology"],
        ["2020", "Faculty member, Üsküdar University Faculty of Medicine"],
      ],
      memberships: ["Turkish Society of Perinatology", "World Association of Perinatal Medicine", "Turkish Society of Obstetrics and Gynecology", "Turkish Medical Association"],
    },
    atil: {
      role: "IT Director",
      summary:
        "Close to twenty years of experience in software development and enterprise IT. He leads PartoAI's architecture and development and works on hospital information systems, HL7 integration and health data security. He is also the founder of the health tourism platform MedicallAI.",
    },
  },

  about: {
    title: "About",
    lead: "MFSD is a health and consulting company focused on maternal and newborn health. It was founded in Istanbul and works with a team of perinatologists and software engineers.",
    whyTitle: "Why we exist",
    why: [
      "In labour wards, critical decisions are often made during busy shifts, from paper forms and scattered records. Warning signs defined in the guidelines can be missed under these conditions.",
      "We founded MFSD to turn clinical expertise in perinatology into processes, training and software that hospitals can use every day. Our aim is not to decide for clinical teams, but to put the right information in front of them at the right moment.",
    ],
    principlesTitle: "How we work",
    principles: [
      ["Guideline-based", "Every threshold, score and recommendation is based on published international guidelines, and its source is shown."],
      ["The physician decides", "Our products provide decision support; they do not diagnose. Clinical responsibility always rests with the healthcare professional."],
      ["Validation first", "No clinical feature is released before it has been validated against expert decisions."],
      ["Data stays with the hospital", "Patient data belongs to the hospital. We comply with Turkish data protection law and, where possible, keep data on the hospital's own servers."],
    ],
    companyTitle: "Company details",
    companyNote: "As required by Article 1524 of the Turkish Commercial Code (No. 6102).",
    facts: { legalName: "Registered name", shortName: "Short name", mersis: "MERSIS No", registry: "Trade registry", tax: "Tax office / no", address: "Registered address", email: "Email", kep: "Registered e-mail (KEP)" },
    registryValue: (no) => `Istanbul Trade Registry Office, Registry No: ${no}`,
    outro: ["Meet the team", "or", "get in touch"],
  },

  contact: {
    title: "Contact",
    lead: "Fill in the form for a demo, pilot, training or consulting enquiry. Your message goes straight to our team.",
    email: "Email",
    phone: "Phone",
    address: "Address",
    map: "Open in Maps",
    notice: "Please don't use this form for patient appointments or consultations. MFSD does not provide care directly to patients; we work with institutions.",
    form: {
      topics: [
        ["demo", "PartoAI demo request"],
        ["danismanlik", "Clinical consulting"],
        ["egitim", "Training programmes"],
        ["isbirligi", "Partnership / investment"],
        ["diger", "Other"],
      ],
      name: "Full name",
      org: "Organisation",
      orgPh: "Hospital, clinic or company",
      email: "Email",
      phone: "Phone",
      optional: "(optional)",
      topic: "Topic",
      message: "Your message",
      messagePh: "Tell us briefly about your institution, your birth volume and what you need.",
      consentPre: "I have read the ",
      consentLink: "privacy notice",
      consentPost: " and agree to my details being processed to answer my enquiry.",
      noPatientData: "Please don't include patient information or medical records in this form.",
      submit: "Send message",
      sending: "Sending…",
      doneTitle: "Message sent",
      doneText: "We've sent a confirmation to your email address. Our team will reply within two business days.",
      genericError: "The message couldn't be sent.",
    },
  },

  newsletter: {
    title: "Stay informed",
    text: "A few times a year we email updates on PartoAI pilot results, training dates and clinical publications.",
    label: "Your email address",
    placeholder: "name@hospital.com",
    submit: "Subscribe",
    sending: "Subscribing…",
    consentPre: "I agree to receive news and updates from MFSD by email. My data is processed in line with the ",
    consentLink: "privacy notice",
    consentPost: ", and I can unsubscribe at any time.",
    done: "You're subscribed. We'll send our next update to your inbox.",
    genericError: "Subscription couldn't be completed.",
  },

  footer: {
    site: "Site",
    legal: "Legal",
    contact: "Contact",
    privacy: "Privacy notice",
    cookies: "Cookie policy",
    rights: "All rights reserved.",
  },

  api: {
    badRequest: "The form data couldn't be read. Refresh the page and try again.",
    rate: "Too many messages in a short time. Try again in 10 minutes.",
    name: "Enter your full name.",
    email: "Enter a valid email address.",
    message: "Your message must be at least 10 characters.",
    kvkk: "Accept the privacy notice to continue.",
    unavailable: (mail) => `The form isn't working right now. Please email ${mail}.`,
    failed: (mail) => `The message couldn't be sent. Please write to ${mail} directly.`,
    subConsent: "Tick the consent box to subscribe.",
    subRate: "Too many attempts. Try again in a few minutes.",
    subUnavailable: "Newsletter sign-up isn't working right now. Try again later.",
    subFailed: "Subscription couldn't be completed. Please try again later.",
    autoReplySubject: "Your message has reached MFSD",
    autoReplyBody: (name, topic) => [`Dear ${name},`, `We've received your message about "${topic}". Our team will get back to you shortly.`],
  },

  notFound: { title: "Page not found", text: "The page you're looking for may have moved or been removed.", home: "Go to the home page", contact: "Contact us" },
};

export default en;
