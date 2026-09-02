import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "../components/Portfolio";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Didarul Azam Mahi — AI Builder, Developer & Entrepreneur" },
      { name: "description", content: "Portfolio of Didarul Azam Mahi — a computer science undergraduate building AI-powered products, software applications and technology communities." },
      { property: "og:title", content: "Didarul Azam Mahi — AI Builder, Developer & Entrepreneur" },
      { property: "og:description", content: "Software, AI, entrepreneurship and community leadership — the portfolio of Didarul Azam Mahi." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: "Didarul Azam Mahi", url: "/", jobTitle: "Software Developer and AI Builder", knowsAbout: ["Artificial Intelligence", "Software Development", "AI Agents", "RAG", "Community Leadership"] }) }],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <Portfolio />;
}
