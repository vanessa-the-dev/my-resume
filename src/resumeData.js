export const RESUME = {
  name: "Vanessa Nellyn Isidro",
  tagline: "Full-stack Software Engineer",
  location: "Gifu, Japan",
  email: "vanessanellyn@gmail.com",
  linkedin: "https://linkedin.com/in/vanessa-nellyn/",
  github: "https://github.com/vanessa-the-dev",
};

/* The query run by the home-page action buttons */
export const DEFAULT_QUERY = "who is Vanessa Isidro?";

/* Suggestions shown in the search dropdown */
export const SUGGESTIONS = [
  { q: "who is Vanessa Isidro?", key: "about" },
  { q: "Vanessa Isidro work experience", key: "work" },
  { q: "Vanessa Isidro academic experience", key: "education" },
  { q: "Vanessa Isidro skills", key: "skills" },
  { q: "Vanessa Isidro projects", key: "projects" },
  { q: "Vanessa Isidro contact", key: "contact" },
];

/* Result-page navigation tabs. The first (no `q`) marks the current results. */
export const SEARCH_TABS = [
  { icon: "🔎", label: "All" },
  { icon: "👤", label: "About", q: "who is Vanessa Isidro?" },
  { icon: "💼", label: "Work", q: "Vanessa Isidro work experience" },
  { icon: "🎓", label: "Education", q: "Vanessa Isidro academic experience" },
  { icon: "⋯", label: "More", q: "Vanessa Isidro projects" },
];

/* About page: profile blurb, section links, and "people also ask" */
export const ABOUT = {
  url: "https://vanessa.dev › about",
  // Rendered as: "{name} is a {tagline} based in {location} who {bio}"
  bio: "builds clean, user-friendly web applications. She blends an eye for design with solid engineering — turning ideas into products people enjoy using. Lifelong learner, problem-solver, and occasional cat enthusiast.",
  links: [
    { label: "Work experience", desc: "Roles & impact", q: "Vanessa Isidro work experience" },
    { label: "Education", desc: "Academic background", q: "Vanessa Isidro academic experience" },
    { label: "Skills", desc: "Tech & tools", q: "Vanessa Isidro skills" },
    { label: "Projects", desc: "Selected work", q: "Vanessa Isidro projects" },
  ],
  faq: [
    { label: "What is Vanessa's work experience?", q: "Vanessa Isidro work experience" },
    { label: "Where did Vanessa study?", q: "Vanessa Isidro academic experience" },
    { label: "What technologies does Vanessa use?", q: "Vanessa Isidro skills" },
    { label: "How can I contact Vanessa?", q: "Vanessa Isidro contact" },
  ],
};

/* Skills page: intro + categorized lists */
export const SKILLS = {
  url: "https://vanessa.dev › skills",
  title: "Skills & Tools",
  intro: "A mix of front-end, back-end, and design tooling.",
  groups: [
    { label: "Languages", items: "JavaScript, TypeScript, Python, SQL, HTML, CSS, PHP" },
    { label: "Frameworks", items: "React, Node.js, Express, Next.js, Laravel" },
    { label: "Tools", items: "Git, Figma, Docker, VS Code" },
    { label: "Strengths", items: "UI/UX, problem-solving, collaboration" },
  ],
};

/* Contact page: intro + contact lines (built from RESUME fields) */
export const CONTACT = {
  url: "https://vanessa.dev › contact",
  title: "Get in touch with Vanessa",
  intro: "Have a role or project in mind? Let's talk.",
  items: [
    { label: "Email", value: RESUME.email, href: `mailto:${RESUME.email}` },
    { label: "Location", value: RESUME.location },
    { label: "LinkedIn", value: RESUME.linkedin, href: `${RESUME.linkedin}` },
    { label: "GitHub", value: RESUME.github, href: `${RESUME.github}` },
  ],
};

/* Work history */
export const WORK = [
  {
    title: "Full-stack Software Engineer — System Advance Co., Ltd.",
    site: "Vanessa Isidro",
    url: "https://vanessa.dev › experience",
    date: "Feb 2024 – Present",
    summary:
      "Lead developer building multi-tenant SaaS and enterprise systems for the Japanese market — from requirements and database design through implementation and deployment.",
    bullets: [
      "LOCARAT — Multi-Tenant HR SaaS Platform (2026, in progress): lead developer of a SaaS platform for 100+ companies, with tenant isolation, role structures, and a scalable feature-flag architecture; delivered the first attendance module in 2 months while designing the broader 5-module platform.",
      "Higuchi Factory Attendance Management System (2025): built a workforce management system for 1,000+ factory employees with Japanese labor-law compliance, role-based approval workflows, and database optimizations for scalable performance.",
      "Traditional Japanese Inn Inventory System (2024).",
    ],
  },
  {
    title: "Backend Software Developer — Traxion Tech Inc.",
    site: "Vanessa Isidro",
    url: "https://vanessa.dev › experience",
    date: "Jul 2023 – Dec 2023",
    summary:
      "Onboarded into an unfamiliar stack (NestJS / TypeScript) with no prior professional experience and took on independent backend responsibilities within two months on TraxionPay, a banking app.",
    bullets: [
    ],
  },
  {
    title: "Frontend Web Developer (Intern) — Nuevasoltech Co. Inc.",
    site: "Vanessa Isidro",
    url: "https://vanessa.dev › experience",
    date: "Jun 2022 – Aug 2022",
    summary:
      "Developed and designed user interfaces for various cooperative websites across Mindanao.",
    bullets: [],
  },
];

/* Education */
export const EDUCATION = [
  {
    title: "Bachelor of Science in Computer Science — St. Mary's College of Tagum, Inc.",
    site: "Vanessa Isidro",
    url: "https://vanessa.dev › education",
    date: "Jun 2019 – May 2023",
    summary: "Graduated Magna Cum Laude and Batch Valedictorian, Class of 2023.",
    bullets: [
      "Programmer of the Year 2023",
      "Best Capstone of the Year 2023",
      "Student Council Service Awardee",
      "Relevant coursework: Data Structures, Databases, UI/UX Design.",
    ],
  },
];

/* Projects */
export const PROJECTS = [
  {
    title: "Interactive Résumé (this site!)",
    site: "GitHub",
    url: "https://github.com › vanessa",
    summary:
      "A playful résumé built to look and feel like a search engine — React + Vite + Tailwind, containerized with Docker.",
  },
  {
    title: "Task Manager App",
    site: "GitHub",
    url: "https://github.com › vanessa",
    summary:
      "Full-stack productivity app with React, Node.js and PostgreSQL. Drag-and-drop boards and real-time sync.",
  },
  {
    title: "Weather Dashboard",
    site: "GitHub",
    url: "https://github.com › vanessa",
    summary:
      "Clean, responsive dashboard consuming a public weather API with charts and saved locations.",
  },
];

/* Map a free-text query to a page key */
export const keyForQuery = (q) => {
  const s = (q || "").toLowerCase();
  if (/work|experience|job|career|employ/.test(s) && !/academic|school|education/.test(s))
    return "work";
  if (/academic|education|school|study|university|degree/.test(s)) return "education";
  if (/skill|tech|tool|stack/.test(s)) return "skills";
  if (/project|portfolio|github|built/.test(s)) return "projects";
  if (/contact|email|reach|hire|linkedin/.test(s)) return "contact";
  return "about"; // default: "who is Vanessa"
};
