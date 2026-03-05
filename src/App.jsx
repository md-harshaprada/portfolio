import { useState, useEffect, useRef } from "react";

// ─── RESPONSIVE HOOK ──────────────────────────────────────────────────────────
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const DATA = {
  name: "Harsha Prada M D",
  title: "Software Engineer",
  location: "Chennai, Tamil Nadu, India",
  email: "harshaprada273@gmail.com",
  phone: "+91 9445178556",
  linkedin: "https://www.linkedin.com/in/harshapradamd/",
  github: "https://github.com/harshapradamd",
  bio: "Passionate software engineer at Zoho Corporation specializing in backend development, automation & scalable infrastructure. I build high-performance systems that enhance reliability and accelerate release cycles.",
  bio2: "Previously at AppViewX, I worked on cryptography, PKI and cloud infrastructure — reducing certificate vulnerabilities by 30%. I love crafting clean architecture that scales.",
  skills: [
    { category: "Languages", color: "#1a56db", bg: "#eff6ff", items: ["Python", "Java", "JavaScript", "C", "Shell Script"] },
    { category: "Frameworks & Tools", color: "#0694a2", bg: "#ecfeff", items: ["Apache Tomcat", "Flask", "REST APIs", "JSP", "JUnit", "Postman"] },
    { category: "Databases", color: "#7e3af2", bg: "#f5f3ff", items: ["MySQL", "Cassandra", "MongoDB", "Oracle DB"] },
    { category: "DevOps & Infra", color: "#057a55", bg: "#ecfdf5", items: ["Kubernetes", "Kafka", "Git", "DevOps", "Cloud Computing"] },
    { category: "AI / ML", color: "#e3a008", bg: "#fffbeb", items: ["PyTorch", "OpenAI", "NLP", "Voice Recognition"] },
    { category: "Focus Areas", color: "#e02424", bg: "#fef2f2", items: ["Backend Dev", "Automation", "Infra Monitoring", "PKI / Cryptography"] },
  ],
  experience: [
    {
      id: 1, company: "Zoho Corporation", logo: "Z", logoColor: "#e84a1e", logoBg: "#fff3f0",
      role: "Member Technical Staff", period: "Aug 2024 – Present", location: "Chennai, TN", type: "Full-time", current: true,
      bullets: [
        "Engineered automation test suites for Site24x7's server monitoring module, reducing regression incidents across server and application monitors.",
        "Implemented feature upgrades for Oracle DB Monitor, enabling advanced performance tracking that boosted system observability.",
        "Collaborated cross-functionally to ensure high-quality deployments and optimized automation coverage to accelerate release cycles.",
      ],
      stack: ["Java", "Oracle DB", "Automation", "Site24x7"],
    },
    {
      id: 2, company: "Zoho Corporation", logo: "Z", logoColor: "#e84a1e", logoBg: "#fff3f0",
      role: "Incubation Trainee", period: "Early 2024", location: "Chennai, TN", type: "Trainee", current: false,
      bullets: [
        "Contributed to development of an interactive discussion platform as part of a technical incubation program.",
        "Focused on secure authentication mechanisms, modular group management, and scalable backend architecture.",
      ],
      stack: ["Apache Tomcat", "Java", "MySQL", "Cassandra", "JSP"],
    },
    {
      id: 3, company: "AppViewX", logo: "A", logoColor: "#0097e6", logoBg: "#e8f4fc",
      role: "Software Developer Intern", period: "Jan – Jul 2024", location: "Coimbatore, TN", type: "Internship", current: false,
      bullets: [
        "Reduced certificate-related vulnerabilities by 30% through advanced PKI lifecycle management after training in cryptography and networking.",
        "Developed and optimized Cloud Connector components, collaborating with cross-functional teams to deliver new features.",
      ],
      stack: ["Java", "MongoDB", "Kubernetes", "Kafka", "Shell Script", "Git", "JUnit"],
    },
  ],
  projects: [
    {
      id: 1, name: "Post Forum", emoji: "💬", period: "Aug – Sep 2024",
      desc: "Full-stack web forum with user authentication, group-based discussions, real-time Q&A and nested replies. Features clean REST API architecture with dual-database integration.",
      stack: ["Apache Tomcat", "Java", "Servlets", "MySQL", "Cassandra", "JSP"],
      highlights: ["Dual-database architecture", "Nested reply system", "Secure auth flow"],
      color: "#1a56db",
    },
    {
      id: 2, name: "AgroSage", emoji: "🌾", period: "Oct 2023 – Jan 2024",
      desc: "ML-powered application providing personalized crop and fertilizer recommendations using environmental data, with real-time processing backend.",
      stack: ["Flask", "MongoDB", "Python", "DevOps"],
      highlights: ["ML-based crop prediction", "Real-time data processing", "Community forums"],
      color: "#057a55",
    },
    {
      id: 3, name: "SurveyLingua", emoji: "🎙", period: "Mar – Apr 2023",
      desc: "AI-powered voice recognition system transcribing speech in 70 languages with 95% accuracy, plus data management and visualization tools.",
      stack: ["PyTorch", "OpenAI", "Flask", "MongoDB"],
      highlights: ["70 languages supported", "95% accuracy rate", "Data visualization"],
      color: "#7e3af2",
    },
  ],
  education: {
    field: "Computer Science & Engineering",
    school: "Thiagarajar College of Engineering",
    location: "Madurai, Tamil Nadu",
    period: "Aug 2020 – May 2024",
    cgpa: "9.72 / 10",
  },
  publications: [
    {
      title: "Semi-Supervised Approach with Entity Embeddings for Heart Disease Prediction",
      venue: "ISMS 2022", host: "University of Malta & NIT Raipur", year: "2022",
      tags: ["Machine Learning", "Healthcare AI", "NLP"], color: "#1a56db",
    },
    {
      title: "Deep Learning-Based Multilingual Voice Recognition System for Organizational Surveys",
      venue: "AIST 2023", host: "IGDTUW", year: "2023",
      tags: ["Deep Learning", "NLP", "Voice Recognition"], color: "#7e3af2",
    },
  ],
  blogPosts: [
    { title: "Building Scalable Automation Frameworks for Server Monitoring", date: "Jan 2025", tag: "Automation", mins: 5, color: "#1a56db" },
    { title: "Understanding Oracle DB Performance Tuning from the Ground Up", date: "Nov 2024", tag: "Databases", mins: 7, color: "#057a55" },
    { title: "How I Built a Multilingual Voice Recognition System with PyTorch", date: "Apr 2023", tag: "AI / ML", mins: 8, color: "#7e3af2" },
  ],
};

