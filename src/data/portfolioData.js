export const personalData = {
  name: "Mohammed Zakki Adnaan P",
  shortName: "Mohammed Zakki Adnaan",
  brand: "ZAKKI.DEV",
  title: "Python Full Stack & React.js Developer",
  tagline: "PYTHON FULL STACK & REACT.JS DEVELOPER SPECIALIZING IN REACT.JS, PYTHON, DJANGO, FASTAPI & MYSQL.",
  shortBio: "I'm Mohammed Zakki Adnaan, a BCA graduate and Python Full Stack & React.js Developer focused on building responsive and scalable web applications. I work across frontend interfaces, REST APIs, databases and deployment.",
  fullBio: "I'm Mohammed Zakki Adnaan, a BCA graduate and Python Full Stack & React.js Developer focused on building responsive and scalable web applications. I work across frontend interfaces, REST APIs, databases and deployment, with hands-on experience building and deploying real-world projects.",
  location: "Pernambut, Tamil Nadu, India",
  email: "zakkiadnan05@gmail.com",
  phone: "+91 9342954510",
  portfolioUrl: "https://dev-zakki.vercel.app/",
  githubUrl: "https://github.com/Zakki-05",
  linkedinUrl: "https://www.linkedin.com/in/mohammed-zakki-adnan-p/",
  resumeUrl: "#resume-modal",
  web3formsKey: "fce8e13e-66bb-4120-93ec-853bf96a629c",
  approach: [
    { step: "Architect", desc: "Design component hierarchy, normalized DB schemas, and REST endpoints." },
    { step: "Build", desc: "Develop responsive React frontends, custom hooks, and Django server logic." },
    { step: "Deploy", desc: "Ship production apps with CI/CD on Vercel and Render." },
    { step: "Optimize", desc: "Refactor legacy CSS into Tailwind, resolve cross-browser bugs, and audit UX." }
  ]
};

export const technicalSkillsGrouped = {
  frontend: [
    "HTML5", "CSS3", "JavaScript", "React.js", "JSX",
    "Tailwind CSS", "Bootstrap", "Responsive Web Design"
  ],
  backend: [
    "Python", "Django", "FastAPI", "REST APIs"
  ],
  database: [
    "MySQL"
  ],
  tools: [
    "Git", "GitHub", "VS Code"
  ],
  deployment: [
    "Vercel", "Render"
  ]
};

export const skillsCategories = [
  {
    category: "FRONTEND",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "JSX", "Tailwind CSS", "Bootstrap", "Responsive Web Design"]
  },
  {
    category: "BACKEND",
    skills: ["Python", "Django", "FastAPI", "REST APIs"]
  },
  {
    category: "DATABASE",
    skills: ["MySQL"]
  },
  {
    category: "TOOLS",
    skills: ["Git", "GitHub", "VS Code"]
  },
  {
    category: "DEPLOYMENT",
    skills: ["Vercel", "Render"]
  }
];

export const experienceData = [
  {
    id: "colan-infotech",
    company: "Colan Infotech Private Limited",
    role: "Full Stack Web Developer Intern",
    location: "Chennai, Tamil Nadu",
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
    location: "Tamil Nadu, India",
    period: "Jan 2025 – Feb 2026",
    details: [
      "Delivered pixel-perfect UI, translating Figma wireframes into responsive HTML5/CSS3/JS layouts with reduced iteration cycles.",
      "Built and deployed multiple responsive websites — including portfolio, e-commerce, and landing page projects — using React.js, Bootstrap, and JavaScript.",
      "Tested and fixed cross-browser layout inconsistencies across Chrome, Firefox, and Safari for client deliverables.",
      "Completed structured industrial training covering the full deployment lifecycle (Render, Vercel CI/CD) and modern development workflows.",
      "Collaborated in an Agile team environment, managing version control and sprint workflows via Git and GitHub."
    ]
  }
];

export const educationData = [
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    shortDegree: "BCA",
    institution: "Islamiah College (Autonomous)",
    location: "Vaniyambadi, Tamil Nadu, India",
    period: "2023 – 2026",
    status: "Completed / Graduating",
    description: "Data Structures, Object-Oriented Programming (OOP), Web Development, Database Management Systems (DBMS), Python Programming, and Software Engineering."
  },
  {
    id: "higher-secondary",
    degree: "Higher Secondary (Class XII)",
    shortDegree: "Class XII",
    institution: "Islamiah Higher Secondary School",
    location: "Vaniyambadi, Tamil Nadu, India",
    period: "2023",
    status: "Completed",
    description: "Tamil Nadu State Board Higher Secondary Education."
  }
];

