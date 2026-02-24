import React, { useEffect, useRef, useState } from 'react';
import './App.css';

/* =========================================================
   NAVBAR
   ========================================================= */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="nav-logo">
        RG<span className="logo-dot">.</span>
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Work</a>
        <a href="#skills">Stack</a>
        <a href="#experience">XP</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="mailto:raghunandhanthillai0@gmail.com" className="nav-cta">
        Hire Me
      </a>
    </nav>
  );
};

/* =========================================================
   HERO
   ========================================================= */
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-grid" />
      <div className="hero-glow" />

      <div className="hero-body">
        <div className="hero-left">
          <h1 className="hero-hl">
            <span className="hl-row">
              <span className="hl-outline">BUILD</span>
              <span className="hl-fill">ING</span>
            </span>
            <span className="hl-row hl-row--indent">
              <span className="hl-fill">DIGI</span>
              <span className="hl-orange">TAL</span>
            </span>
            <span className="hl-row">
              <span className="hl-outline">EXPERI</span>
              <span className="hl-fill">ENCE</span>
            </span>
          </h1>

          <div className="hero-meta">
            <p className="hero-desc">
              Software Engineer crafting high-performance,<br />
              scalable systems with visual precision.
            </p>
            <div className="hero-actions">
              <a href="#experience" className="btn-primary">
                View Experience <span className="arr">&#x2192;</span>
              </a>
              <a href="#contact" className="btn-outline">
                Let's Talk
              </a>
            </div>
          </div>
        </div>

        {/* Mini bento in hero */}
        <div className="hero-bento">
          <div className="hb-card hb-card--img">
            <img
              src="/raghu.png"
              alt="Raghunandhan T"
              style={{
                transform: isMobile
                  ? 'scale(1.1) translateX(0px) translateY(30px)'
                  : 'scale(1.5) translateX(0px) translateY(50px)',
                transformOrigin: 'center bottom',
                transition: 'transform 0.4s ease'
              }}
            />
            <div className="hb-img-tag">RAGHUNANDHAN T — SWE</div>
          </div>

          <div className="hb-card hb-card--wide">
            <span className="hb-tag-line">
              Full Stack · Java · Python · AI · Game Development
            </span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-bar" />
        <span>SCROLL</span>
      </div>
    </section>
  );
};

/* =========================================================
   TICKER
   ========================================================= */
const Ticker = () => {
  const items = [
    'React', 'Node.js', 'TypeScript', 'Python', 'MongoDB',
    'AWS', 'Three.js', 'Docker', 'PostgreSQL', 'Redis',
    'GraphQL', 'Next.js', 'Tailwind', 'Prisma', 'Figma'
  ];
  const doubled = [...items, ...items];

  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">
            {item}<span className="ticker-sep">&#x2014;</span>
          </span>
        ))}
      </div>
    </div>
  );
};

/* =========================================================
   ABOUT BENTO
   ========================================================= */