// ─── ICONS ────────────────────────────────────────────────────────────────────
const Ico = ({ n, s = 18 }) => {
  const icons = {
    pin: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    mail: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    phone: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.63 19.79 19.79 0 01.06 2 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
    github: <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>,
    linkedin: <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    arrow: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
    ext: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
    cal: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    clock: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    check: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
    award: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
    briefcase: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
    send: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
    menu: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
    close: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    home: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
    user: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    work: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
    folder: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>,
    chat: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
    chevdown: <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>,
  };
  return icons[n] || null;
};

// ─── REVEAL HOOK ──────────────────────────────────────────────────────────────
const useReveal = () => {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
};

const Reveal = ({ children, delay = 0, style = {} }) => {
  const [ref, vis] = useReveal();
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`, ...style }}>
      {children}
    </div>
  );
};

// ─── TYPEWRITER ───────────────────────────────────────────────────────────────
const Typewriter = ({ words }) => {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[idx];
    const t = setTimeout(() => {
      if (!del) { setTxt(w.slice(0, txt.length + 1)); if (txt.length === w.length) setTimeout(() => setDel(true), 1500); }
      else { setTxt(w.slice(0, txt.length - 1)); if (txt.length === 0) { setDel(false); setIdx((idx + 1) % words.length); } }
    }, del ? 45 : 85);
    return () => clearTimeout(t);
  }, [txt, del, idx, words]);
  return <span style={{ color: "var(--primary)" }}>{txt}<span style={{ animation: "blink 1s infinite" }}>|</span></span>;
};

// ─── SKILL BAR ────────────────────────────────────────────────────────────────
const Bar = ({ label, pct, color, delay }) => {
  const [ref, vis] = useReveal();
  return (
    <div ref={ref} style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#374151", marginBottom: 5, fontWeight: 500 }}>
        <span>{label}</span><span style={{ color, fontFamily: "var(--mono)", fontSize: 12 }}>{pct}%</span>
      </div>
      <div style={{ height: 5, background: "#e5e7eb", borderRadius: 99 }}>
        <div style={{ height: "100%", borderRadius: 99, background: color, width: vis ? `${pct}%` : 0, transition: `width 1.2s cubic-bezier(.16,1,.3,1) ${delay}ms` }} />
      </div>
    </div>
  );
};

// ─── SECTION TITLE ────────────────────────────────────────────────────────────
const SectionTitle = ({ tag, title, sub }) => (
  <div style={{ textAlign: "center", marginBottom: 44 }}>
    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--primary-soft)", color: "var(--primary)", padding: "5px 14px", borderRadius: 99, fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)", display: "inline-block" }} />{tag}
    </div>
    <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(1.5rem,4vw,2.3rem)", fontWeight: 800, color: "#111827", letterSpacing: "-0.02em", marginBottom: sub ? 10 : 0 }}>{title}</h2>
    {sub && <p style={{ color: "#6b7280", fontSize: "clamp(13px,2.5vw,16px)", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>{sub}</p>}
  </div>
);

// ─── SKILL CARD ───────────────────────────────────────────────────────────────
const SkillCard = ({ g }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: "#fff", borderRadius: 14, padding: "22px 22px", border: `1px solid ${hov ? g.color : "#e5e7eb"}`, boxShadow: hov ? `0 8px 28px ${g.color}18` : "none", transform: hov ? "translateY(-2px)" : "none", transition: "all 0.25s" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <div style={{ width: 34, height: 34, borderRadius: 8, background: g.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <div style={{ width: 13, height: 13, borderRadius: 3, background: g.color }} />
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{g.category}</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {g.items.map((item, j) => <span key={j} style={{ fontSize: 12, color: g.color, background: g.bg, padding: "4px 10px", borderRadius: 99, fontWeight: 500 }}>{item}</span>)}
      </div>
    </div>
  );
};

// ─── PUB CARD ─────────────────────────────────────────────────────────────────
const PubCard = ({ p }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: "#fff", borderRadius: 16, padding: "26px 28px", border: `1px solid ${hov ? p.color : "#e5e7eb"}`, boxShadow: hov ? `0 12px 36px ${p.color}18` : "none", transform: hov ? "translateY(-2px)" : "none", transition: "all 0.25s" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <div style={{ width: 38, height: 38, borderRadius: 10, background: p.color + "15", display: "flex", alignItems: "center", justifyContent: "center", color: p.color }}><Ico n="award" s={17} /></div>
        <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "#9ca3af" }}>{p.year}</span>
      </div>
      <h4 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "0.95rem", color: "#111827", lineHeight: 1.4, marginBottom: 8 }}>"{p.title}"</h4>
      <p style={{ fontSize: 13, color: p.color, fontWeight: 600, marginBottom: 2 }}>{p.venue}</p>
      <p style={{ fontSize: 12, color: "#9ca3af", marginBottom: 14 }}>{p.host}</p>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {p.tags.map((t, j) => <span key={j} style={{ fontSize: 11, color: p.color, background: p.color + "12", padding: "3px 9px", borderRadius: 99, fontWeight: 500 }}>{t}</span>)}
      </div>
    </div>
  );
};

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
const ProjectCard = ({ p }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: "#fff", borderRadius: 16, padding: "26px 24px", border: `1px solid ${hov ? p.color : "#e5e7eb"}`, boxShadow: hov ? `0 16px 44px ${p.color}18` : "none", transform: hov ? "translateY(-3px)" : "none", transition: "all 0.25s", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: p.color + "15", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{p.emoji}</div>
        <span style={{ fontSize: 11, color: "#9ca3af", fontFamily: "var(--mono)" }}>{p.period}</span>
      </div>
      <h3 style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: "1.05rem", color: "#111827", marginBottom: 8 }}>{p.name}</h3>
      <p style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.65, marginBottom: 14, flex: 1 }}>{p.desc}</p>
      <div style={{ marginBottom: 12 }}>
        {p.highlights.map((h, j) => (
          <div key={j} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: "#374151", marginBottom: 4 }}>
            <span style={{ color: p.color, flexShrink: 0 }}><Ico n="check" s={11} /></span>{h}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
        {p.stack.map((s, j) => <span key={j} style={{ fontSize: 11, color: p.color, background: p.color + "12", padding: "3px 8px", borderRadius: 99, fontWeight: 500 }}>{s}</span>)}
      </div>
      <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 13, color: p.color, fontWeight: 600, textDecoration: "none" }}>
        View Repo <Ico n="ext" s={12} />
      </a>
    </div>
  );
};

// ─── BLOG CARD ────────────────────────────────────────────────────────────────
const BlogCard = ({ b }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: `1px solid ${hov ? b.color : "#e5e7eb"}`, boxShadow: hov ? `0 12px 36px ${b.color}18` : "none", transform: hov ? "translateY(-2px)" : "none", transition: "all 0.25s", cursor: "pointer" }}>
      <div style={{ height: 4, background: b.color }} />
      <div style={{ padding: "22px 22px 24px" }}>
        <div style={{ marginBottom: 12 }}><span style={{ fontSize: 11, color: b.color, background: b.color + "15", padding: "3px 9px", borderRadius: 99, fontWeight: 600 }}>{b.tag}</span></div>
        <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "0.95rem", color: "#111827", lineHeight: 1.45, marginBottom: 16 }}>{b.title}</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 12, color: "#9ca3af" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Ico n="cal" s={11} />{b.date}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Ico n="clock" s={11} />{b.mins} min</span>
        </div>
      </div>
    </div>
  );
};

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
const HomePage = ({ nav, isMobile }) => (
  <div>
    {/* HERO */}
    <section style={{ background: "linear-gradient(135deg,#f0f5ff 0%,#fff 55%,#f5f0ff 100%)", padding: isMobile ? "80px 20px 56px" : "110px 0 80px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 50, right: isMobile ? "-10%" : "6%", display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 9, opacity: 0.15, pointerEvents: "none" }}>
        {Array.from({ length: 49 }).map((_, i) => <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "#1a56db" }} />)}
      </div>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: isMobile ? "0" : "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 380px", gap: isMobile ? 36 : 60, alignItems: "center" }}>
          <div style={{ animation: "slideUp 0.7s ease both" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#dc2626", fontSize: 13, fontWeight: 600, marginBottom: 18 }}>
              <Ico n="pin" s={13} /> {DATA.location}
            </div>
            <h1 style={{ fontFamily: "var(--display)", fontSize: isMobile ? "2rem" : "clamp(2.2rem,5vw,3.6rem)", fontWeight: 800, color: "#111827", lineHeight: 1.12, letterSpacing: "-0.03em", marginBottom: 16 }}>
              Hi, I'm Harsha —<br />
              <Typewriter words={["Backend Engineer.", "Automation Expert.", "System Builder.", "Problem Solver."]} />
            </h1>
            <p style={{ color: "#4b5563", fontSize: isMobile ? 15 : 17, lineHeight: 1.75, maxWidth: 480, marginBottom: 28 }}>
              Software Engineer at <strong style={{ color: "#111827" }}>Zoho Corporation</strong>, building automation systems and backend infrastructure for Site24x7's monitoring platform.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button onClick={() => nav("experience")} style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "var(--primary)", color: "#fff", padding: isMobile ? "12px 20px" : "13px 26px", borderRadius: 9, border: "none", cursor: "pointer", fontSize: isMobile ? 14 : 15, fontWeight: 600 }}>
                See My Work <Ico n="arrow" s={15} />
              </button>
              <button onClick={() => nav("connect")} style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "transparent", color: "var(--primary)", padding: isMobile ? "12px 20px" : "13px 26px", borderRadius: 9, border: "2px solid var(--primary)", cursor: "pointer", fontSize: isMobile ? 14 : 15, fontWeight: 600 }}>
                Connect
              </button>
            </div>
            <div style={{ display: "flex", gap: 16, marginTop: 24, alignItems: "center" }}>
              {[{ href: DATA.github, n: "github" }, { href: DATA.linkedin, n: "linkedin" }, { href: `mailto:${DATA.email}`, n: "mail" }].map((l, i) => (
                <a key={i} href={l.href} target="_blank" rel="noreferrer" style={{ color: "#9ca3af", display: "flex" }}><Ico n={l.n} s={22} /></a>
              ))}
            </div>
          </div>

          {/* Avatar + stats */}
          <div style={{ animation: "slideUp 0.7s 0.12s ease both" }}>
            <div style={{ position: "relative", width: isMobile ? 220 : 300, margin: "0 auto" }}>
              <div style={{ width: "100%", paddingBottom: "100%", borderRadius: "50%", background: "linear-gradient(135deg,#dbeafe,#ede9fe)", position: "relative", boxShadow: "0 20px 48px rgba(26,86,219,0.15)" }}>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 70 : 86 }}>👨‍💻</div>
              </div>
              <div style={{ position: "absolute", bottom: 8, right: -8, background: "#fff", borderRadius: 10, padding: "9px 13px", boxShadow: "0 6px 20px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 0 3px rgba(16,185,129,0.18)", flexShrink: 0 }} />
                <div><div style={{ fontSize: 11, fontWeight: 700, color: "#111827" }}>Open to Work</div><div style={{ fontSize: 10, color: "#6b7280" }}>Available Now</div></div>
              </div>
              <div style={{ position: "absolute", top: 8, left: -8, background: "#fff", borderRadius: 10, padding: "9px 13px", boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}>
                <div style={{ fontSize: 10, color: "#6b7280" }}>Current Role</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#111827" }}>MTS @ Zoho</div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 20 }}>
              {[["2+", "Years Exp."], ["3", "Projects"], ["2", "Papers"], ["9.72", "CGPA"]].map(([n, l], i) => (
                <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "12px 14px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", textAlign: "center", border: "1px solid #f3f4f6" }}>
                  <div style={{ fontFamily: "var(--display)", fontSize: "1.4rem", fontWeight: 800, color: "var(--primary)" }}>{n}</div>
                  <div style={{ fontSize: 11, color: "#6b7280", fontWeight: 500, marginTop: 1 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ABOUT */}
    <section style={{ padding: isMobile ? "64px 20px" : "88px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: isMobile ? "0" : "0 48px" }}>
        <Reveal><SectionTitle tag="About Me" title="Who I Am" sub="My background and what drives me" /></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 60, alignItems: "start" }}>
          <Reveal delay={80}>
            <div>
              <p style={{ color: "#374151", fontSize: 15, lineHeight: 1.8, marginBottom: 14 }}>{DATA.bio}</p>
              <p style={{ color: "#374151", fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>{DATA.bio2}</p>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 9 }}>
                {[{ icon: "mail", l: "Email", v: DATA.email, href: `mailto:${DATA.email}` }, { icon: "phone", l: "Phone", v: DATA.phone }, { icon: "pin", l: "Location", v: "Chennai, India" }, { icon: "briefcase", l: "Status", v: "Full-time @ Zoho" }].map((c, i) => (
                  <a key={i} href={c.href || "#"} style={{ display: "flex", alignItems: "flex-start", gap: 9, padding: "12px 13px", background: "#f9fafb", borderRadius: 10, border: "1px solid #e5e7eb", textDecoration: "none" }}>
                    <span style={{ color: "var(--primary)", marginTop: 1, flexShrink: 0 }}><Ico n={c.icon} s={14} /></span>
                    <div><div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>{c.l}</div><div style={{ fontSize: 12, color: "#111827", fontWeight: 500, marginTop: 1, wordBreak: "break-all" }}>{c.v}</div></div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div style={{ background: "#f9fafb", borderRadius: 14, padding: isMobile ? "22px 18px" : "28px 28px", border: "1px solid #e5e7eb" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#374151", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>Core Proficiency</div>
              <Bar label="Backend Development" pct={88} color="#1a56db" delay={0} />
              <Bar label="Automation & Testing" pct={85} color="#0694a2" delay={80} />
              <Bar label="Java & Python" pct={82} color="#7e3af2" delay={160} />
              <Bar label="Database Systems" pct={78} color="#057a55" delay={240} />
              <Bar label="DevOps / Infrastructure" pct={70} color="#e3a008" delay={320} />
              <Bar label="AI / ML" pct={65} color="#e02424" delay={400} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* SKILLS */}
    <section style={{ padding: isMobile ? "64px 20px" : "88px 0", background: "#f9fafb" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: isMobile ? "0" : "0 48px" }}>
        <Reveal><SectionTitle tag="Skills" title="Technologies I Use" sub="Languages, frameworks and tools" /></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3,1fr)", gap: 14 }}>
          {DATA.skills.map((g, i) => <Reveal key={i} delay={i * 55}><SkillCard g={g} /></Reveal>)}
        </div>
      </div>
    </section>

    {/* EDUCATION */}
    <section style={{ padding: isMobile ? "64px 20px" : "88px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: isMobile ? "0" : "0 48px" }}>
        <Reveal><SectionTitle tag="Education" title="Academic Background" /></Reveal>
        <Reveal delay={100}>
          <div style={{ background: "linear-gradient(135deg,#eff6ff,#f5f3ff)", borderRadius: 18, padding: isMobile ? "28px 22px" : "44px 52px", border: "1px solid #dbeafe", position: "relative", overflow: "hidden", maxWidth: 840, margin: "0 auto" }}>
            {!isMobile && <div style={{ position: "absolute", right: 44, top: "50%", transform: "translateY(-50%)", fontFamily: "var(--display)", fontSize: "9rem", fontWeight: 800, color: "rgba(26,86,219,0.05)", pointerEvents: "none" }}>B.E</div>}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 18, position: "relative" }}>
              <div style={{ width: 56, height: 56, borderRadius: 13, background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>🎓</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "inline-block", background: "var(--primary-soft)", color: "var(--primary)", fontSize: 11, fontWeight: 600, padding: "3px 11px", borderRadius: 99, marginBottom: 9, textTransform: "uppercase", letterSpacing: "0.06em" }}>2020 – 2024</div>
                <h3 style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: isMobile ? "1.15rem" : "1.4rem", color: "#111827", marginBottom: 4 }}>{DATA.education.field}</h3>
                <p style={{ color: "#4b5563", fontSize: 14, marginBottom: 20 }}>{DATA.education.school} · {DATA.education.location}</p>
                <div style={{ display: "flex", gap: isMobile ? 20 : 36, flexWrap: "wrap" }}>
                  {[["CGPA", DATA.education.cgpa], ["Duration", "4 Years"], ["Degree", "B.E."]].map(([lbl, val], i) => (
                    <div key={i}><div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: 2 }}>{lbl}</div><div style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: isMobile ? "1.1rem" : "1.25rem", color: "var(--primary)" }}>{val}</div></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* PUBLICATIONS */}
    <section style={{ padding: isMobile ? "64px 20px" : "88px 0", background: "#f9fafb" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: isMobile ? "0" : "0 48px" }}>
        <Reveal><SectionTitle tag="Research" title="Publications" sub="Research papers at international conferences" /></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 18, maxWidth: 860, margin: "0 auto" }}>
          {DATA.publications.map((p, i) => <Reveal key={i} delay={i * 90}><PubCard p={p} /></Reveal>)}
        </div>
      </div>
    </section>
  </div>
);

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
const AboutPage = ({ isMobile }) => (
  <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "48px 20px 80px" : "64px 48px" }}>
    <Reveal><SectionTitle tag="About" title="Harsha Prada M D" sub="Software Engineer · Backend & Automation" /></Reveal>
    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "320px 1fr", gap: isMobile ? 28 : 48 }}>
      <Reveal delay={80}>
        <div>
          <div style={{ width: isMobile ? 160 : "100%", aspectRatio: "1", borderRadius: 18, background: "linear-gradient(135deg,#dbeafe,#ede9fe)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: isMobile ? 64 : 80, margin: isMobile ? "0 auto 20px" : "0 0 18px" }}>👨‍💻</div>
          <div style={{ background: "#f9fafb", borderRadius: 14, padding: "18px 18px", border: "1px solid #e5e7eb" }}>
            {[{ icon: "mail", l: "Email", v: DATA.email, href: `mailto:${DATA.email}` }, { icon: "phone", l: "Phone", v: DATA.phone }, { icon: "pin", l: "Location", v: DATA.location }, { icon: "linkedin", l: "LinkedIn", v: "harshapradamd", href: DATA.linkedin }, { icon: "github", l: "GitHub", v: "harshapradamd", href: DATA.github }].map((c, i, arr) => (
              <a key={i} href={c.href || "#"} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderBottom: i < arr.length - 1 ? "1px solid #e5e7eb" : "none", textDecoration: "none" }}>
                <span style={{ color: "var(--primary)", flexShrink: 0 }}><Ico n={c.icon} s={14} /></span>
                <div><div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>{c.l}</div><div style={{ fontSize: 12, color: "#111827", fontWeight: 500, wordBreak: "break-all" }}>{c.v}</div></div>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
      <div>
        <Reveal delay={120}>
          <div style={{ marginBottom: 28 }}>
            <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "1.15rem", color: "#111827", marginBottom: 12 }}>Background</h3>
            <p style={{ color: "#374151", fontSize: 15, lineHeight: 1.8, marginBottom: 10 }}>{DATA.bio}</p>
            <p style={{ color: "#374151", fontSize: 15, lineHeight: 1.8 }}>{DATA.bio2}</p>
          </div>
        </Reveal>
        <Reveal delay={180}>
          <div style={{ marginBottom: 28 }}>
            <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "1.15rem", color: "#111827", marginBottom: 16 }}>Proficiency</h3>
            <Bar label="Backend Development" pct={88} color="#1a56db" delay={0} />
            <Bar label="Automation & Testing" pct={85} color="#0694a2" delay={80} />
            <Bar label="Java & Python" pct={82} color="#7e3af2" delay={160} />
            <Bar label="Database Systems" pct={78} color="#057a55" delay={240} />
            <Bar label="DevOps / Infrastructure" pct={70} color="#e3a008" delay={320} />
          </div>
        </Reveal>
        <Reveal delay={240}>
          <div>
            <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "1.15rem", color: "#111827", marginBottom: 12 }}>Highlights</h3>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 10 }}>
              {["Reduced cert vulnerabilities by 30% at AppViewX", "Built automation suites for Site24x7", "Presented at 2 international conferences", "Graduated CGPA 9.72 from TCE"].map((h, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "12px 13px", background: "var(--primary-soft)", borderRadius: 10 }}>
                  <span style={{ color: "var(--primary)", flexShrink: 0, marginTop: 1 }}><Ico n="check" s={13} /></span>
                  <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </div>
);

// ─── EXPERIENCE PAGE ──────────────────────────────────────────────────────────
const ExperiencePage = ({ isMobile }) => {
  const [active, setActive] = useState(0);
  const e = DATA.experience[active];
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "48px 20px 80px" : "64px 48px" }}>
      <Reveal><SectionTitle tag="Experience" title="Work History" sub="Where I've worked and what I've built" /></Reveal>
      {/* Tab strip on mobile, sidebar on desktop */}
      {isMobile ? (
        <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 16, marginBottom: 20, scrollbarWidth: "none" }}>
          {DATA.experience.map((exp, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: active === i ? "var(--primary-soft)" : "#fff", border: `2px solid ${active === i ? "var(--primary)" : "#e5e7eb"}`, borderRadius: 10, cursor: "pointer", whiteSpace: "nowrap" }}>
              <div style={{ width: 30, height: 30, borderRadius: 7, background: exp.logoBg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--display)", fontWeight: 800, color: exp.logoColor, fontSize: 13, flexShrink: 0 }}>{exp.logo}</div>
              <span style={{ fontSize: 13, fontWeight: 600, color: active === i ? "var(--primary)" : "#374151" }}>{exp.type}</span>
              {exp.current && <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#10b981", flexShrink: 0 }} />}
            </button>
          ))}
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 20, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 90 }}>
            {DATA.experience.map((exp, i) => (
              <button key={i} onClick={() => setActive(i)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: active === i ? "var(--primary-soft)" : "#fff", border: `2px solid ${active === i ? "var(--primary)" : "#e5e7eb"}`, borderRadius: 12, cursor: "pointer", textAlign: "left", transition: "all 0.2s" }}>
                <div style={{ width: 38, height: 38, borderRadius: 9, background: exp.logoBg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--display)", fontWeight: 800, color: exp.logoColor, fontSize: 14, flexShrink: 0 }}>{exp.logo}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{exp.company}</div>
                  <div style={{ fontSize: 11, color: active === i ? "var(--primary)" : "#6b7280", marginTop: 1 }}>{exp.type}</div>
                </div>
                {exp.current && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", flexShrink: 0 }} />}
              </button>
            ))}
          </div>
          <ExpDetail e={e} active={active} />
        </div>
      )}
      {isMobile && <ExpDetail e={e} active={active} isMobile />}
    </div>
  );
};

const ExpDetail = ({ e, active, isMobile }) => (
  <div key={active} style={{ background: "#fff", borderRadius: 16, padding: isMobile ? "22px 18px" : "34px", border: "1px solid #e5e7eb", animation: "slideUp 0.3s ease both" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22, flexWrap: "wrap", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
        <div style={{ width: 44, height: 44, borderRadius: 11, background: e.logoBg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--display)", fontWeight: 800, color: e.logoColor, fontSize: 17 }}>{e.logo}</div>
        <div>
          <div style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: isMobile ? "1.1rem" : "1.25rem", color: "#111827" }}>{e.role}</div>
          <div style={{ fontSize: 13, color: "#6b7280" }}>{e.company} · {e.location}</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
        <span style={{ background: "var(--primary-soft)", color: "var(--primary)", padding: "4px 12px", borderRadius: 99, fontSize: 12, fontWeight: 600 }}>{e.period}</span>
        {e.current && <span style={{ background: "#ecfdf5", color: "#059669", padding: "4px 12px", borderRadius: 99, fontSize: 12, fontWeight: 600 }}>● Current</span>}
      </div>
    </div>
    <div style={{ marginBottom: 22 }}>
      {e.bullets.map((b, i) => (
        <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, padding: "12px 13px", background: "#f9fafb", borderRadius: 9, border: "1px solid #f3f4f6" }}>
          <span style={{ color: "var(--primary)", flexShrink: 0, marginTop: 1 }}><Ico n="check" s={13} /></span>
          <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.65 }}>{b}</span>
        </div>
      ))}
    </div>
    <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: 18 }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Tech Stack</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {e.stack.map((s, i) => <span key={i} style={{ fontSize: 12, color: "#7e3af2", background: "#f5f3ff", padding: "4px 12px", borderRadius: 8, fontWeight: 500 }}>{s}</span>)}
      </div>
    </div>
  </div>
);

// ─── PROJECTS PAGE ────────────────────────────────────────────────────────────
const ProjectsPage = ({ isMobile }) => (
  <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "48px 20px 80px" : "64px 48px" }}>
    <Reveal><SectionTitle tag="Projects" title="Things I've Built" sub="Personal and professional projects" /></Reveal>
    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 18 }}>
      {DATA.projects.map((p, i) => <Reveal key={i} delay={i * 70}><ProjectCard p={p} /></Reveal>)}
    </div>
  </div>
);

// ─── BLOG PAGE ────────────────────────────────────────────────────────────────
const BlogPage = ({ isMobile }) => (
  <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "48px 20px 80px" : "64px 48px" }}>
    <Reveal><SectionTitle tag="Blog" title="Articles & Insights" sub="Thoughts on engineering and technology" /></Reveal>
    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 18, marginBottom: 36 }}>
      {DATA.blogPosts.map((b, i) => <Reveal key={i} delay={i * 70}><BlogCard b={b} /></Reveal>)}
    </div>
    <Reveal delay={220}>
      <div style={{ background: "linear-gradient(135deg,#eff6ff,#f5f3ff)", borderRadius: 18, padding: isMobile ? "32px 22px" : "40px 48px", border: "1px solid #dbeafe", textAlign: "center" }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>✍️</div>
        <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "1.3rem", color: "#111827", marginBottom: 9 }}>More Articles Coming Soon</h3>
        <p style={{ color: "#6b7280", fontSize: 14, maxWidth: 360, margin: "0 auto 20px", lineHeight: 1.6 }}>Writing about backend engineering, automation, and system design. Stay tuned!</p>
        <a href={DATA.linkedin} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "var(--primary)", color: "#fff", padding: "11px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>Follow on LinkedIn <Ico n="ext" s={13} /></a>
      </div>
    </Reveal>
  </div>
);

// ─── CONNECT PAGE ─────────────────────────────────────────────────────────────
const ConnectPage = ({ isMobile }) => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const inp = (f, ph, t = "text") => (
    <div>
      <label style={{ fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.05em" }}>{ph}</label>
      <input type={t} value={form[f]} onChange={e => setForm({ ...form, [f]: e.target.value })} placeholder={ph} required
        style={{ width: "100%", padding: "11px 13px", border: "1px solid #d1d5db", borderRadius: 8, fontSize: 14, color: "#111827", outline: "none", background: "#fff", WebkitAppearance: "none" }}
        onFocus={e => e.target.style.borderColor = "var(--primary)"}
        onBlur={e => e.target.style.borderColor = "#d1d5db"}
      />
    </div>
  );
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: isMobile ? "48px 20px 80px" : "64px 48px" }}>
      <Reveal><SectionTitle tag="Connect" title="Get In Touch" sub="Have an opportunity or just want to say hi?" /></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 360px", gap: isMobile ? 28 : 40, alignItems: "start" }}>
        <Reveal delay={80}>
          {sent ? (
            <div style={{ background: "#ecfdf5", border: "1px solid #a7f3d0", borderRadius: 16, padding: 40, textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
              <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "1.3rem", color: "#059669", marginBottom: 7 }}>Message Sent!</h3>
              <p style={{ color: "#374151", marginBottom: 18, fontSize: 14 }}>Thanks for reaching out. I'll get back to you soon.</p>
              <button onClick={() => setSent(false)} style={{ background: "var(--primary)", color: "#fff", padding: "10px 22px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 14 }}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ background: "#fff", borderRadius: 16, padding: isMobile ? "22px 18px" : "32px", border: "1px solid #e5e7eb" }}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 13, marginBottom: 13 }}>
                {inp("name", "Your Name")}
                {inp("email", "Email Address", "email")}
              </div>
              <div style={{ marginBottom: 13 }}>{inp("subject", "Subject")}</div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.05em" }}>Message</label>
                <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me more..." rows={5} required
                  style={{ width: "100%", padding: "11px 13px", border: "1px solid #d1d5db", borderRadius: 8, fontSize: 14, color: "#111827", outline: "none", resize: "vertical", fontFamily: "var(--body)", background: "#fff" }}
                  onFocus={e => e.target.style.borderColor = "var(--primary)"}
                  onBlur={e => e.target.style.borderColor = "#d1d5db"}
                />
              </div>
              <button type="submit" style={{ width: "100%", background: "var(--primary)", color: "#fff", padding: "13px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                Send Message <Ico n="send" s={15} />
              </button>
            </form>
          )}
        </Reveal>
        <Reveal delay={160}>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {[{ icon: "mail", l: "Email", v: DATA.email, href: `mailto:${DATA.email}`, c: "#1a56db" }, { icon: "phone", l: "Phone", v: DATA.phone, href: `tel:${DATA.phone}`, c: "#057a55" }, { icon: "linkedin", l: "LinkedIn", v: "harshapradamd", href: DATA.linkedin, c: "#0077b5" }, { icon: "github", l: "GitHub", v: "harshapradamd", href: DATA.github, c: "#111827" }].map((c, i) => (
              <a key={i} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 13, padding: "16px 18px", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, textDecoration: "none" }}>
                <div style={{ width: 40, height: 40, borderRadius: 9, background: c.c + "15", display: "flex", alignItems: "center", justifyContent: "center", color: c.c, flexShrink: 0 }}><Ico n={c.icon} s={17} /></div>
                <div>
                  <div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>{c.l}</div>
                  <div style={{ fontSize: 13, color: "#111827", fontWeight: 600, marginTop: 1, wordBreak: "break-all" }}>{c.v}</div>
                </div>
              </a>
            ))}
            <div style={{ background: "linear-gradient(135deg,#eff6ff,#f5f3ff)", borderRadius: 12, padding: "16px 18px", border: "1px solid #dbeafe", marginTop: 4 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
                <span style={{ fontSize: 15 }}>⚡</span><span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 13, color: "#111827" }}>Quick Response</span>
              </div>
              <p style={{ fontSize: 12, color: "#4b5563", lineHeight: 1.6 }}>I respond within 24 hours. Feel free to reach out for opportunities, collaborations, or tech discussions!</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

// ─── NAV CONFIG ───────────────────────────────────────────────────────────────
const NAV = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "experience", label: "Experience", icon: "work" },
  { id: "projects", label: "Projects", icon: "folder" },
  { id: "blog", label: "Blog", icon: "chat" },
  { id: "connect", label: "Connect", icon: "send" },
];

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mainRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    const h = () => setScrolled(el.scrollTop > 10);
    el.addEventListener("scroll", h);
    return () => el.removeEventListener("scroll", h);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);

  const go = (id) => {
    setPage(id);
    setMenuOpen(false);
    if (mainRef.current) mainRef.current.scrollTop = 0;
  };

  const props = { isMobile, isTablet };
  const pages = {
    home: <HomePage nav={go} {...props} />,
    about: <AboutPage {...props} />,
    experience: <ExperiencePage {...props} />,
    projects: <ProjectsPage {...props} />,
    blog: <BlogPage {...props} />,
    connect: <ConnectPage {...props} />,
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Figtree:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        :root { --primary:#1a56db; --primary-soft:#eff6ff; --display:'Syne',sans-serif; --body:'Figtree',sans-serif; --mono:'JetBrains Mono',monospace; }
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        html,body,#root{height:100%;}
        body{background:#fff;color:#111827;font-family:var(--body);-webkit-font-smoothing:antialiased;}
        ::-webkit-scrollbar{width:3px;}::-webkit-scrollbar-track{background:#f9fafb;}::-webkit-scrollbar-thumb{background:var(--primary);border-radius:2px;}
        @keyframes slideUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes slideDown{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:none}}
        input,textarea,button{font-family:var(--body);}
        a{-webkit-tap-highlight-color:transparent;}
        button{-webkit-tap-highlight-color:transparent;}
      `}</style>

      <div style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* ── TOP NAVBAR ── */}
        <header style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", boxShadow: scrolled ? "0 2px 14px rgba(0,0,0,0.06)" : "none", flexShrink: 0, position: "relative", zIndex: 200, transition: "box-shadow 0.3s" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto", padding: isMobile ? "0 16px" : "0 48px", height: isMobile ? 60 : 66, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

            {/* Logo */}
            <button onClick={() => go("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 9 }}>
              <div style={{ width: 36, height: 36, borderRadius: 9, background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--display)", fontWeight: 800, color: "#fff", fontSize: 15 }}>H</div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: isMobile ? 14 : 15, color: "#111827", lineHeight: 1.15 }}>Harsha Prada</div>
                {!isMobile && <div style={{ fontSize: 11, color: "#9ca3af", fontFamily: "var(--mono)" }}>Software Engineer</div>}
              </div>
            </button>

            {/* Desktop nav */}
            {!isMobile && (
              <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
                {NAV.slice(1, -1).map(item => {
                  const active = page === item.id;
                  return (
                    <button key={item.id} onClick={() => go(item.id)}
                      style={{ background: active ? "var(--primary-soft)" : "none", color: active ? "var(--primary)" : "#374151", border: "none", cursor: "pointer", padding: isTablet ? "7px 12px" : "8px 16px", borderRadius: 8, fontSize: isTablet ? 13 : 15, fontWeight: active ? 600 : 500, transition: "all 0.15s" }}
                      onMouseEnter={e => { if (!active) e.currentTarget.style.background = "#f3f4f6"; }}
                      onMouseLeave={e => { if (!active) e.currentTarget.style.background = "none"; }}
                    >{item.label}</button>
                  );
                })}
                <button onClick={() => go("connect")} style={{ background: "var(--primary)", color: "#fff", border: "none", cursor: "pointer", padding: isTablet ? "8px 16px" : "9px 20px", borderRadius: 8, fontSize: isTablet ? 13 : 15, fontWeight: 600, marginLeft: 6, transition: "background 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#1541b8"}
                  onMouseLeave={e => e.currentTarget.style.background = "var(--primary)"}
                >Connect</button>
              </nav>
            )}

            {/* Mobile hamburger */}
            {isMobile && (
              <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: 6, color: "#374151", display: "flex", alignItems: "center" }}>
                <Ico n={menuOpen ? "close" : "menu"} s={24} />
              </button>
            )}
          </div>

          {/* Mobile dropdown menu */}
          {isMobile && menuOpen && (
            <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#fff", borderBottom: "1px solid #e5e7eb", boxShadow: "0 8px 24px rgba(0,0,0,0.1)", zIndex: 300, animation: "slideDown 0.2s ease both" }}>
              {NAV.map(item => (
                <button key={item.id} onClick={() => go(item.id)}
                  style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "14px 20px", background: page === item.id ? "var(--primary-soft)" : "none", border: "none", borderBottom: "1px solid #f3f4f6", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ color: page === item.id ? "var(--primary)" : "#9ca3af" }}><Ico n={item.icon} s={17} /></span>
                  <span style={{ fontSize: 15, fontWeight: page === item.id ? 600 : 500, color: page === item.id ? "var(--primary)" : "#374151" }}>{item.label}</span>
                  {item.id === "connect" && <span style={{ marginLeft: "auto", background: "var(--primary)", color: "#fff", fontSize: 11, fontWeight: 600, padding: "2px 9px", borderRadius: 99 }}>Hire Me</span>}
                </button>
              ))}
            </div>
          )}
        </header>

        {/* ── MAIN CONTENT ── */}
        <main ref={mainRef} style={{ flex: 1, overflowY: "auto", background: "#fff", WebkitOverflowScrolling: "touch" }} key={page}>
          <div style={{ animation: "fadeIn 0.25s ease both" }}>
            {pages[page]}
          </div>

          {/* FOOTER */}
          <footer style={{ background: "#111827", color: "#9ca3af", padding: isMobile ? "40px 20px 100px" : "48px 48px 32px" }}>
            <div style={{ maxWidth: 1160, margin: "0 auto" }}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: isMobile ? 28 : 44, marginBottom: 32 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
                    <div style={{ width: 34, height: 34, borderRadius: 8, background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--display)", fontWeight: 800, color: "#fff", fontSize: 14 }}>H</div>
                    <span style={{ fontFamily: "var(--display)", fontWeight: 700, color: "#fff", fontSize: 14 }}>Harsha Prada M D</span>
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 260 }}>Software Engineer specializing in backend development, automation & scalable infrastructure at Zoho Corporation.</p>
                  <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
                    {[{ href: DATA.github, n: "github" }, { href: DATA.linkedin, n: "linkedin" }, { href: `mailto:${DATA.email}`, n: "mail" }].map((l, i) => (
                      <a key={i} href={l.href} target="_blank" rel="noreferrer" style={{ color: "#6b7280", display: "flex" }}><Ico n={l.n} s={18} /></a>
                    ))}
                  </div>
                </div>
                {!isMobile && <>
                  <div>
                    <div style={{ fontFamily: "var(--display)", fontWeight: 700, color: "#fff", fontSize: 13, marginBottom: 16 }}>Navigation</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {NAV.map(n => <button key={n.id} onClick={() => go(n.id)} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", color: "#9ca3af", fontSize: 13, padding: 0, fontFamily: "var(--body)" }}>{n.label}</button>)}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--display)", fontWeight: 700, color: "#fff", fontSize: 13, marginBottom: 16 }}>Contact</div>
                    <div style={{ fontSize: 13, lineHeight: 2, color: "#9ca3af" }}>
                      <div style={{ wordBreak: "break-all" }}>{DATA.email}</div>
                      <div>{DATA.phone}</div>
                      <div>{DATA.location}</div>
                    </div>
                  </div>
                </>}
              </div>
              <div style={{ borderTop: "1px solid #374151", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, flexWrap: "wrap", gap: 8 }}>
                <span>© 2025 Harsha Prada M D · All rights reserved</span>
                <span style={{ color: "#6b7280" }}>Built with React ⚡</span>
              </div>
            </div>
          </footer>
        </main>

        {/* ── MOBILE BOTTOM NAV BAR ── */}
        {isMobile && (
          <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "#fff", borderTop: "1px solid #e5e7eb", display: "flex", zIndex: 500, boxShadow: "0 -4px 20px rgba(0,0,0,0.08)", paddingBottom: "env(safe-area-inset-bottom)" }}>
            {NAV.map(item => {
              const active = page === item.id;
              return (
                <button key={item.id} onClick={() => go(item.id)}
                  style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "10px 4px 8px", background: "none", border: "none", cursor: "pointer", gap: 3, minHeight: 58 }}>
                  <div style={{ color: active ? "var(--primary)" : "#9ca3af", transition: "color 0.2s", display: "flex" }}>
                    <Ico n={item.icon} s={active ? 22 : 20} />
                  </div>
                  <span style={{ fontSize: 10, fontWeight: active ? 700 : 500, color: active ? "var(--primary)" : "#9ca3af", transition: "all 0.2s", letterSpacing: "0.02em" }}>{item.label}</span>
                  {active && <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--primary)", marginTop: 1 }} />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
