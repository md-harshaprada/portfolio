import { useState, useEffect, useRef } from "react";

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
      role: "Member Technical Staff", period: "Aug 2024 – Present", location: "Chennai, TN", type: "Full-time",
      current: true,
      bullets: [
        "Engineered automation test suites for Site24x7's server monitoring module, reducing regression incidents across server and application monitors.",
        "Implemented feature upgrades for Oracle DB Monitor, enabling advanced performance tracking that boosted system observability.",
        "Collaborated cross-functionally to ensure high-quality deployments and optimized automation coverage to accelerate release cycles.",
      ],
      stack: ["Java", "Oracle DB", "Automation", "Site24x7"],
    },
    {
      id: 2, company: "Zoho Corporation", logo: "Z", logoColor: "#e84a1e", logoBg: "#fff3f0",
      role: "Incubation Trainee", period: "Early 2024", location: "Chennai, TN", type: "Trainee",
      current: false,
      bullets: [
        "Contributed to development of an interactive discussion platform as part of a technical incubation program.",
        "Focused on secure authentication mechanisms, modular group management, and scalable backend architecture.",
      ],
      stack: ["Apache Tomcat", "Java", "MySQL", "Cassandra", "JSP"],
    },
    {
      id: 3, company: "AppViewX", logo: "A", logoColor: "#0097e6", logoBg: "#e8f4fc",
      role: "Software Developer Intern", period: "Jan – Jul 2024", location: "Coimbatore, TN", type: "Internship",
      current: false,
      bullets: [
        "Reduced certificate-related vulnerabilities by 30% through advanced PKI lifecycle management after deep training in cryptography and networking.",
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
      desc: "ML-powered application providing personalized crop and fertilizer recommendations using environmental data, featuring secure login, forums, and real-time processing backend.",
      stack: ["Flask", "MongoDB", "Python", "DevOps"],
      highlights: ["ML-based crop prediction", "Real-time data processing", "Community forums"],
      color: "#057a55",
    },
    {
      id: 3, name: "SurveyLingua", emoji: "🎙", period: "Mar – Apr 2023",
      desc: "AI-powered voice recognition system transcribing speech in 70 languages with 95% accuracy, plus data management and visualization tools for organizational surveys.",
      stack: ["PyTorch", "OpenAI", "Flask", "MongoDB"],
      highlights: ["70 languages supported", "95% accuracy rate", "Data visualization"],
      color: "#7e3af2",
    },
  ],
  education: {
    degree: "Bachelor of Engineering",
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
  const d = {
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
  };
  return d[n] || null;
};

// ─── REVEAL HOOK ─────────────────────────────────────────────────────────────
const useReveal = () => {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
};

const Reveal = ({ children, delay = 0, style = {} }) => {
  const [ref, vis] = useReveal();
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(20px)", transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`, ...style }}>
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
      if (!del) { setTxt(w.slice(0, txt.length + 1)); if (txt.length === w.length) setTimeout(() => setDel(true), 1600); }
      else { setTxt(w.slice(0, txt.length - 1)); if (txt.length === 0) { setDel(false); setIdx((idx + 1) % words.length); } }
    }, del ? 45 : 85);
    return () => clearTimeout(t);
  }, [txt, del, idx, words]);
  return <span style={{ color: "var(--primary)" }}>{txt}<span style={{ animation: "blink 1s infinite" }}>|</span></span>;
};

// ─── SKILL BAR ───────────────────────────────────────────────────────────────
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

