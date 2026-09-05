export const personalData = {
  name: "Mohammed Zakki Adnaan P",
  shortName: "Mohammed Zakki Adnaan",
  brand: "ZAKKI.DEV",
  title: "Frontend Developer | React.js | Full-Stack Fundamentals",
  tagline: "FRONTEND DEVELOPER WITH A FULL-STACK FOUNDATION IN REACT.JS, DJANGO & MYSQL.",
  shortBio: "Frontend Developer with a full-stack foundation in React.js, Django, and MySQL, having shipped multiple production applications with hands-on delivery experience across two full-stack internships in Agile team settings.",
  fullBio: "Frontend Developer with a full-stack foundation in React.js, Django, and MySQL, having shipped multiple production applications — including a JWT authenticated community platform with role-based access control. Strong in responsive, component-driven UI development and REST API integration, with hands-on delivery experience across two full-stack internships in Agile team settings. Currently deepening expertise in TypeScript and Next.js. Seeking a Frontend/React Developer role in Bangalore, Chennai, or remote-first teams.",
  location: "Pernambut, Tamil Nadu, India",
  email: "zakkiadnan05@gmail.com",
  phone: "+91 9342954510",
  portfolioUrl: "https://zakki-dev.netlify.app/",
  githubUrl: "https://github.com/Zakki-05",
  linkedinUrl: "https://www.linkedin.com/in/mohammed-zakki-adnan-p/",
  resumeUrl: "#resume-modal",
  approach: [
    { step: "Architect", desc: "Design component hierarchy, normalized DB schemas, and REST endpoints." },
    { step: "Build", desc: "Develop responsive React frontends, custom hooks, and Django server logic." },
    { step: "Deploy", desc: "Ship production apps with CI/CD on Netlify, Render, and Vercel." },
    { step: "Optimize", desc: "Refactor legacy CSS into Tailwind, resolve cross-browser bugs, and audit UX." }
  ]
};

export const technicalSkillsGrouped = {
  frontend: [
    "React.js", "React Hooks", "JavaScript (ES6+)", "HTML5", "CSS3",
    "Tailwind CSS", "Bootstrap", "JSX", "Responsive & Mobile-First Design"
  ],
  backend: [
    "Python", "Django", "REST API Development & Integration", "Authentication", "CRUD Operations"
  ],
  database: [
    "MySQL", "Database Design"
  ],
  tools: [
    "Git", "GitHub", "VS Code", "Chrome DevTools", "Postman", "Netlify", "Render"
  ],
  concepts: [
    "Component-Based Architecture", "Data Structures", "OOP", "DBMS",
    "Cross-Browser Compatibility", "UI/UX Design", "Problem Solving"
  ],
  learning: [
    "TypeScript", "Next.js", "Redux", "Jest"
  ]
};

export const skillsData = [
  { name: "React.js", category: "Frontend" },
  { name: "React Hooks", category: "Frontend" },
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "Python", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "REST API Integration", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Netlify & Render", category: "Tools" },
  { name: "TypeScript (Learning)", category: "Concepts" },
  { name: "Next.js (Learning)", category: "Concepts" }
];

export const experienceData = [
  {
    id: "colan-infotech",
    company: "Colan Infotech Private Limited",
    role: "Full Stack Web Developer Intern",
    location: "Chennai",
    period: "Mar 2026 – Jun 2026",
    details: [
      "Built and maintained responsive UI components with React.js and JavaScript, ensuring consistent rendering across Chrome, Firefox, and Edge.",
      "Integrated REST APIs with front-end features, streamlining data flow between client and backend services.",
      "Identified and resolved front-end bugs tracked through Agile sprint boards, improving code stability and reducing reopened tickets.",
      "Refactored legacy CSS and Bootstrap layouts into reusable, mobile-first responsive components.",
      "Participated in daily stand-ups, sprint planning, and peer code reviews within a cross-functional Agile team."
    ]
  },
  {
    id: "aspirasys-intern",
    company: "AspiraSys",
    role: "Frontend Developer Intern",
    location: "Tamil Nadu",
    period: "Jan 2025 – Feb 2026",
    details: [
      "Delivered pixel-perfect, WCAG-compliant UI, translating Figma wireframes into responsive HTML5/CSS3/JS and reducing design-review iterations.",
      "Built and deployed multiple responsive websites — including portfolio, e-commerce, and landing page projects — using React.js, Bootstrap, and JavaScript.",
      "Tested and fixed cross-browser layout inconsistencies across Chrome, Firefox, and Safari for all client deliverables.",
      "Completed structured industrial training covering the full deployment lifecycle (Netlify, Render CI/CD) and AI-assisted development workflows.",
      "Collaborated in an Agile team environment, managing version control and sprint workflows via Git and GitHub."
    ]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Islamiah College (Autonomous)",
    location: "Vaniyambadi, Tamil Nadu, India",
    period: "2023 – 2026",
    status: "Completed / Graduating",
    description: "Data Structures, OOP, Web Development, DBMS, Python Programming, and Software Engineering."
  }
];

