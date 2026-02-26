import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import omImg from "./assets/om_img.jpg";

/* ─── Inline SVG Icons ───────────────────────────────── */
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="12.01" />
  </svg>
);

const GraduationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

/* ─── Skeleton row ───────────────────────────────────── */
const SkeletonCards = ({ count = 3 }) => (
  <div className="projects-grid">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="project-card skeleton-card">
        <div className="project-icon skeleton-icon">⋯</div>
        <div className="skeleton-line" style={{ width: "60%", height: 20 }} />
        <div className="skeleton-line" style={{ height: 60 }} />
      </div>
    ))}
  </div>
);

const SkeletonTimeline = ({ count = 1 }) => (
  <div className="timeline">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="timeline-item skeleton-card">
        <div className="timeline-icon skeleton-icon" />
        <div className="timeline-body">
          <div className="skeleton-line" style={{ width: "40%", height: 18, marginBottom: 8 }} />
          <div className="skeleton-line" style={{ width: "60%", height: 14 }} />
        </div>
      </div>
    ))}
  </div>
);

/* ─── Generic API hook ───────────────────────────────── */
function useApi(endpoint) {
  const [data, setData] = useState(null); // null = loading
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => setData(res.data))
      .catch(() => setError(true));
  }, [endpoint]);

  return { data, error };
}

