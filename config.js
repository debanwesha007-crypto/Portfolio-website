// ============================================================
//  PORTFOLIO CONFIG — Edit this file to update your portfolio
// ============================================================

const CONFIG = {
  // --- Personal Info ---
  name: "Alex Rivera",
  title: "Creative Developer & Designer",
  tagline: "I build things that live on the internet.",
  email: "alex@example.com",
  location: "San Francisco, CA",
  avatar: "", // URL to your photo, or leave empty for initials

  // --- Social Links ---
  social: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    dribbble: "", // leave empty to hide
    resume: "#", // link to your resume PDF
  },

  // --- About Section ---
  about: {
    bio: [
      "I'm a full-stack developer with 5+ years of experience crafting digital experiences that balance beautiful design with clean, scalable code.",
      "When I'm not pushing pixels or wrangling APIs, you'll find me hiking mountain trails, experimenting with generative art, or obsessing over the perfect cup of coffee.",
    ],
    skills: [
      "JavaScript / TypeScript",
      "React & Next.js",
      "Node.js",
      "Python",
      "Figma & UI Design",
      "PostgreSQL",
      "AWS / Cloud",
      "GraphQL",
    ],
  },

  // --- Projects ---
  projects: [
    {
      title: "Luminary Dashboard",
      description:
        "A real-time analytics platform for SaaS businesses. Built with React, D3.js, and WebSockets — serves 10k+ daily active users.",
      tags: ["React", "D3.js", "Node.js", "WebSocket"],
      link: "#",
      github: "#",
      featured: true,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "Nomad Planner",
      description:
        "AI-powered travel itinerary generator. Users describe their dream trip and get a full plan in seconds using GPT-4 and Google Maps API.",
      tags: ["Next.js", "OpenAI", "Tailwind", "Prisma"],
      link: "#",
      github: "#",
      featured: true,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      title: "Codebeam CLI",
      description:
        "A developer productivity tool that scaffolds full-stack apps from a single config file. 2k+ GitHub stars.",
      tags: ["Go", "CLI", "Open Source"],
      link: "#",
      github: "#",
      featured: true,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      title: "Pixel Canvas",
      description:
        "Collaborative pixel art tool — like MS Paint meets Google Docs. Built with Rust + WebAssembly for performance.",
      tags: ["Rust", "WASM", "Canvas API"],
      link: "#",
      github: "#",
      featured: false,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      title: "Stockwave",
      description:
        "Portfolio tracker with sentiment analysis pulled from Reddit and Twitter using NLP models.",
      tags: ["Python", "NLP", "FastAPI", "React"],
      link: "#",
      github: "#",
      featured: false,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      title: "Habitflow",
      description:
        "Habit tracking iOS app with streak visualizations and smart reminders built with React Native.",
      tags: ["React Native", "Expo", "SQLite"],
      link: "#",
      github: "#",
      featured: false,
      gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    },
  ],

  // --- Experience ---
  experience: [
    {
      role: "Senior Frontend Engineer",
      company: "Vercel",
      period: "2022 — Present",
      description:
        "Led development of the new dashboard UI, improving load times by 40%. Mentored 3 junior engineers and drove adoption of TypeScript across the team.",
    },
    {
      role: "Full-Stack Developer",
      company: "Stripe",
      period: "2020 — 2022",
      description:
        "Built internal tooling used by 500+ employees. Contributed to the public API documentation and developer experience initiatives.",
    },
    {
      role: "Frontend Developer",
      company: "Freelance",
      period: "2018 — 2020",
      description:
        "Designed and built websites for 30+ clients ranging from local businesses to Series A startups.",
    },
  ],

  // --- Footer ---
  footer: {
    message: "Designed & built by Alex Rivera",
    year: new Date().getFullYear(),
  },
};