export const projectsData = [
  {
    id: "pernambut-connect",
    title: "PERNAMBUT CONNECT",
    category: "COMMUNITY PLATFORM",
    isFeatured: true,
    description: "Architected a full-stack community platform with JWT authentication and protected-route guards, managing session persistence across React and Django without third-party auth providers.",
    highlights: [
      "Designed RESTful Django endpoints for posts, profiles, and community interactions, consumed via Axios with centralized error handling and full CRUD support.",
      "Built with React.js, Tailwind CSS, Django, and MySQL."
    ],
    technologies: ["REACT.JS", "TAILWIND CSS", "DJANGO", "MYSQL", "JWT AUTH", "AXIOS"],
    github: "https://github.com/Zakki-05/Pernambut-Connect",
    liveDemo: "https://zakki-dev.netlify.app/"
  },
  {
    id: "pernambut-hub",
    title: "PERNAMBUT HUB",
    category: "CIVIC ISSUE TRACKING PLATFORM",
    isFeatured: true,
    description: "Built a status-driven issue lifecycle (submitted → in-progress → resolved) with role-based permissions distinguishing residents from administrators.",
    highlights: [
      "Modeled a normalized MySQL schema via Django ORM for issues, users, and audit-trail records, avoiding duplication across categorization and status history."
    ],
    technologies: ["DJANGO", "MYSQL", "PYTHON", "ROLE-BASED AUTH", "DJANGO ORM"],
    github: "https://github.com/Zakki-05/Pernambut-Hub",
    liveDemo: "https://zakki-dev.netlify.app/"
  },
  {
    id: "jobflow",
    title: "JOBFLOW",
    category: "AI-POWERED JOB APPLICATION PLATFORM",
    isFeatured: true,
    description: "An AI-powered job application management platform designed to help users organize, track and manage their job applications efficiently with REST APIs and database integration.",
    technologies: ["REACT.JS", "NODE.JS", "EXPRESS.JS", "MYSQL", "AI"],
    github: "https://github.com/Zakki-05/jobflow",
    liveDemo: "https://jobflow-zakki-05.vercel.app/",
    backendUrl: "https://jobflow-backend-1v6a.onrender.com/"
  },
  {
    id: "al-huda",
    title: "AL HUDA ISLAMIC SCHOOL",
    category: "INSTITUTIONAL SITE",
    description: "Delivered a production institutional website with semantic HTML5 and CSS media queries, covering viewports from 320px to 1440px for consistent cross-device rendering.",
    technologies: ["HTML5", "CSS3", "JAVASCRIPT", "RESPONSIVE DESIGN"],
    github: "https://github.com/Zakki-05",
    liveDemo: "https://zakki-dev.netlify.app/"
  },
  {
    id: "expense-tracker",
    title: "EXPENSE TRACKER",
    category: "CLIENT-SIDE BUDGETING DASHBOARD",
    description: "Built a responsive income and expense management dashboard with dynamic charts and local storage persistence for a fully client-side budgeting tool.",
    technologies: ["REACT.JS", "TAILWIND CSS", "LOCALSTORAGE"],
    github: "https://github.com/Zakki-05/expense-tracker",
    liveDemo: "https://zakki-dev.netlify.app/"
  },
  {
    id: "portfolio-website",
    title: "PORTFOLIO WEBSITE",
    category: "PERSONAL PORTFOLIO",
    description: "Designed and deployed a responsive, SEO-friendly personal portfolio with a dark theme and Framer Motion animations, optimized for performance via code splitting.",
    technologies: ["REACT.JS", "TAILWIND CSS", "FRAMER MOTION", "GSAP"],
    github: "https://github.com/Zakki-05/zakki-s-new-portfolio",
    liveDemo: "https://zakki-dev.netlify.app/"
  }
];

export const certificationsData = [
  {
    title: "Industrial Training: Web Development, AI Tools & Deployment Platforms",
    issuer: "AspiraSys"
  },
  {
    title: "Flask Workshop",
    issuer: "Sacred Heart College"
  }
];

export const achievementsData = [
  {
    title: "1st Place — Pirates Pursuits",
    event: "TECH-FRENZY 2K25"
  },
  {
    title: "3rd Prize — ADZ-AP",
    event: "SAIT 2025 Symposium"
  }
];

export const socialData = {
  email: "zakkiadnan05@gmail.com",
  phone: "+91 9342954510",
  location: "Pernambut, Tamil Nadu, India",
  github: "https://github.com/Zakki-05",
  linkedin: "https://www.linkedin.com/in/mohammed-zakki-adnan-p/",
  portfolio: "https://zakki-dev.netlify.app/"
};