export const featuredProject = {
  id: "jobflow",
  title: "JOBFLOW",
  subtitle: "Full Stack Job Platform",
  category: "FEATURED FULL STACK PLATFORM",
  isFeatured: true,
  description: "An AI-powered job application management platform designed to help users organize, track and manage their job applications efficiently with REST APIs and database integration.",
  overview: "JobFlow is a full-stack platform that solves the issue of disorganized job applications. It provides job seekers with a centralized pipeline to track applications from 'Applied' to 'Interviewing' and 'Offered'.",
  problem: "Job seekers struggle to track multiple application status changes, interview schedules, and response deadlines across multiple job boards.",
  solution: "JobFlow unifies all application workflows into a clean React dashboard backed by REST API services and database persistence.",
  myRole: "Full Stack Developer — Designed the frontend application architecture, UI components, REST API integrations, and database schemas.",
  technologies: ["React.js", "JavaScript", "Tailwind CSS", "Python", "Django", "REST API", "Node.js", "Express.js", "MySQL"],
  keyFeatures: [
    "Centralized Job Application Pipeline (Applied → Interviewing → Offered)",
    "RESTful API Integration for CRUD operations on job cards",
    "Application Analytics & Search / Category Filtering",
    "AI-Assisted Application Insights & Summary Features",
    "Responsive Mobile-First Dashboard UI"
  ],
  liveDemo: "https://jobflow-zakki-05.vercel.app/",
  github: "https://github.com/Zakki-05/jobflow",
  backendUrl: "https://jobflow-backend-1v6a.onrender.com/"
};

