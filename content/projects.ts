export const projectsContent = {
  comment: "// projects",
  heading: "Featured Projects",
  items: [
    {
      title: "Streamify — Real-Time Language Exchange Platform",
      description:
        "Full-stack real-time communication platform enabling multilingual users to connect based on language preferences. Engineered scalable messaging, language-based matching logic, and WebRTC-powered group video calls with secure JWT authentication and modular backend architecture.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Zustand",
        "TanStack Query",
        "WebRTC",
        "Stream SDK",
        "TailwindCSS",
      ],
      github: "https://github.com/lokendra0905/streamify",
      live: "https://streamify-p53i.onrender.com/",
    },
    {
      title: "BrandButler — Enterprise Loyalty & Recognition Platform",
      description:
        "Designed and developed a scalable loyalty and recognition platform used by enterprises to incentivize employees, consumers, and influencers through structured reward systems. Built secure role-based access, performance-optimized APIs, and cloud-integrated backend infrastructure.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "AWS",
        "REST APIs",
      ],
      github: undefined as string | undefined,
      live: "https://staging-frontend-user.brandbutlerindia.store/",
    },
    {
      title: "JuneBerry — Full-Stack eCommerce Platform",
      description:
        "Built a full-stack eCommerce application supporting product catalog management, cart workflows, authentication, and order processing. Implemented Redux-based state management, modular backend architecture, and responsive UI using Chakra UI.",
      tech: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "MongoDB",
        "Chakra UI",
      ],
      github: "https://github.com/salil-01/Juneberry",
      live: "https://juneberry.netlify.app/",
    },
  ],
} as const;