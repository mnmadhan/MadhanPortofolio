import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { PROJECTS } from "../data/portfolioData";
import "../styles/Projects.css";

function ProjectCard({ project, index, inView }) {
  const [expanded, setExpanded] = useState(false);
  const { title, tech, desc, problem, impact, architecture, github, accent, icon } = project;

  return (
    <article
      className={`proj-card reveal ${inView ? "in" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
      aria-label={title}
    >
      {/* Accent bar */}
      <div className="proj-card__bar" style={{ background: accent }} aria-hidden="true" />

      {/* Header row */}
      <div className="proj-card__header">
        <span className="proj-card__num" aria-hidden="true">0{index + 1}</span>
        <span className="proj-card__icon" aria-hidden="true">{icon}</span>
      </div>

      <h3 className="proj-card__title">{title}</h3>
      <p className="proj-card__desc">{desc}</p>

      {/* Engineering depth panel */}
      <div className={`proj-card__depth ${expanded ? "open" : ""}`} aria-hidden={!expanded}>
        <div className="proj-card__depth-row">
          <span className="proj-card__depth-label">Problem</span>
          <span className="proj-card__depth-value">{problem}</span>
        </div>
        <div className="proj-card__depth-row">
          <span className="proj-card__depth-label">Architecture</span>
          <span className="proj-card__depth-value proj-card__arch">{architecture}</span>
        </div>
        <div className="proj-card__depth-row">
          <span className="proj-card__depth-label">Impact</span>
          <span className="proj-card__depth-value">{impact}</span>
        </div>
      </div>

      {/* Tech tags */}
      <ul className="proj-card__tags" aria-label="Technologies used">
        {tech.map(t => (
          <li key={t} className="proj-card__tag"
            style={{ color: accent, borderColor: `${accent}44`, background: `${accent}0D` }}>
            {t}
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="proj-card__actions">
        <button
          className="proj-card__toggle"
          style={{ color: accent, borderColor: `${accent}44` }}
          onClick={() => setExpanded(p => !p)}
          aria-expanded={expanded}
          aria-controls={`depth-${index}`}
        >
          {expanded ? "Hide Details ↑" : "Engineering Details ↓"}
        </button>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="proj-card__github"
          aria-label={`View ${title} on GitHub (opens in new tab)`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const [ref, inView] = useInView(0.05);

  return (
    <section id="projects" className="projects section" aria-labelledby="proj-title">
      <div className="section__head">
        <p className="section__eyebrow" aria-hidden="true">04 — Work</p>
        <h2 className="section__title" id="proj-title">Featured Projects</h2>
        <p className="projects__sub">
          Click <em>Engineering Details</em> on any card to see architecture, problem solved, and real impact.
        </p>
      </div>
      <div className="projects__grid" ref={ref}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}