export const projectsData = [
  featuredProject,
  {
    id: "pernambut-connect",
    title: "PERNAMBUT CONNECT",
    subtitle: "Full Stack Community Platform",
    category: "COMMUNITY PLATFORM",
    description: "Architected a full-stack community platform with JWT authentication and protected-route guards, managing session persistence across React and Django without third-party auth providers.",
    overview: "Pernambut Connect is a community web portal that empowers local residents to share posts, updates, and community notices in a secure environment.",
    problem: "Lack of a dedicated local platform for verified community discussions and notice publishing.",
    solution: "Built a custom JWT-authenticated web platform with role-based access control and persistent storage.",
    myRole: "Full Stack Developer — Developed React UI views, JWT auth flow, Django API endpoints, and MySQL database structure.",
    technologies: ["React.js", "Tailwind CSS", "Python", "Django", "MySQL", "JWT Auth", "Axios"],
    keyFeatures: [
      "JWT Authentication & Session Guards",
      "Role-Based User Permissions",
      "RESTful Django endpoints for posts & user profiles",
      "Centralized Axios Error Handling & Full CRUD Operations"
    ],
    github: "https://github.com/Zakki-05/Pernambut-Connect",
    liveDemo: "https://dev-zakki.vercel.app/"
  },
  {
    id: "pernambut-hub",
    title: "PERNAMBUT HUB",
    subtitle: "Civic Issue Tracking Platform",
    category: "CIVIC PLATFORM",
    description: "Built a status-driven issue lifecycle (submitted → in-progress → resolved) with role-based permissions distinguishing residents from administrators.",
    overview: "Pernambut Hub enables citizens to submit local civic issues and track resolution progress in real time.",
    problem: "Civic issue tracking is often opaque, leading to unaddressed infrastructure and public maintenance requests.",
    solution: "Created an audited issue workflow with clear status transitions and administrative review portals.",
    myRole: "Backend & Database Developer — Designed normalized MySQL schema using Django ORM and issue status workflow endpoints.",
    technologies: ["Python", "Django", "MySQL", "Django ORM", "REST API", "Role-Based Auth"],
    keyFeatures: [
      "Status-Driven Issue Lifecycle (Submitted → In-Progress → Resolved)",
      "Normalized MySQL Schema with Audit Trails",
      "Admin Approval & Department Categorization System"
    ],
    github: "https://github.com/Zakki-05/Pernambut-Hub",
    liveDemo: "https://dev-zakki.vercel.app/"
  },
  {
    id: "expense-tracker",
    title: "EXPENSE TRACKER",
    subtitle: "Client-Side Budgeting Dashboard",
    category: "FINANCIAL DASHBOARD",
    description: "Built a responsive income and expense management dashboard with dynamic charts and local storage persistence for a fully client-side budgeting tool.",
    overview: "A lightweight financial tracking web application that allows users to monitor monthly spending, categorize expenses, and visualize income vs expenditure.",
    problem: "Complex budgeting tools often require user registration and cloud sync for simple personal tracking.",
    solution: "A zero-latency, privacy-first client-side web application leveraging browser LocalStorage for instant persistence.",
    myRole: "Frontend Developer — Built React state handlers, budgeting calculations, dynamic visual charts, and responsive UI.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "LocalStorage", "Chart.js / Motion"],
    keyFeatures: [
      "Real-Time Expense & Income Balance Calculation",
      "Category Filtering & Dynamic Spending Summary",
      "LocalStorage Persistence for Data Privacy",
      "Fully Responsive Dashboard Interface"
    ],
    github: "https://github.com/Zakki-05/expense-tracker",
    liveDemo: "https://dev-zakki.vercel.app/"
  },
  {
    id: "tech-zone",
    title: "TECH ZONE",
    subtitle: "E-Commerce Gadgets Website",
    category: "E-COMMERCE",
    description: "A responsive e-commerce web interface for browsing smartphones, smartwatches, earbuds and laptops with product pagination and category filters.",
    overview: "Tech Zone is an e-commerce catalog site designed to showcase tech products with clean navigation and mobile-responsive product cards.",
    problem: "E-commerce stores need fast-loading, mobile-optimized product catalogs with intuitive filtering.",
    solution: "Built clean product grid pages with interactive category navigation and responsive breakpoints.",
    myRole: "Frontend Developer — Designed and implemented responsive HTML5/CSS3 layouts, product grids, and JavaScript pagination.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    keyFeatures: [
      "Product Category Filtering (Smartphones, Smartwatches, Earbuds, Laptops)",
      "Interactive Product Detail Modals & Pagination",
      "Responsive Layout across Mobile, Tablet, and Desktop Viewports"
    ],
    github: "https://github.com/Zakki-05/ownProject",
    liveDemo: "https://dev-zakki.vercel.app/"
  },
  {
    id: "al-huda",
    title: "AL HUDA ISLAMIC SCHOOL",
    subtitle: "Institutional School Website",
    category: "INSTITUTIONAL SITE",
    description: "Delivered a production institutional website with semantic HTML5 and CSS media queries, covering viewports from 320px to 1440px for consistent cross-device rendering.",
    overview: "An official web portal for Al Huda Islamic School featuring academic curriculum, announcements, photo gallery, and contact information.",
    problem: "School administration needed a reliable online presence accessible across mobile phones and desktop computers.",
    solution: "Developed a semantic, accessible web portal optimized for cross-browser performance.",
    myRole: "Frontend Developer — Wrote semantic HTML5 structure, custom CSS media query stylesheets, and interactive navigation.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design"],
    keyFeatures: [
      "Semantic HTML5 & Accessible Heading Hierarchy",
      "Cross-Device Media Queries (320px to 1440px)",
      "Interactive Image Gallery & Announcement Sections"
    ],
    github: "https://github.com/Zakki-05",
    liveDemo: "https://dev-zakki.vercel.app/"
  },
  {
    id: "digital-marketing",
    title: "DIGITAL MARKETING AGENCY",
    subtitle: "Agency Showcase Website",
    category: "BUSINESS SITE",
    description: "A responsive digital marketing agency website featuring service showcases, portfolio highlights, client testimonials, and a contact form.",
    overview: "A business showcase website built for marketing agencies to highlight services like SEO, content strategy, and social media management.",
    problem: "Agencies require crisp, high-converting landing pages with clear service breakdowns.",
    solution: "Constructed a modular Bootstrap interface with distinct section layouts and contact CTA buttons.",
    myRole: "Frontend Developer — Implemented Bootstrap grid layouts, component styling, and form interactivity.",
    technologies: ["Bootstrap", "JavaScript", "HTML5", "CSS3"],
    keyFeatures: [
      "Modular Service Cards & Interactive Portfolio Grid",
      "Bootstrap Responsive Layout Grid",
      "Contact Form Interface with Front-End Validation"
    ],
    github: "https://github.com/Zakki-05/Digital-Marketing",
    liveDemo: "https://dev-zakki.vercel.app/"
  },
  {
    id: "portfolio-website",
    title: "PORTFOLIO WEBSITE",
    subtitle: "Personal Developer Portfolio",
    category: "PERSONAL PORTFOLIO",
    description: "Designed and deployed a responsive, SEO-friendly personal portfolio with dark developer aesthetic and micro-animations, optimized via Vite and Tailwind CSS.",
    overview: "My official personal portfolio website showcasing full-stack projects, skills, experience, and contact channels for tech recruiters.",
    problem: "Recruiters need a fast, scannable, and comprehensive showcase of development capabilities.",
    solution: "Engineered a component-driven React & Tailwind portfolio with interactive modals and dark mode theme.",
    myRole: "Full Stack / Frontend Developer — Architected the React application, CSS design system, and responsive UI components.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vite", "JavaScript"],
    keyFeatures: [
      "Custom Editorial Dark Theme & Modern Typography",
      "Interactive Project Case Study Modals & Resume Previewer",
      "SEO Metadata & Structured JSON-LD Schema",
      "100% Mobile-Responsive & Accessible Layout"
    ],
    github: "https://github.com/Zakki-05/zakki-s-new-portfolio",
    liveDemo: "https://dev-zakki.vercel.app/"
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
  portfolio: "https://dev-zakki.vercel.app/"
};
