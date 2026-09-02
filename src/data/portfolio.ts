export type Project = {
  number: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  status: "Prototype" | "Concept" | "Educational project";
  featured?: boolean;
};

export const projects: Project[] = [
  { number: "01", title: "ClinicFlow AI", description: "An AI-native clinic receptionist concept exploring agent-assisted healthcare workflows.", category: "AI / Agents", technologies: ["React", "TypeScript", "Express", "OpenAI Agents SDK"], status: "Prototype", featured: true },
  { number: "02", title: "NSC Python Arcade", description: "An interactive educational Python project created for the NSC Python Bootcamp.", category: "Education / Programming", technologies: ["Python"], status: "Educational project" },
  { number: "03", title: "AI EdTech", description: "A curriculum-aware learning assistant concept using knowledge retrieval and personalized learning.", category: "AI / EdTech", technologies: ["Next.js", "LLMs", "RAG", "Vector Databases"], status: "Concept" },
  { number: "04", title: "ShebaAI", description: "An assistant concept for making government information easier to access and understand.", category: "AI / RAG", technologies: ["AI", "RAG", "Web Data", "Automation"], status: "Concept" },
  { number: "05", title: "InsuFight AI", description: "Exploring how intelligent systems could improve insurance-related product experiences.", category: "AI / Startup", technologies: ["AI", "Product Design"], status: "Concept" },
  { number: "06", title: "Try On Me", description: "An agentic e-commerce experiment for more useful shopping and product discovery.", category: "AI Agents / E-commerce", technologies: ["AI Agents", "E-commerce", "Automation"], status: "Concept" },
  { number: "07", title: "MetaAds Competitor Research", description: "An AI-assisted research concept for exploring advertising and competitor information.", category: "AI / Automation", technologies: ["AI", "Automation", "Web Data"], status: "Concept" },
];

export const journey = [
  { year: "2023", title: "The Beginning", text: "Programming fundamentals, computer science, and the first spark of making things with technology." },
  { year: "2024", title: "Learning by Experimenting", text: "C/C++, Python, web development, personal software ideas, and a growing interest in AI and entrepreneurship." },
  { year: "2025", title: "From Experiments to Projects", text: "Modern full-stack development, LLMs, RAG, innovation activities, UIU Research & Innovation Week, NASA Space Apps-related activities, and ClinicFlow AI." },
  { year: "2026", title: "Building, Leading & Experimenting", text: "Software, AI, entrepreneurship, teaching, and community leadership begin to converge into one practice." },
];

export const aiClusters = [
  { title: "LLMs", items: ["OpenAI", "Gemini", "Mistral", "Ollama", "LLM APIs"] },
  { title: "Agents", items: ["Tool calling", "Agentic workflows", "OpenAI Agents SDK", "LangGraph"] },
  { title: "RAG", items: ["Embeddings", "Chunking", "Vector search", "Pinecone", "Qdrant", "LangChain"] },
  { title: "Automation", items: ["n8n", "Apify", "API integrations", "AI workflows"] },
  { title: "Infrastructure", items: ["Docker", "Supabase", "Vercel"] },
];

export const experience = [
  ["2025—Present", "Neutrino Science Club", "President / Technology & Innovation Leadership"],
  ["2024—Present", "AI / Software Projects", "Independent Developer / Builder"],
  ["2026", "NSC Python Bootcamp", "Instructor / Curriculum & Program Organizer"],
  ["2025—Present", "Science & Innovation Events", "Organizer / Mentor / Participant"],
  ["2026", "Gigalogy Technopreneurship", "Selected Participant / Founder-minded Builder"],
] as const;

export const technologies = ["React", "Next.js", "TypeScript", "JavaScript", "Python", "C/C++", "AI Agents", "LLMs", "RAG", "LangChain", "LangGraph", "Supabase", "Docker", "Vercel", "n8n"];