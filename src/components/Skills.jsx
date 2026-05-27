import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";
import { SKILLS } from "../data/portfolioData";
import "../styles/Skills.css";

export default function Skills() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="skills" className="skills section-pad">
      <SectionHeader label="Expertise" title="Technical Skills" />

      <div className="skills__grid" ref={ref}>
        {Object.entries(SKILLS).map(([category, items], i) => (
          <div
            key={category}
            className={`skills__card ${inView ? "visible" : ""}`}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="skills__card-label">{category}</div>
            <div className="skills__tags">
              {items.map((item) => (
                <span key={item} className="skills__tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