// ─── SECTION HEADING ─────────────────────────────────────────────────────────
const SectionTitle = ({ tag, title, sub }) => (
  <div style={{ textAlign: "center", marginBottom: 52 }}>
    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--primary-soft)", color: "var(--primary)", padding: "5px 14px", borderRadius: 99, fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 14 }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--primary)", display: "inline-block" }} />{tag}
    </div>
    <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(1.8rem,3.5vw,2.4rem)", fontWeight: 800, color: "#111827", letterSpacing: "-0.02em", marginBottom: sub ? 12 : 0 }}>{title}</h2>
    {sub && <p style={{ color: "#6b7280", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>{sub}</p>}
  </div>
);

// ─── BTN ──────────────────────────────────────────────────────────────────────
const Btn = ({ children, onClick, outline, style: s = {} }) => {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: outline ? (hov ? "var(--primary)" : "transparent") : (hov ? "#1541b8" : "var(--primary)"),
        color: outline ? (hov ? "#fff" : "var(--primary)") : "#fff",
        padding: "12px 24px", borderRadius: 8, border: outline ? "2px solid var(--primary)" : "none",
        cursor: "pointer", fontSize: 15, fontWeight: 600, transition: "all 0.2s", ...s
      }}>{children}</button>
  );
};

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
const HomePage = ({ nav }) => (
  <div>
    {/* HERO */}
    <section style={{ background: "linear-gradient(135deg, #f0f5ff 0%, #ffffff 55%, #f5f0ff 100%)", padding: "110px 0 80px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 60, right: "6%", display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 10, opacity: 0.2, pointerEvents: "none" }}>
        {Array.from({ length: 64 }).map((_, i) => <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "#1a56db" }} />)}
      </div>
      <div style={{ position: "absolute", top: "5%", right: "15%", width: 450, height: 450, borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%", background: "linear-gradient(135deg, #dbeafe55, #ede9fe55)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "1fr 400px", gap: 64, alignItems: "center" }}>
        <div style={{ animation: "slideUp 0.7s ease both" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "#dc2626", fontSize: 13, fontWeight: 600, marginBottom: 22 }}>
            <Ico n="pin" s={13} /> {DATA.location}
          </div>
          <h1 style={{ fontFamily: "var(--display)", fontSize: "clamp(2.2rem,5vw,3.8rem)", fontWeight: 800, color: "#111827", lineHeight: 1.12, letterSpacing: "-0.03em", marginBottom: 18 }}>
            Hi, I'm Harsha —<br />
            <Typewriter words={["Backend Engineer.", "Automation Expert.", "System Builder.", "Problem Solver."]} />
          </h1>
          <p style={{ color: "#4b5563", fontSize: 17, lineHeight: 1.75, maxWidth: 480, marginBottom: 36 }}>
            Software Engineer at <strong style={{ color: "#111827" }}>Zoho Corporation</strong>, building automation systems and backend infrastructure for Site24x7's monitoring platform.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Btn onClick={() => nav("experience")}>See My Work <Ico n="arrow" s={16} /></Btn>
            <Btn outline onClick={() => nav("connect")}>Connect</Btn>
          </div>
          <div style={{ display: "flex", gap: 18, marginTop: 32, alignItems: "center" }}>
            <a href={DATA.github} target="_blank" rel="noreferrer" style={{ color: "#9ca3af", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#111"} onMouseLeave={e => e.currentTarget.style.color = "#9ca3af"}><Ico n="github" s={22} /></a>
            <a href={DATA.linkedin} target="_blank" rel="noreferrer" style={{ color: "#9ca3af", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--primary)"} onMouseLeave={e => e.currentTarget.style.color = "#9ca3af"}><Ico n="linkedin" s={22} /></a>
            <a href={`mailto:${DATA.email}`} style={{ color: "#9ca3af", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "var(--primary)"} onMouseLeave={e => e.currentTarget.style.color = "#9ca3af"}><Ico n="mail" s={22} /></a>
          </div>
        </div>

        <div style={{ animation: "slideUp 0.7s 0.12s ease both" }}>
          <div style={{ position: "relative" }}>
            <div style={{ width: 320, height: 320, borderRadius: "50%", background: "linear-gradient(135deg, #dbeafe, #ede9fe)", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 90, boxShadow: "0 24px 56px rgba(26,86,219,0.15)" }}>👨‍💻</div>
            <div style={{ position: "absolute", bottom: 16, right: 0, background: "#fff", borderRadius: 12, padding: "11px 16px", boxShadow: "0 8px 28px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", gap: 9 }}>
              <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 0 3px rgba(16,185,129,0.18)" }} />
              <div><div style={{ fontSize: 12, fontWeight: 700, color: "#111827" }}>Open to Work</div><div style={{ fontSize: 11, color: "#6b7280" }}>Available Now</div></div>
            </div>
            <div style={{ position: "absolute", top: 16, left: 0, background: "#fff", borderRadius: 12, padding: "11px 16px", boxShadow: "0 8px 28px rgba(0,0,0,0.1)" }}>
              <div style={{ fontSize: 11, color: "#6b7280" }}>Current Role</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>MTS @ Zoho Corp</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 24 }}>
            {[["2+", "Years Exp."], ["3", "Projects"], ["2", "Papers"], ["9.72", "CGPA"]].map(([n, l], i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "14px 16px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", textAlign: "center", border: "1px solid #f3f4f6" }}>
                <div style={{ fontFamily: "var(--display)", fontSize: "1.5rem", fontWeight: 800, color: "var(--primary)" }}>{n}</div>
                <div style={{ fontSize: 11, color: "#6b7280", fontWeight: 500, marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ABOUT */}
    <section style={{ padding: "96px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 48px" }}>
        <Reveal><SectionTitle tag="About Me" title="Who I Am" sub="My background and what drives me" /></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <Reveal delay={100}>
            <div>
              <p style={{ color: "#374151", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>{DATA.bio}</p>
              <p style={{ color: "#374151", fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>{DATA.bio2}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[{ icon: "mail", l: "Email", v: DATA.email, href: `mailto:${DATA.email}` }, { icon: "phone", l: "Phone", v: DATA.phone }, { icon: "pin", l: "Location", v: "Chennai, India" }, { icon: "briefcase", l: "Status", v: "Full-time @ Zoho" }].map((c, i) => (
                  <a key={i} href={c.href || "#"} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "13px 15px", background: "#f9fafb", borderRadius: 10, border: "1px solid #e5e7eb", textDecoration: "none", transition: "border-color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "var(--primary)"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "#e5e7eb"}
                  >
                    <span style={{ color: "var(--primary)", marginTop: 1 }}><Ico n={c.icon} s={14} /></span>
                    <div><div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>{c.l}</div><div style={{ fontSize: 13, color: "#111827", fontWeight: 500, marginTop: 1 }}>{c.v}</div></div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ background: "#f9fafb", borderRadius: 16, padding: 32, border: "1px solid #e5e7eb" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#374151", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 22 }}>Core Proficiency</div>
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
    <section style={{ padding: "96px 0", background: "#f9fafb" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 48px" }}>
        <Reveal><SectionTitle tag="Skills" title="Technologies I Use" sub="Languages, frameworks, and tools I work with" /></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
          {DATA.skills.map((g, i) => (
            <Reveal key={i} delay={i * 60}>
              <SkillCard g={g} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* EDUCATION */}
    <section style={{ padding: "96px 0", background: "#fff" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 48px" }}>
        <Reveal><SectionTitle tag="Education" title="Academic Background" /></Reveal>
        <Reveal delay={100}>
          <div style={{ background: "linear-gradient(135deg, #eff6ff, #f5f3ff)", borderRadius: 20, padding: "48px 56px", border: "1px solid #dbeafe", position: "relative", overflow: "hidden", maxWidth: 860, margin: "0 auto" }}>
            <div style={{ position: "absolute", right: 48, top: "50%", transform: "translateY(-50%)", fontFamily: "var(--display)", fontSize: "9rem", fontWeight: 800, color: "rgba(26,86,219,0.05)", pointerEvents: "none" }}>B.E</div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 24, position: "relative" }}>
              <div style={{ width: 64, height: 64, borderRadius: 14, background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>🎓</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "inline-block", background: "var(--primary-soft)", color: "var(--primary)", fontSize: 12, fontWeight: 600, padding: "3px 12px", borderRadius: 99, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>2020 – 2024</div>
                <h3 style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: "1.5rem", color: "#111827", marginBottom: 4 }}>{DATA.education.field}</h3>
                <p style={{ color: "#4b5563", fontSize: 15, marginBottom: 24 }}>{DATA.education.school} · {DATA.education.location}</p>
                <div style={{ display: "flex", gap: 40 }}>
                  {[["CGPA", DATA.education.cgpa], ["Duration", "4 Years"], ["Degree", "B.E."]].map(([lbl, val], i) => (
                    <div key={i}><div style={{ fontSize: 11, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginBottom: 3 }}>{lbl}</div><div style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: "1.3rem", color: "var(--primary)" }}>{val}</div></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* PUBLICATIONS */}
    <section style={{ padding: "96px 0", background: "#f9fafb" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 48px" }}>
        <Reveal><SectionTitle tag="Research" title="Publications" sub="Research papers presented at international conferences" /></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, maxWidth: 880, margin: "0 auto" }}>
          {DATA.publications.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <PubCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

// ─── REUSABLE CARDS ───────────────────────────────────────────────────────────
const SkillCard = ({ g }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ background: "#fff", borderRadius: 14, padding: "24px 26px", border: `1px solid ${hov ? g.color : "#e5e7eb"}`, boxShadow: hov ? `0 8px 28px ${g.color}18` : "none", transform: hov ? "translateY(-3px)" : "none", transition: "all 0.25s", cursor: "default" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <div style={{ width: 36, height: 36, borderRadius: 8, background: g.bg, display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: 14, height: 14, borderRadius: 3, background: g.color }} /></div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>{g.category}</div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {g.items.map((item, j) => <span key={j} style={{ fontSize: 12, color: g.color, background: g.bg, padding: "4px 11px", borderRadius: 99, fontWeight: 500 }}>{item}</span>)}
      </div>
    </div>
  );
};

const PubCard = ({ p }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ background: "#fff", borderRadius: 16, padding: "28px 30px", border: `1px solid ${hov ? p.color : "#e5e7eb"}`, boxShadow: hov ? `0 12px 36px ${p.color}18` : "none", transform: hov ? "translateY(-3px)" : "none", transition: "all 0.25s" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: p.color + "15", display: "flex", alignItems: "center", justifyContent: "center", color: p.color }}><Ico n="award" s={18} /></div>
        <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "#9ca3af" }}>{p.year}</span>
      </div>
      <h4 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "1rem", color: "#111827", lineHeight: 1.4, marginBottom: 10 }}>"{p.title}"</h4>
      <p style={{ fontSize: 13, color: p.color, fontWeight: 600, marginBottom: 3 }}>{p.venue}</p>
      <p style={{ fontSize: 12, color: "#9ca3af", marginBottom: 16 }}>{p.host}</p>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {p.tags.map((t, j) => <span key={j} style={{ fontSize: 11, color: p.color, background: p.color + "12", padding: "3px 10px", borderRadius: 99, fontWeight: 500 }}>{t}</span>)}
      </div>
    </div>
  );
};

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
const AboutPage = () => (
  <div style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 48px" }}>
    <Reveal><SectionTitle tag="About" title="Harsha Prada M D" sub="Software Engineer · Backend & Automation Specialist" /></Reveal>
    <div style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: 52, alignItems: "start" }}>
      <Reveal delay={100}>
        <div>
          <div style={{ width: "100%", aspectRatio: "1", borderRadius: 20, background: "linear-gradient(135deg, #dbeafe, #ede9fe)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 90, marginBottom: 22 }}>👨‍💻</div>
          <div style={{ background: "#f9fafb", borderRadius: 16, padding: 22, border: "1px solid #e5e7eb" }}>
            {[{ icon: "mail", l: "Email", v: DATA.email, href: `mailto:${DATA.email}` }, { icon: "phone", l: "Phone", v: DATA.phone }, { icon: "pin", l: "Location", v: DATA.location }, { icon: "linkedin", l: "LinkedIn", v: "harshapradamd", href: DATA.linkedin }, { icon: "github", l: "GitHub", v: "harshapradamd", href: DATA.github }].map((c, i, arr) => (
              <a key={i} href={c.href || "#"} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 0", borderBottom: i < arr.length - 1 ? "1px solid #e5e7eb" : "none", textDecoration: "none" }}>
                <span style={{ color: "var(--primary)" }}><Ico n={c.icon} s={14} /></span>
                <div><div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>{c.l}</div><div style={{ fontSize: 13, color: "#111827", fontWeight: 500 }}>{c.v}</div></div>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
      <div>
        <Reveal delay={150}><div style={{ marginBottom: 36 }}>
          <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "1.2rem", color: "#111827", marginBottom: 14 }}>Background</h3>
          <p style={{ color: "#374151", fontSize: 15, lineHeight: 1.8, marginBottom: 12 }}>{DATA.bio}</p>
          <p style={{ color: "#374151", fontSize: 15, lineHeight: 1.8 }}>{DATA.bio2}</p>
        </div></Reveal>
        <Reveal delay={200}><div style={{ marginBottom: 36 }}>
          <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "1.2rem", color: "#111827", marginBottom: 18 }}>Core Proficiency</h3>
          <Bar label="Backend Development" pct={88} color="#1a56db" delay={0} />
          <Bar label="Automation & Testing" pct={85} color="#0694a2" delay={80} />
          <Bar label="Java & Python" pct={82} color="#7e3af2" delay={160} />
          <Bar label="Database Systems" pct={78} color="#057a55" delay={240} />
          <Bar label="DevOps / Infrastructure" pct={70} color="#e3a008" delay={320} />
        </div></Reveal>
        <Reveal delay={260}><div>
          <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "1.2rem", color: "#111827", marginBottom: 14 }}>Key Highlights</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {["Reduced certificate vulnerabilities by 30% at AppViewX", "Built automation suites for Site24x7 monitoring", "Presented research at 2 international conferences", "Graduated with CGPA 9.72 from TCE"].map((h, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 9, padding: "13px 15px", background: "var(--primary-soft)", borderRadius: 10 }}>
                <span style={{ color: "var(--primary)", flexShrink: 0, marginTop: 1 }}><Ico n="check" s={13} /></span>
                <span style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{h}</span>
              </div>
            ))}
          </div>
        </div></Reveal>
      </div>
    </div>
  </div>
);

// ─── EXPERIENCE PAGE ─────────────────────────────────────────────────────────
const ExperiencePage = () => {
  const [active, setActive] = useState(0);
  const e = DATA.experience[active];
  return (
    <div style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 48px" }}>
      <Reveal><SectionTitle tag="Experience" title="Work History" sub="Where I've worked and what I've built" /></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 20, alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, position: "sticky", top: 90 }}>
          {DATA.experience.map((exp, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ display: "flex", alignItems: "center", gap: 13, padding: "15px 17px", background: active === i ? "var(--primary-soft)" : "#fff", border: `2px solid ${active === i ? "var(--primary)" : "#e5e7eb"}`, borderRadius: 12, cursor: "pointer", textAlign: "left", transition: "all 0.2s" }}>
              <div style={{ width: 40, height: 40, borderRadius: 9, background: exp.logoBg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--display)", fontWeight: 800, color: exp.logoColor, fontSize: 15, flexShrink: 0 }}>{exp.logo}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#111827" }}>{exp.company}</div>
                <div style={{ fontSize: 11, color: active === i ? "var(--primary)" : "#6b7280", marginTop: 1 }}>{exp.type}</div>
              </div>
              {exp.current && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", flexShrink: 0 }} />}
            </button>
          ))}
        </div>
        <div key={active} style={{ background: "#fff", borderRadius: 16, padding: 38, border: "1px solid #e5e7eb", animation: "slideUp 0.3s ease both" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 26, flexWrap: "wrap", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: e.logoBg, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--display)", fontWeight: 800, color: e.logoColor, fontSize: 18 }}>{e.logo}</div>
              <div><div style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: "1.3rem", color: "#111827" }}>{e.role}</div><div style={{ fontSize: 14, color: "#6b7280" }}>{e.company} · {e.location}</div></div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <span style={{ background: "var(--primary-soft)", color: "var(--primary)", padding: "5px 14px", borderRadius: 99, fontSize: 13, fontWeight: 600 }}>{e.period}</span>
              {e.current && <span style={{ background: "#ecfdf5", color: "#059669", padding: "5px 14px", borderRadius: 99, fontSize: 13, fontWeight: 600 }}>● Current</span>}
            </div>
          </div>
          <div style={{ marginBottom: 26 }}>
            {e.bullets.map((b, i) => (
              <div key={i} style={{ display: "flex", gap: 11, marginBottom: 12, padding: "13px 15px", background: "#f9fafb", borderRadius: 10, border: "1px solid #f3f4f6" }}>
                <span style={{ color: "var(--primary)", flexShrink: 0, marginTop: 1 }}><Ico n="check" s={13} /></span>
                <span style={{ fontSize: 14, color: "#374151", lineHeight: 1.65 }}>{b}</span>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>Tech Stack</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {e.stack.map((s, i) => <span key={i} style={{ fontSize: 13, color: "#7e3af2", background: "#f5f3ff", padding: "5px 13px", borderRadius: 8, fontWeight: 500 }}>{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── PROJECTS PAGE ────────────────────────────────────────────────────────────
const ProjectsPage = () => (
  <div style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 48px" }}>
    <Reveal><SectionTitle tag="Projects" title="Things I've Built" sub="Personal and professional projects" /></Reveal>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
      {DATA.projects.map((p, i) => (
        <Reveal key={i} delay={i * 80}>
          <ProjectCard p={p} />
        </Reveal>
      ))}
    </div>
  </div>
);

const ProjectCard = ({ p }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ background: "#fff", borderRadius: 16, padding: "28px 26px", border: `1px solid ${hov ? p.color : "#e5e7eb"}`, boxShadow: hov ? `0 16px 44px ${p.color}18` : "none", transform: hov ? "translateY(-4px)" : "none", transition: "all 0.25s", display: "flex", flexDirection: "column", cursor: "default" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <div style={{ width: 52, height: 52, borderRadius: 13, background: p.color + "15", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>{p.emoji}</div>
        <span style={{ fontSize: 11, color: "#9ca3af", fontFamily: "var(--mono)" }}>{p.period}</span>
      </div>
      <h3 style={{ fontFamily: "var(--display)", fontWeight: 800, fontSize: "1.1rem", color: "#111827", marginBottom: 10 }}>{p.name}</h3>
      <p style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.7, marginBottom: 16, flex: 1 }}>{p.desc}</p>
      <div style={{ marginBottom: 14 }}>
        {p.highlights.map((h, j) => <div key={j} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, color: "#374151", marginBottom: 4 }}><span style={{ color: p.color }}><Ico n="check" s={11} /></span>{h}</div>)}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
        {p.stack.map((s, j) => <span key={j} style={{ fontSize: 11, color: p.color, background: p.color + "12", padding: "3px 9px", borderRadius: 99, fontWeight: 500 }}>{s}</span>)}
      </div>
      <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: p.color, fontWeight: 600, textDecoration: "none" }}>View Repository <Ico n="ext" s={12} /></a>
    </div>
  );
};

// ─── BLOG PAGE ────────────────────────────────────────────────────────────────
const BlogPage = () => (
  <div style={{ maxWidth: 1160, margin: "0 auto", padding: "72px 48px" }}>
    <Reveal><SectionTitle tag="Blog" title="Articles & Insights" sub="Thoughts on engineering, automation, and technology" /></Reveal>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, marginBottom: 44 }}>
      {DATA.blogPosts.map((b, i) => (
        <Reveal key={i} delay={i * 70}>
          <BlogCard b={b} />
        </Reveal>
      ))}
    </div>
    <Reveal delay={250}>
      <div style={{ background: "linear-gradient(135deg, #eff6ff, #f5f3ff)", borderRadius: 20, padding: "44px 52px", border: "1px solid #dbeafe", textAlign: "center" }}>
        <div style={{ fontSize: 36, marginBottom: 14 }}>✍️</div>
        <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "1.4rem", color: "#111827", marginBottom: 10 }}>More Articles Coming Soon</h3>
        <p style={{ color: "#6b7280", fontSize: 15, maxWidth: 380, margin: "0 auto 22px" }}>I write about backend engineering, automation, and what I learn building systems. Stay tuned!</p>
        <a href={DATA.linkedin} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--primary)", color: "#fff", padding: "12px 22px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>Follow on LinkedIn <Ico n="ext" s={14} /></a>
      </div>
    </Reveal>
  </div>
);

