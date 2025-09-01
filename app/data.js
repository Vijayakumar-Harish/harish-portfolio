export const profile = {
  name: "Harish V",
  title: "Software Engineer — Full Stack",
  location: "Bangalore, India",
  email: "harish00411@gmail.com",
  phone: "+91 9880948479",
  summary:
    "Full-stack engineer (2.5+ years) skilled in React.js, Tailwind CSS, Fastify, GraphQL, gRPC, Kafka, MongoDB, Redis, and AWS. Built scalable fintech platforms, merchant onboarding APIs, and real-time data pipelines. Strong data analytics foundation (SQL, Power BI).",
  links: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    resume: "/Harish_V_Resume.pdf"
  },
  skills: [
    "React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)",
    "Node.js", "Fastify", "Express.js", "GraphQL", "REST", "gRPC",
    "MongoDB", "Redis", "MySQL",
    "Kafka", "Microservices", "AWS",
    "Git", "Linux", "Power BI", "ETL"
  ],
  experience: [
    {
      company: "Neokred Technologies",
      role: "Software Development Engineer I (Full Stack)",
      period: "Feb 2025 – Aug 2025",
      location: "Bangalore",
      bullets: [
        "Engineered a fintech platform for merchant payments, reporting, and bank API integrations; used by 50+ onboarding clients.",
        "Built responsive dashboards in React + Tailwind, reducing page load time by ~20%.",
        "Developed Fastify microservices with GraphQL and gRPC for modular deployments.",
        "Orchestrated real-time streams with Kafka processing 10k+ transactions/day for instant reporting.",
        "Optimized MongoDB queries with Redis caching, cutting API latency by ~30%.",
        "Delivered secure external bank API integrations aligned with compliance requirements."
      ]
    },
    {
      company: "Strategic Infra Services",
      role: "Technical Analyst",
      period: "Dec 2023 – Dec 2024",
      location: "Bangalore",
      bullets: [
        "Automated retrieval of GST data for 1,000+ transactions, improving data availability by 20%.",
        "Enhanced ETL workflows using SQL, improving data accuracy by 30% and reducing reporting errors by 15%.",
        "Built compliance dashboards in Excel & Power BI for streamlined tax reporting."
      ]
    },
    {
      company: "Tech Fortune Technologies",
      role: "Machine Learning Intern",
      period: "Aug 2022 – Oct 2022",
      location: "Bangalore",
      bullets: [
        "Developed and deployed a recommendation system that boosted engagement by ~25% in testing."
      ]
    }
  ],
  education: [
    {
      school: "Bangalore Institute of Technology",
      degree: "B.E, Computer Science & Engineering",
      period: "May 2023",
      extras: ["Published Paper: Trusted Crowdfunding Platform Using Smart Contracts"]
    }
  ]
};

export const projects = [
  // Existing resume projects
  {
    name: "Social Media Analytics Dashboard",
    tagline: "Insights on engagement, posts, and follower growth",
    description:
      "A full-stack dashboard to monitor and analyze social engagement metrics with role-based access and drilldowns.",
    stack: ["React", "Node.js", "MongoDB", "JWT", "Tailwind", "Chart.js"],
    highlights: [
      "Time-series charts for engagement KPIs",
      "Role-based access control with JWT",
      "Reusable component library and virtualized tables"
    ],
    links: { demo: "#", repo: "#" }
  },
  {
    name: "Task Management System",
    tagline: "Team tasks with roles and secure auth",
    description:
      "Kanban-style task app with project spaces, comments, and audit logs. Backend with Node + JWT.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    highlights: [
      "Drag-and-drop Kanban board",
      "Teams, roles, and granular permissions",
      "Server-side pagination and filtering"
    ],
    links: { demo: "#", repo: "#" }
  },

  // Added MERN + AI projects (realistic & portfolio-ready)
  {
    name: "E‑commerce MERN App",
    tagline: "Products, cart, checkout, admin",
    description:
      "Production-style MERN application with authentication, product management, checkout flow, and admin analytics.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Stripe", "JWT", "Tailwind"],
    highlights: [
      "Secure auth with refresh tokens, 2FA ready",
      "Stripe test-mode payments and webhooks",
      "Admin dashboard with sales, orders, inventory"
    ],
    links: { demo: "#", repo: "#" }
  },
  {
    name: "Real‑time Stock Dashboard",
    tagline: "WebSockets for live market feeds",
    description:
      "Real-time dashboard streaming stock ticks via WebSockets, with alerting and historical candles.",
    stack: ["MongoDB", "Express", "React", "Node.js", "WebSockets", "Chart.js"],
    highlights: [
      "Live tick charts with throttling/backpressure",
      "Alert rules and notifications",
      "Data caching for instant reloads"
    ],
    links: { demo: "#", repo: "#" }
  },
  {
    name: "Fake News Detection (NLP)",
    tagline: "TF‑IDF + Logistic Regression with FastAPI",
    description:
      "End-to-end NLP classifier trained on publicly available news datasets to identify misinformation. Deployed as an API with a simple React UI.",
    stack: ["Python", "scikit-learn", "FastAPI", "React", "Docker"],
    highlights: [
      "Text preprocessing pipeline (cleaning, lemmatization)",
      "TF‑IDF features + Logistic Regression baseline",
      "Containerized inference API with streaming logs"
    ],
    links: { demo: "#", repo: "#" }
  },
  {
    name: "Support Chatbot (GPT‑3.5)",
    tagline: "FAQ automation with guardrails",
    description:
      "Customer-support chatbot using OpenAI API with retrieval for FAQs and rate-limited, audited responses.",
    stack: ["Next.js", "OpenAI API", "Redis", "Upstash Ratelimit"],
    highlights: [
      "Retrieval-augmented answers from a docs index",
      "Moderation + guardrails, cost tracking",
      "Deployed on Vercel Edge for low latency"
    ],
    links: { demo: "#", repo: "#" }
  }
];
