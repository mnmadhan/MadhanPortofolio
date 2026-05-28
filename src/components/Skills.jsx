import { useInView } from "../hooks/useInView";
import { SKILLS } from "../data/portfolioData";
import "../styles/Skills.css";

export default function Skills() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="skills" className="skills section" aria-labelledby="skills-title">
      <div className="section__head">
        <p className="section__eyebrow" aria-hidden="true">02 — Expertise</p>
        <h2 className="section__title" id="skills-title">Technical Skills</h2>
      </div>
      <div className="skills__grid" ref={ref}>
        {Object.entries(SKILLS).map(([cat, items], i) => (
          <div
            key={cat}
            className={`skill-cell reveal ${inView ? "in" : ""}`}
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <div className="skill-cell__cat" aria-label={`${cat} skills`}>{cat}</div>
            <ul className="skill-cell__items" aria-label={`${cat} technologies`}>
              {items.map(item => (
                <li key={item} className="skill-cell__item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