const About = () => (
  <section id="about" className="section section--cream">
    <div className="container">
      <div className="sec-label">01 — ABOUT</div>

      <div className="about-bento">
        {/* Big intro card */}
        <div className="ab-card ab-card--intro">
          <h2 className="ab-headline">
            I engineer software that<br />
            <span className="text-orange">moves fast</span> and<br />
            <span className="text-outline">scales hard.</span>
          </h2>
          <p className="ab-body">
            I’m a motivated Computer Science Engineering student passionate about building innovative, real-world technology solutions. With a strong foundation in problem-solving and hands-on development, I enjoy exploring emerging technologies and turning ideas into meaningful digital experiences. Adaptable, collaborative, and driven by continuous improvement, I thrive in team environments and aim to create solutions that make a measurable impact.
          </p>
        </div>

        {/* Skill tags cloud */}
        <div className="ab-card ab-card--tags">
          <span className="ab-tags-label">Core Beliefs</span>
          <div className="ab-tags">
            {['Speed is a feature', 'Ship with intent', 'AI-augmented', 'No silent failures', 'Data-driven'].map((t, i) => (
              <span key={i} className="ab-tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Location card */}
        <div className="ab-card ab-card--location">
          <span className="ab-loc-label">Location</span>
          <span className="ab-loc-val">India — IST UTC+5:30</span>
          <div className="ab-loc-dot"><span className="pulse" /></div>
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   PROJECTS BENTO
   ========================================================= */
const projects = [
  {
    name: 'Panimalar Engineering College',
    type: 'GPA : 7.5',
    year: '2023 - 2027',
    desc: 'Bachelor of Computer Science Engineering',
    size: 'large',
    accent: '#ff4400',
  },
];

const ProjectsGrid = () => (
  <section id="projects" className="section section--dark">
    <div className="container">
      <div className="sec-label light">02 — EDUCATION</div>

      <div className="projects-bento">
        {projects.map((p, i) => (
          <div key={i} className={`pb-card pb-card--${p.size}`}>
            <div className="pb-top">
              <span className="pb-index" style={{ color: p.accent }}>{p.index}</span>
              <span className="pb-year">{p.year}</span>
            </div>
            <h3 className="pb-name">{p.name}</h3>
            <p className="pb-desc">{p.desc}</p>
            <div className="pb-bottom">
              <span className="pb-type">{p.type}</span>
              <span className="pb-arrow">&#x2197;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* =========================================================
   SKILLS BENTO
   ========================================================= */
const skills = [
  { name: 'React', pct: 95 },
  { name: 'Node.js', pct: 91 },
  { name: 'TypeScript', pct: 88 },
  { name: 'Python', pct: 83 },
  { name: 'Java', pct: 85 },
  { name: 'Unreal Engine 5', pct: 85 },
];

const SkillsSection = () => (
  <section id="skills" className="section section--cream">
    <div className="container">
      <div className="sec-label">03 — TECHNICAL STACK</div>

      <div className="skills-bento">
        {/* Intro card takes full left column */}
        <div className="sk-intro">
          <h2 className="sk-headline">
            Precision<br />
            <span className="text-orange">Tools.</span>
          </h2>
          <p className="sk-sub">
            A curated stack built for scalability, speed, and long-term maintainability.
          </p>
        </div>

        {/* Skills grid */}
        <div className="sk-grid">
          {skills.map((s, i) => (
            <div key={i} className="sk-card">
              <div className="sk-row">
                <span className="sk-name">{s.name}</span>
                <span className="sk-pct">{s.pct}%</span>
              </div>
              <div className="sk-bar-bg">
                <div className="sk-bar-fill" style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   EXPERIENCE
   ========================================================= */
const experiences = [
  { role: 'Intern, CODEBIND TECHNOLOGIES', period: '2024', detail: 'Gained hands-on experience in full-stack web development by contributing to real-time projects, building responsive user interfaces with HTML, CSS, and JavaScript, implementing server-side logic and database integration, managing deployments, and collaborating within professional development workflows.' },
  { role: 'Monolith Research and Training Labs Pvt. Ltd.', period: 'June 2025 - September 2025', detail: 'Gained hands-on experience in game development during an internship by contributing to real-time projects, implementing gameplay mechanics and interactive features in Unreal Engine 5 using Blueprints, and collaborating with team members to understand development pipelines, problem-solving strategies, and production workflows.' },
];

const Experience = () => (
  <section id="experience" className="section section--dark">
    <div className="container">
      <div className="sec-label light">04 — EXPERIENCE</div>

      <div className="exp-layout">
        <h2 className="exp-title">
          Career<br />
          <span className="text-orange">Timeline.</span>
        </h2>

        <div className="exp-list">
          {experiences.map((e, i) => (
            <div key={i} className="exp-item">
              <span className="exp-num">0{i + 1}</span>
              <div className="exp-body">
                <h3 className="exp-role">{e.role}</h3>
                <span className="exp-period">{e.period}</span>
                <p className="exp-detail">{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   ACHIEVEMENTS BENTO
   ========================================================= */
const Achievements = () => (
  <section id="achievements" className="section section--cream">
    <div className="container">
      <div className="sec-label">05 — RECOGNITION</div>

      <div className="ach-bento">
        <div className="ach-card ach-card--feat">
          <span className="ach-roman">I</span>
          <h3 className="ach-title">Web Development Itern Certificate</h3>
          <p className="ach-desc"></p>
        </div>

        <div className="ach-card ach-card--dark">
          <span className="ach-roman">II</span>
          <h3 className="ach-title">Unreal Engine 5 Game Development Certification</h3>
          <p className="ach-desc"></p>
        </div>

        <div className="ach-card ach-card--dark">
          <span className="ach-roman">III</span>
          <h3 className="ach-title">Microsoft AI Azure</h3>
          <p className="ach-desc"></p>
        </div>

        <div className="ach-card ach-card--cta">
          <span className="ach-cta-text">Want to see full credentials?</span>
          <a href="mailto:raghunandhanthillai0@gmail.com" className="ach-link">
            Get in Touch <span className="arr">&#x2192;</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   CONTACT
   ========================================================= */
const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-noise" />

    <div className="container">
      <div className="sec-label light">06 — CONTACT</div>

      <div className="contact-layout">
        <div className="contact-left">
          <h2 className="contact-hl">
            Let's Build<br />
            <span className="contact-white">Something</span><br />
            <span className="contact-outline">Remarkable.</span>
          </h2>

          <a href="mailto:raghunandhanthillai0@gmail.com" className="contact-email-btn">
            raghunandhanthillai0@gmail.com <span className="arr">&#x2197;</span>
          </a>
        </div>

        <div className="contact-right">
          <div className="contact-info-grid">
            <div className="ci-block">
              <span className="ci-label">Location</span>
              <span className="ci-val">India — IST</span>
            </div>
            <div className="ci-block">
              <span className="ci-label">Availability</span>
              <span className="ci-val">Open to Work</span>
            </div>
            <div className="ci-block">
              <span className="ci-label">Response</span>
              <span className="ci-val">Within 24hr</span>
            </div>
            <div className="ci-block">
              <span className="ci-label">Stack</span>
              <span className="ci-val">Full Stack + AI</span>
            </div>
          </div>

          <div className="contact-links">
            <a href="https://github.com/thillairaghu2005/" target="_blank" rel="noreferrer" className="cl-link">GitHub</a>
            <a href="https://linkedin.com/in/raghunandhan-t-aaa678356/" target="_blank" rel="noreferrer" className="cl-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* =========================================================
   FOOTER
   ========================================================= */
const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <span className="footer-logo">RAGHUNANDHAN T<span className="logo-dot">.</span></span>
      <span className="footer-copy">Designed and engineered with intent. 2026.</span>
      <div className="footer-links">
        <a href="https://github.com/thillairaghu2005/" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/raghunandhan-t-aaa678356/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:raghunandhanthillai0@gmail.com">Email</a>
      </div>
    </div>
  </footer>
);

/* =========================================================
   APP
   ========================================================= */
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <ProjectsGrid />
      <SkillsSection />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;