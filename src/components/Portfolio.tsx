import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import heroImage from "../assets/mahi-hero.jpg";
import aiImage from "../assets/mahi-ai.jpg";
import communityImage from "../assets/mahi-community.jpg";
import { aiClusters, experience, journey, projects, technologies } from "../data/portfolio";

const nav = ["About", "Journey", "Projects", "Experience", "Leadership", "Contact"];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-12%" }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function Scene({ image, alt, children, align = "left", id }: { image: string; alt: string; children: React.ReactNode; align?: "left" | "right"; id?: string }) {
  return <section id={id} className="scene">
    <img src={image} alt={alt} width={1920} height={1080} loading={id === "home" ? "eager" : "lazy"} className="scene-image" />
    <div className="scene-shade" />
    <div className={`scene-content ${align === "right" ? "scene-right" : ""}`}>{children}</div>
  </section>;
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiveProject(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return <main className="portfolio-shell">
    <motion.div className="scroll-progress" style={{ scaleX }} />
    <header className="site-header">
      <a href="#home" className="brand" aria-label="Mahi, home">Mahi<span>.</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>
      <div className="header-actions"><a href="#contact" className="resume-link">Resume <ArrowUpRight size={14} /></a><button className="menu-button" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button></div>
    </header>
    <AnimatePresence>{menuOpen && <motion.nav className="mobile-nav" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</motion.nav>}</AnimatePresence>

    <Scene id="home" image={heroImage} alt="A builder overlooking a luminous mountain of connected ideas">
      <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>Didarul Azam Mahi · Bangladesh</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>BUILDING<br />THE NEXT<br /><em>IDEA.</em></motion.h1>
      <motion.p className="hero-copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }}>Software developer, AI builder, founder-minded technologist, and community leader exploring how ambitious ideas become useful products.</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}><a className="primary-link" href="#projects">View my work <ArrowDown size={15} /></a><a className="text-link" href="#contact">Let’s connect <ArrowUpRight size={15} /></a></motion.div>
    </Scene>

    <div className="marquee" aria-label="Technology toolkit"><div className="marquee-track">{[...technologies, ...technologies].map((t, i) => <span key={`${t}-${i}`}>{t}<i /></span>)}</div></div>

    <section id="about" className="editorial-section about-section"><Reveal><p className="section-kicker">01 / Perspective</p><h2>More than<br />just code.</h2></Reveal><Reveal className="about-copy"><p>I’m a computer science undergraduate focused on building real-world products with software and AI.</p><p>My path moves through development, artificial intelligence, entrepreneurship, science communication, mentoring, and community building. I’m especially interested in AI agents, RAG systems, developer tools, automation, and AI-powered SaaS.</p><div className="identity-line"><span>Didarul Azam Mahi</span><small>Developer / Builder / Founder-minded Technologist</small></div></Reveal></section>

    <section id="journey" className="editorial-section journey-section"><div className="sticky-title"><p className="section-kicker">02 / Journey</p><h2>Learning<br />to building.</h2></div><div className="timeline">{journey.map((item, i) => <Reveal key={item.year} className={`timeline-item ${i === 3 ? "timeline-current" : ""}`}><span className="timeline-year">{item.year}</span><div><h3>{item.title}</h3><p>{item.text}</p>{i === 2 && <div className="project-callout"><span>Featured experiment</span><strong>ClinicFlow AI</strong><small>React · TypeScript · Express · OpenAI Agents SDK</small></div>}</div></Reveal>)}</div></section>

    <Scene image={aiImage} alt="A luminous flow of knowledge and connected data" align="right"><Reveal><p className="section-kicker">03 / AI Engineering</p><h2>GOING<br />DEEPER<br /><em>INTO AI.</em></h2><p className="scene-copy">Learning to build systems that retrieve knowledge, use tools, and turn language models into practical workflows.</p></Reveal></Scene>

    <section className="network-section" aria-label="AI engineering toolkit"><div className="network-lines" />{aiClusters.map((cluster, i) => <Reveal key={cluster.title} className={`cluster cluster-${i + 1}`}><span>{String(i + 1).padStart(2, "0")}</span><h3>{cluster.title}</h3><p>{cluster.items.join(" · ")}</p></Reveal>)}</section>

    <section id="projects" className="projects-section"><div className="projects-heading"><p className="section-kicker">04 / Selected work</p><h2>Things I’ve built<br /><em>& explored.</em></h2></div><div className="project-list">{projects.map(project => <button key={project.number} className="project-row" onClick={() => setActiveProject(project)}><span>{project.number}</span><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-meta"><span>{project.category}</span><small>{project.status}</small></div><ArrowUpRight /></button>)}</div></section>

    <section id="experience" className="editorial-section experience-section"><Reveal><p className="section-kicker">05 / Experience & involvement</p><h2>Practice over<br />pretence.</h2></Reveal><div className="experience-list">{experience.map(([date, org, role]) => <Reveal key={org} className="experience-row"><span>{date}</span><h3>{org}</h3><p>{role}</p></Reveal>)}</div></section>

    <Scene id="leadership" image={communityImage} alt="Students gathering around science and technology experiments"><Reveal><p className="section-kicker">06 / Leadership</p><h2>BUILDING<br />COMMUNITIES,<br /><em>NOT JUST PRODUCTS.</em></h2><p className="scene-copy">As President of Neutrino Science Club, I help shape student-led science and technology initiatives through team leadership, mentoring, workshops, events, partnerships, and hands-on education.</p></Reveal></Scene>

    <section className="initiatives-section"><article><span>Featured initiative</span><h3>Shahid Tanvir Science Fest & Olympiad — Season 2</h3><p>A national science and innovation initiative organized through Neutrino Science Club in collaboration with Fulkoori Asor, Gazipur Mahanagar.</p><small>Planning · Sponsorship strategy · Marketing · Media · Branding · Community coordination</small></article><article><span>Teaching & mentoring</span><h3>NSC Python Bootcamp</h3><p>A beginner-friendly initiative built around practical fundamentals, hands-on assignments, mini projects, and the NSC Python Arcade capstone.</p><small>Curriculum · Class planning · Activities · Feedback · Learning resources</small></article><article><span>2026 program</span><h3>Gigalogy Technopreneurship — Batch 2</h3><p>Selected for a three-month program connecting AI product development with startup fundamentals, mentorship, entrepreneurship, and pitching.</p><small>AI Product Development · Startup Fundamentals · Mentorship · Pitching</small></article></section>

    <section className="innovation-section"><div><p className="section-kicker">07 / Learning by doing</p><h2>Innovation<br />in motion.</h2></div><div className="innovation-list"><p><span>2025</span>UIU Research & Innovation Week — participation</p><p><span>2025</span>NASA Space Apps — innovation environment participation</p><p><span>2025</span>Codex Community Meetup, UIU — built ClinicFlow AI</p><p><span>2026</span>Obhijatri Science Fair — participation / mentoring involvement</p></div></section>

    <section className="philosophy"><Reveal><p>Don’t just learn technology.</p><h2>Build with it.</h2><small>I believe the fastest way to understand technology is to use it to solve real problems, share what I learn, and keep building.</small></Reveal></section>

    <section className="next-section"><p className="section-kicker">08 / What’s next?</p><div className="next-grid">{[["AI Agents","Systems that reason, use tools, and execute multi-step tasks."],["RAG Systems","Reliable knowledge-based AI applications."],["AI SaaS","Turning AI capability into useful products."],["Full-Stack","Production-ready applications with modern web technology."],["Entrepreneurship","Turning technical ideas into useful products and businesses."]].map(([a,b]) => <article key={a}><span>↗</span><h3>{a}</h3><p>{b}</p></article>)}</div></section>

      <section id="contact" className="contact-section"><Reveal><p className="section-kicker">09 / Contact</p><h2>LET’S BUILD<br /><em>SOMETHING.</em></h2><p>I’m interested in thoughtful technology, AI, startup, and innovation projects.</p><div className="social-links"><a href="#" aria-label="Email address pending"><Mail /> Email</a><a href="#" aria-label="GitHub link pending"><Github /> GitHub</a><a href="#" aria-label="LinkedIn link pending"><Linkedin /> LinkedIn</a></div></Reveal><form onSubmit={e => e.preventDefault()}><label>Name<input name="name" autoComplete="name" /></label><label>Email<input name="email" type="email" autoComplete="email" /></label><label>Message<textarea name="message" rows={4} /></label><button type="submit">Send message <ArrowUpRight /></button><small>Form delivery will be connected when a preferred email endpoint is supplied.</small></form></section>
    <footer><strong>Mahi.</strong><p>Building at the intersection of AI, software and entrepreneurship.</p><span>© 2026 Didarul Azam Mahi</span></footer>

    <AnimatePresence>{activeProject && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveProject(null)}><motion.article className="project-modal" initial={{ y: 70 }} animate={{ y: 0 }} exit={{ y: 70 }} onClick={e => e.stopPropagation()}><button onClick={() => setActiveProject(null)} aria-label="Close project details"><X /></button><span>{activeProject.number} / {activeProject.category}</span><h2>{activeProject.title}</h2><p>{activeProject.description}</p><div>{activeProject.technologies.map(t => <small key={t}>{t}</small>)}</div><strong>{activeProject.status}</strong><p className="link-note">GitHub and demo links will be added when verified URLs are supplied.</p></motion.article></motion.div>}</AnimatePresence>
  </main>;
}