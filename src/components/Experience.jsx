import { useInView } from "../hooks/useInView";
import { EXPERIENCES } from "../data/portfolioData";
import "../styles/Experience.css";

export default function Experience() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="experience" className="experience section" aria-labelledby="exp-title">
      <div className="section__head">
        <p className="section__eyebrow" aria-hidden="true">03 — Journey</p>
        <h2 className="section__title" id="exp-title">Work Experience</h2>
      </div>
      <div className="exp-list" ref={ref}>
        {EXPERIENCES.map((exp, i) => (
          <article
            key={exp.company + exp.period}
            className={`exp-item reveal ${inView ? "in" : ""}`}
            style={{ transitionDelay: `${i * 0.15}s` }}
            aria-label={`${exp.role} at ${exp.company}`}
          >
            <div className="exp-item__meta">
              <time className="exp-item__period" style={{ color: exp.color }}>
                {exp.period}
              </time>
              <span className="exp-item__location">{exp.location}</span>
            </div>

            <div className="exp-item__body">
              <h3 className="exp-item__role">{exp.role}</h3>
              <p className="exp-item__company" style={{ color: exp.color }}>
                {exp.company}
              </p>
              <ul className="exp-item__points" aria-label="Responsibilities">
                {exp.points.map((pt, j) => (
                  <li key={j} className="exp-item__point">{pt}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
