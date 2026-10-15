export interface Project {
  slug: string;
  name: string;
  role: string;
  featured?: boolean;
  summary: string;
  tech: string[];
  overview: string;
  problem: string;
  steps: { title: string; text: string }[];
  features: string[];
  /** Optional. Fill in https URLs and the buttons appear. */
  links: { repo?: string; demo?: string };
}

export const ME = {
  name: "Piyush Kumar Singh",
  email: "piyushk1302@gmail.com",
  phone: "+91-6200014853",
  github: "https://github.com/piyushk1302",
  linkedin: "https://www.linkedin.com/in/piyushk1302",
  /** Optional: put a photo in /public and set e.g. "/avatar.jpg" to replace the cartoon. */
  avatar: "",
  resumePdf: "/Piyush_Kumar_Resume.pdf",
};

export const HEADLINE = ["Full stack", "AI engineer"];

export const PHRASES = [
  "RAG pipelines that stay grounded.",
  "real-time backends with Socket.io.",
  "accessible React interfaces.",
  "GenAI features inside real products.",
];

export const MARQUEE = ["React", "Node.js", "Express", "PostgreSQL", "Python", "LangChain", "LangGraph", "OpenAI API", "TypeScript", "RAG", "Java", "C++", "WebSockets", "Docker", "Tailwind CSS", "Radix UI"];

export interface Highlight {
  icon: "ai" | "ui" | "team";
  title: string;
  text: string;
}

export const EXPERIENCE = {
  company: "Mindmatrix",
  role: "Software Development Intern",
  type: "Internship",
  dates: "Jan 2026 — May 2026",
  place: "Bangalore",
  summary: "Built GenAI product features and production UI as part of a cross-functional engineering team.",
  /** One short line. Keep products, clients, tools and metrics out. */
  confidential: "Internal company products · details confidential, happy to discuss in an interview",
  highlights: [
    { icon: "ai", title: "GenAI features", text: "AI-assisted conversational interfaces and content generation flows, integrated into the core product experience." },
    { icon: "ui", title: "Production UI", text: "Component-based UI features shipped in agile sprint cycles, under mentor review." },
    { icon: "team", title: "Team workflow", text: "Sprint planning, peer code review and technical documentation." },
  ] as Highlight[],
};

export const EDUCATION = {
  school: "Visvesvaraya Technological University",
  degree: "B.E. Computer Science & Engineering",
  dates: "Dec 2022 — Jun 2026",
  note: "Bangalore · CGPA 8.9/10",
};

export const SKILLS: Record<string, string[]> = {
  "AI / GenAI": ["LLM", "RAG", "LangGraph", "LangChain", "OpenAI API", "Prompt Engineering"],
  Backend: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Microservices"],
  Frontend: ["React.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "SQL"],
  Languages: ["C++", "Java", "JavaScript", "Python"],
  Tools: ["Git", "GitHub", "Docker", "AWS CLI", "Postman", "Linux"],
};

export const STICKERS = [
  { name: "React", bg: "#61dafb", fg: "#0b1b22", x: 3, y: 130, r: -8 },
  { name: "Node.js", bg: "#6cc24a", fg: "#0d1a08", x: 86, y: 210, r: 7 },
  { name: "PostgreSQL", bg: "#336791", fg: "#fff", x: 6, y: 520, r: 6 },
  { name: "Docker", bg: "#2496ed", fg: "#fff", x: 84, y: 640, r: -6 },
  { name: "TypeScript", bg: "#3178c6", fg: "#fff", x: 2, y: 980, r: -5 },
  { name: "LangChain", bg: "#12304a", fg: "#5ee7ff", x: 82, y: 1160, r: 9 },
  { name: "Python", bg: "#ffd43b", fg: "#111a36", x: 8, y: 1400, r: 5 },
  { name: "pgvector", bg: "#1a2547", fg: "#5ee7ff", x: 88, y: 1620, r: -10 },
];

export const PROJECTS: Project[] = [
  {
    slug: "learnlens",
    name: "LearnLens",
    role: "AI video learning assistant",
    featured: true,
    summary: "Answers questions about a video using only the transcript passages that matter, not the whole transcript.",
    tech: ["LangChain", "OpenAI API", "PostgreSQL", "pgvector"],
    overview: "A retrieval-augmented generation (RAG) assistant that answers questions about a video using its transcript.",
    problem: "Sending a full transcript to an LLM is wasteful and gives unfocused answers. LearnLens retrieves only the passages relevant to each query and builds the answer from those.",
    steps: [
      { title: "Chunk", text: "Video transcripts are split into chunks." },
      { title: "Embed", text: "Each chunk is embedded with the OpenAI embeddings API." },
      { title: "Index", text: "Embeddings are indexed in PostgreSQL with pgvector." },
      { title: "Retrieve", text: "Semantic retrieval pulls the transcript chunks most relevant to the query." },
      { title: "Generate", text: "LangChain orchestrates retrieval, prompt construction and generation." },
    ],
    features: [
      "Summaries and answers grounded in the most relevant transcript chunks, not the whole transcript.",
      "Follow-up Q&A with session-level conversational memory: multi-turn questions stay grounded in retrieved content and prior context.",
      "Topic-based quizzes generated from retrieved transcript segments using structured LLM output.",
    ],
    links: {},
  },
  {
    slug: "devlink",
    name: "DevLink",
    role: "Real-time developer networking",
    summary: "Developer networking with live messaging, activity feeds and profile search.",
    tech: ["Node.js", "Express", "Socket.io", "PostgreSQL", "React", "JWT"],
    overview: "A networking platform for developers with live messaging, activity feeds and profile search.",
    problem: "Developers need a place to find each other, connect and talk in real time.",
    steps: [
      { title: "Client", text: "React frontend." },
      { title: "API", text: "Node.js and Express.js, with rate limiting middleware on the API." },
      { title: "Auth", text: "JWT authentication with refresh token rotation and hardened session handling." },
      { title: "Real-time", text: "Socket.io for bi-directional communication: live messaging and activity feeds." },
      { title: "Data", text: "Normalized PostgreSQL schemas for developer connection graphs and profile data." },
    ],
    features: [
      "Live messaging and activity feeds over Socket.io.",
      "JWT auth with refresh token rotation and hardened session handling.",
      "Full-text profile search using PostgreSQL tsvector indices.",
      "API rate limiting middleware.",
      "Normalized schemas modelling developer connection graphs and profiles.",
    ],
    links: {},
  },
  {
    slug: "glitchpop",
    name: "GlitchPop",
    role: "React UI component library",
    summary: "Accessible React components in one reusable, typed library.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "Shadcn UI"],
    overview: "A reusable React component library built for accessibility and theming.",
    problem: "UI logic was duplicated across projects. GlitchPop centralizes it into a single reusable library.",
    steps: [
      { title: "Primitives", text: "Radix UI primitives as the foundation." },
      { title: "Styling", text: "Tailwind CSS, with design tokens for theming." },
      { title: "Components", text: "Modals, forms, tabs and buttons in a fully typed TypeScript architecture." },
      { title: "Accessibility", text: "Built to adhere to WCAG 2.1 standards." },
      { title: "Reuse", text: "One library replacing duplicated UI logic across consuming projects." },
    ],
    features: [
      "Accessible, production-ready modals, forms, tabs and buttons.",
      "Fully typed TypeScript architecture.",
      "Design tokens for theming.",
      "Centralized, reusable logic that reduces duplication across projects.",
    ],
    links: {},
  },
];
