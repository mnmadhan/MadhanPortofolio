import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";
import { PROJECTS } from "../data/portfolioData";
import "../styles/Projects.css";

function ProjectCard({ project, index, inView }) {
  const { title, tech, desc, accent, icon } = project;

  return (
    <div
      className={`project-card ${inView ? "visible" : ""}`}
      style={{
        transitionDelay: `${index * 0.15}s`,
        "--card-accent": accent,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${accent}66`;
        e.currentTarget.style.boxShadow = `0 20px 60px ${accent}22`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(99,102,241,0.12)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Accent top bar */}
      <div className="project-card__bar" style={{ background: accent }} />

      {/* Background glow */}
      <div className="project-card__glow" style={{ background: accent }} />

      {/* Icon */}
      <span className="project-card__icon">{icon}</span>

      {/* Title */}
      <h3 className="project-card__title">{title}</h3>

      {/* Description */}
      <p className="project-card__desc">{desc}</p>

      {/* Tech tags */}
      <div className="project-card__tags">
        {tech.map((t) => (
          <span
            key={t}
            className="project-card__tag"
            style={{
              color: accent,
              borderColor: `${accent}44`,
              background: `${accent}11`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="projects" className="projects section-pad">
      {/* Bg orb */}
      <div style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        background: "#3B82F6", filter: "blur(120px)", opacity: 0.06,
        left: -150, top: 0, pointerEvents: "none",
      }} />

      <SectionHeader label="Work" title="Featured Projects" />

      <div className="projects__grid" ref={ref}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}