/* ─── App ────────────────────────────────────────────── */
function App() {
  const projects = useApi("/api/projects");
  const skills = useApi("/api/skills");
  const experience = useApi("/api/experience");
  const education = useApi("/api/education");

  return (
    <div className="portfolio-root">
      {/* Animated background blobs */}
      <div className="bg-blob bg-blob-1" aria-hidden="true" />
      <div className="bg-blob bg-blob-2" aria-hidden="true" />
      <div className="bg-blob bg-blob-3" aria-hidden="true" />

      <div className="page-content">

        {/* ── Navbar ── */}
        <nav className="portfolio-nav" aria-label="Main navigation">
          <div className="nav-brand">
            <img src={omImg} alt="Om Kiran Kithani" className="nav-profile-img" />
            <div className="nav-brand-text">
              <span className="nav-brand-name">Om Kiran Kithani</span>
              <span className="nav-brand-role">Internship Trainee · AI &amp; DevOps</span>
            </div>
          </div>
          <ul className="nav-links" id="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="mailto:omkithani.office@gmail.com" className="nav-cta">Hire Me</a></li>
          </ul>
        </nav>

        {/* ── Hero ── */}
        <section className="hero-section" id="about" aria-label="Hero">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Open to opportunities
          </div>
          <h1 className="hero-title">
            Engineering Student<br />Exploring AI &amp; DevOps
          </h1>
          <p className="hero-subtitle">
            Hands-on experience building web applications, integrating AI tools,
            and automating infrastructure with Linux &amp; Docker. Currently interning
            at <strong style={{ color: "#38bdf8" }}>Zymr Systems</strong>, Pune.
          </p>

          {/* Contact pills */}
          <div className="hero-contact-row">
            <a href="mailto:omkithani.office@gmail.com" className="contact-pill" id="contact-email">
              <MailIcon /> omkithani.office@gmail.com
            </a>
            <a href="tel:+918010221750" className="contact-pill" id="contact-phone">
              <PhoneIcon /> +91 8010221750
            </a>
            <span className="contact-pill static" id="contact-location">
              <LocationIcon /> Pune, Maharashtra
            </span>
          </div>

          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary-glow" id="view-projects-btn">
              View Projects <ExternalLinkIcon />
            </a>
            <a
              href="https://github.com/Om-workspace"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-ghost"
              id="github-btn"
            >
              <GithubIcon /> GitHub
            </a>
          </div>
        </section>

        <hr className="divider" />

        {/* ── Skills ── */}
        <section className="section fade-up" id="skills" aria-label="Skills">
          <div className="container">
            <p className="section-label">Expertise</p>
            <h2 className="section-title">Skills &amp; Tools</h2>
            <p className="section-desc">
              Technologies I work with to build, automate, and ship projects.
            </p>

            {skills.data === null && !skills.error ? (
              /* Loading */
              <div className="skills-grid">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} className="skill-badge skeleton-card" style={{ width: 90, height: 34 }} />
                ))}
              </div>
            ) : skills.error ? (
              <p className="section-desc">Could not load skills.</p>
            ) : (
              <div className="skills-grid" role="list">
                {skills.data.map((skill) => (
                  <span key={skill.id} className="skill-badge" role="listitem">
                    <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
                    {skill.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </section>

        <hr className="divider" />

        {/* ── Experience ── */}
        <section className="section fade-up fade-up-delay-1" id="experience" aria-label="Experience">
          <div className="container">
            <p className="section-label">Work</p>
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-desc">Where I've been putting skills into practice.</p>

            {experience.data === null && !experience.error ? (
              <SkeletonTimeline count={1} />
            ) : experience.error ? (
              <p className="section-desc">Could not load experience.</p>
            ) : (
              <div className="timeline">
                {experience.data.map((exp) => (
                  <div key={exp.id} className="timeline-item">
                    <div className="timeline-icon"><BriefcaseIcon /></div>
                    <div className="timeline-body">
                      <div className="timeline-header">
                        <div>
                          <h3 className="timeline-role">{exp.role}</h3>
                          <span className="timeline-company">{exp.company}</span>
                        </div>
                        <div className="timeline-meta">
                          <span className="timeline-period">{exp.period}</span>
                          <span className="timeline-location">{exp.location}</span>
                        </div>
                      </div>
                      {exp.bullets && exp.bullets.length > 0 && (
                        <ul className="timeline-bullets">
                          {exp.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <hr className="divider" />

        {/* ── Projects ── */}
        <section className="section fade-up fade-up-delay-2" id="projects" aria-label="Projects">
          <div className="container">
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">Projects</h2>
            <p className="section-desc">Things I've built, automated, and shipped.</p>

            {projects.data === null && !projects.error ? (
              <SkeletonCards count={3} />
            ) : projects.error ? (
              <p className="section-desc">Could not load projects.</p>
            ) : (
              <div className="projects-grid">
                {projects.data.map((project) => {
                  const tags = project.tech_stack
                    ? project.tech_stack.split(",").map((t) => t.trim()).filter(Boolean)
                    : [];
                  return (
                    <article key={project.id} className="project-card" aria-label={project.title}>
                      <div className="project-card-header">
                        <div className="project-icon" aria-hidden="true">
                          {project.icon || "🚀"}
                        </div>
                        {project.github_url && (
                          <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-gh-link"
                            aria-label={`GitHub – ${project.title}`}
                          >
                            <GithubIcon />
                          </a>
                        )}
                      </div>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc">{project.description}</p>
                      {tags.length > 0 && (
                        <div className="tech-tags" aria-label="Tech stack">
                          {tags.map((tag) => (
                            <span key={tag} className="tech-tag">{tag}</span>
                          ))}
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <hr className="divider" />

        {/* ── Education ── */}
        <section className="section fade-up fade-up-delay-3" id="education" aria-label="Education">
          <div className="container">
            <p className="section-label">Academic</p>
            <h2 className="section-title">Education</h2>
            <p className="section-desc">My academic background and institutions.</p>

            {education.data === null && !education.error ? (
              <SkeletonTimeline count={3} />
            ) : education.error ? (
              <p className="section-desc">Could not load education.</p>
            ) : (
              <div className="timeline">
                {education.data.map((edu) => (
                  <div key={edu.id} className="timeline-item">
                    <div className="timeline-icon"><GraduationIcon /></div>
                    <div className="timeline-body">
                      <div className="timeline-header">
                        <div>
                          <h3 className="timeline-role">{edu.degree}</h3>
                          <span className="timeline-company">{edu.school}</span>
                        </div>
                        <div className="timeline-meta">
                          <span className="timeline-period">{edu.period}</span>
                          <span className="timeline-location">{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="portfolio-footer" aria-label="Footer">
          <div className="footer-links">
            <a
              href="https://github.com/Om-workspace"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              aria-label="GitHub"
              id="footer-github"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com/in/om-kithani"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-link"
              aria-label="LinkedIn"
              id="footer-linkedin"
            >
              <LinkedinIcon />
            </a>
            <a
              href="mailto:omkithani.office@gmail.com"
              className="footer-icon-link"
              aria-label="Email"
              id="footer-email"
            >
              <MailIcon />
            </a>
          </div>
          <p className="footer-copy">
            © 2026 Om Kiran Kithani &mdash; AI &amp; DevOps Portfolio
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;