const BlogCard = ({ b }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ background: "#fff", borderRadius: 16, overflow: "hidden", border: `1px solid ${hov ? b.color : "#e5e7eb"}`, boxShadow: hov ? `0 12px 36px ${b.color}18` : "none", transform: hov ? "translateY(-3px)" : "none", transition: "all 0.25s", cursor: "pointer" }}>
      <div style={{ height: 4, background: b.color }} />
      <div style={{ padding: "24px 24px 26px" }}>
        <div style={{ marginBottom: 13 }}><span style={{ fontSize: 11, color: b.color, background: b.color + "15", padding: "3px 10px", borderRadius: 99, fontWeight: 600 }}>{b.tag}</span></div>
        <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "0.98rem", color: "#111827", lineHeight: 1.45, marginBottom: 18 }}>{b.title}</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 12, color: "#9ca3af" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Ico n="cal" s={11} />{b.date}</span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Ico n="clock" s={11} />{b.mins} min read</span>
        </div>
      </div>
    </div>
  );
};

// ─── CONNECT PAGE ─────────────────────────────────────────────────────────────
const ConnectPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "72px 48px" }}>
      <Reveal><SectionTitle tag="Connect" title="Get In Touch" sub="Have an opportunity or just want to say hi? I'd love to hear from you." /></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 44, alignItems: "start" }}>
        <Reveal delay={100}>
          {sent ? (
            <div style={{ background: "#ecfdf5", border: "1px solid #a7f3d0", borderRadius: 16, padding: 48, textAlign: "center" }}>
              <div style={{ fontSize: 52, marginBottom: 14 }}>🎉</div>
              <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: "1.4rem", color: "#059669", marginBottom: 8 }}>Message Sent!</h3>
              <p style={{ color: "#374151", marginBottom: 20 }}>Thanks for reaching out. I'll get back to you soon.</p>
              <button onClick={() => setSent(false)} style={{ background: "var(--primary)", color: "#fff", padding: "11px 24px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: 14 }}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ background: "#fff", borderRadius: 16, padding: 34, border: "1px solid #e5e7eb" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                {[["name", "Your Name", "text"], ["email", "Email Address", "email"]].map(([f, ph, t]) => (
                  <div key={f}><label style={{ fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.05em" }}>{ph}</label><input type={t} value={form[f]} onChange={e => setForm({ ...form, [f]: e.target.value })} placeholder={ph} required style={{ width: "100%", padding: "11px 13px", border: "1px solid #d1d5db", borderRadius: 8, fontSize: 14, color: "#111827", outline: "none", background: "#fff" }} onFocus={e => e.target.style.borderColor = "var(--primary)"} onBlur={e => e.target.style.borderColor = "#d1d5db"} /></div>
                ))}
              </div>
              <div style={{ marginBottom: 14 }}><label style={{ fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.05em" }}>Subject</label><input type="text" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} placeholder="What's this about?" required style={{ width: "100%", padding: "11px 13px", border: "1px solid #d1d5db", borderRadius: 8, fontSize: 14, color: "#111827", outline: "none", background: "#fff" }} onFocus={e => e.target.style.borderColor = "var(--primary)"} onBlur={e => e.target.style.borderColor = "#d1d5db"} /></div>
              <div style={{ marginBottom: 22 }}><label style={{ fontSize: 12, fontWeight: 600, color: "#374151", display: "block", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.05em" }}>Message</label><textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me more..." rows={5} required style={{ width: "100%", padding: "11px 13px", border: "1px solid #d1d5db", borderRadius: 8, fontSize: 14, color: "#111827", outline: "none", resize: "vertical", fontFamily: "inherit", background: "#fff" }} onFocus={e => e.target.style.borderColor = "var(--primary)"} onBlur={e => e.target.style.borderColor = "#d1d5db"} /></div>
              <button type="submit" style={{ width: "100%", background: "var(--primary)", color: "#fff", padding: "13px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }} onMouseEnter={e => e.currentTarget.style.background = "#1541b8"} onMouseLeave={e => e.currentTarget.style.background = "var(--primary)"}>Send Message <Ico n="send" s={15} /></button>
            </form>
          )}
        </Reveal>
        <Reveal delay={180}>
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            {[{ icon: "mail", l: "Email", v: DATA.email, href: `mailto:${DATA.email}`, c: "#1a56db" }, { icon: "phone", l: "Phone", v: DATA.phone, href: `tel:${DATA.phone}`, c: "#057a55" }, { icon: "linkedin", l: "LinkedIn", v: "harshapradamd", href: DATA.linkedin, c: "#0077b5" }, { icon: "github", l: "GitHub", v: "harshapradamd", href: DATA.github, c: "#111827" }].map((c, i) => (
              <a key={i} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 15, padding: "18px 20px", background: "#fff", border: "1px solid #e5e7eb", borderRadius: 13, textDecoration: "none", transition: "all 0.2s" }} onMouseEnter={e => { e.currentTarget.style.borderColor = c.c; e.currentTarget.style.transform = "translateX(4px)"; e.currentTarget.style.boxShadow = `0 6px 20px ${c.c}18`; }} onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: c.c + "15", display: "flex", alignItems: "center", justifyContent: "center", color: c.c }}><Ico n={c.icon} s={17} /></div>
                <div><div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>{c.l}</div><div style={{ fontSize: 14, color: "#111827", fontWeight: 600, marginTop: 1 }}>{c.v}</div></div>
              </a>
            ))}
            <div style={{ background: "linear-gradient(135deg, #eff6ff, #f5f3ff)", borderRadius: 13, padding: "18px 20px", border: "1px solid #dbeafe", marginTop: 4 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                <span style={{ fontSize: 16 }}>⚡</span><span style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 14, color: "#111827" }}>Quick Response</span>
              </div>
              <p style={{ fontSize: 13, color: "#4b5563", lineHeight: 1.6 }}>I typically respond within 24 hours. Feel free to reach out for opportunities, collaborations, or tech discussions!</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

// ─── NAV ──────────────────────────────────────────────────────────────────────
const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "connect", label: "Connect" },
];

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    const h = () => setScrolled(el.scrollTop > 10);
    el.addEventListener("scroll", h);
    return () => el.removeEventListener("scroll", h);
  }, []);

  const go = (id) => { setPage(id); if (mainRef.current) mainRef.current.scrollTop = 0; };

  const pages = { home: <HomePage nav={go} />, about: <AboutPage />, experience: <ExperiencePage />, projects: <ProjectsPage />, blog: <BlogPage />, connect: <ConnectPage /> };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Figtree:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        :root { --primary: #1a56db; --primary-soft: #eff6ff; --display: 'Syne', sans-serif; --body: 'Figtree', sans-serif; --mono: 'JetBrains Mono', monospace; }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { height: 100%; }
        body { background: #fff; color: #111827; font-family: var(--body); }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #f9fafb; } ::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 2px; }
        @keyframes slideUp { from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none} }
        @keyframes fadeIn { from{opacity:0}to{opacity:1} }
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }
      `}</style>

      <div style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* ── NAVBAR ── */}
        <header style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.06)" : "none", flexShrink: 0, position: "relative", zIndex: 100, transition: "box-shadow 0.3s" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 48px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {/* Logo */}
            <button onClick={() => go("home")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--display)", fontWeight: 800, color: "#fff", fontSize: 16 }}>H</div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 15, color: "#111827", lineHeight: 1.15 }}>Harsha Prada</div>
                <div style={{ fontSize: 11, color: "#9ca3af", fontFamily: "var(--mono)" }}>Software Engineer</div>
              </div>
            </button>

            {/* Nav links */}
            <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
              {NAV.slice(1, -1).map(item => {
                const active = page === item.id;
                return (
                  <button key={item.id} onClick={() => go(item.id)} style={{ background: active ? "var(--primary-soft)" : "none", color: active ? "var(--primary)" : "#374151", border: "none", cursor: "pointer", padding: "8px 16px", borderRadius: 8, fontSize: 15, fontWeight: active ? 600 : 500, transition: "all 0.15s" }}
                    onMouseEnter={e => { if (!active) e.currentTarget.style.background = "#f3f4f6"; }}
                    onMouseLeave={e => { if (!active) e.currentTarget.style.background = "none"; }}
                  >{item.label}</button>
                );
              })}
              <button onClick={() => go("connect")} style={{ background: "var(--primary)", color: "#fff", border: "none", cursor: "pointer", padding: "9px 20px", borderRadius: 8, fontSize: 15, fontWeight: 600, marginLeft: 8, transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#1541b8"}
                onMouseLeave={e => e.currentTarget.style.background = "var(--primary)"}
              >Connect</button>
            </nav>
          </div>
        </header>

        {/* ── MAIN ── */}
        <main ref={mainRef} style={{ flex: 1, overflowY: "auto", background: "#fff" }} key={page}>
          <div style={{ animation: "fadeIn 0.25s ease both" }}>
            {pages[page]}
          </div>

          {/* FOOTER */}
          <footer style={{ background: "#111827", color: "#9ca3af", padding: "52px 48px 32px" }}>
            <div style={{ maxWidth: 1160, margin: "0 auto" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 44, marginBottom: 40 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--display)", fontWeight: 800, color: "#fff", fontSize: 15 }}>H</div>
                    <span style={{ fontFamily: "var(--display)", fontWeight: 700, color: "#fff", fontSize: 15 }}>Harsha Prada M D</span>
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.75, maxWidth: 260 }}>Software Engineer specializing in backend development, automation & scalable infrastructure at Zoho Corporation.</p>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--display)", fontWeight: 700, color: "#fff", fontSize: 14, marginBottom: 18 }}>Navigation</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                    {NAV.map(n => <button key={n.id} onClick={() => go(n.id)} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", color: "#9ca3af", fontSize: 13, transition: "color 0.2s", padding: 0, fontFamily: "var(--body)" }} onMouseEnter={e => e.currentTarget.style.color = "#fff"} onMouseLeave={e => e.currentTarget.style.color = "#9ca3af"}>{n.label}</button>)}
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--display)", fontWeight: 700, color: "#fff", fontSize: 14, marginBottom: 18 }}>Contact</div>
                  <div style={{ fontSize: 13, lineHeight: 2.1, color: "#9ca3af" }}>
                    <div>{DATA.email}</div>
                    <div>{DATA.phone}</div>
                    <div>{DATA.location}</div>
                    <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
                      <a href={DATA.github} target="_blank" rel="noreferrer" style={{ color: "#9ca3af", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#fff"} onMouseLeave={e => e.currentTarget.style.color = "#9ca3af"}><Ico n="github" s={18} /></a>
                      <a href={DATA.linkedin} target="_blank" rel="noreferrer" style={{ color: "#9ca3af", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#fff"} onMouseLeave={e => e.currentTarget.style.color = "#9ca3af"}><Ico n="linkedin" s={18} /></a>
                      <a href={`mailto:${DATA.email}`} style={{ color: "#9ca3af", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#fff"} onMouseLeave={e => e.currentTarget.style.color = "#9ca3af"}><Ico n="mail" s={18} /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ borderTop: "1px solid #374151", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13 }}>
                <span>© 2025 Harsha Prada M D · All rights reserved</span>
                <span style={{ color: "#6b7280" }}>Built with React ⚡</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
