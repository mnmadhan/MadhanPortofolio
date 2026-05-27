import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";
import { EXPERIENCES } from "../data/portfolioData";
import "../styles/Experience.css";

export default function Experience() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="experience" className="section-pad" style={{ position: "relative" }}>
      {/* Background orb */}
      <div style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        background: "#8B5CF6", filter: "blur(100px)", opacity: 0.07,
        right: -100, top: 0, pointerEvents: "none",
      }} />

      <SectionHeader label="Journey" title="Work Experience" />

      <div className="experience__inner" ref={ref}>
        {/* Spine line */}
        <div className="experience__spine" />

        {EXPERIENCES.map((exp, i) => (
          <div
            key={i}
            className={`experience__item ${inView ? "visible" : ""}`}
            style={{ transitionDelay: `${i * 0.2}s` }}
          >
            {/* Number dot */}
            <div
              className="experience__dot"
              style={{
                background: exp.color,
                boxShadow: `0 0 20px ${exp.color}66`,
              }}
            >
              {i + 1}
            </div>

            {/* Card */}
            <div className="experience__card">
              <div className="experience__card-header">
                <h3 className="experience__role">{exp.role}</h3>
                <span
                  className="experience__period"
                  style={{ color: exp.color, borderColor: `${exp.color}55`, background: `${exp.color}11` }}
                >
                  {exp.period}
                </span>
              </div>

              <p className="experience__company" style={{ color: exp.color }}>
                {exp.company} &nbsp;·&nbsp; {exp.location}
              </p>

              <ul className="experience__points">
                {exp.points.map((pt, j) => (
                  <li key={j} className="experience__point">
                    <span className="experience__point-arrow" style={{ color: exp.color }}>▸</span>
                    <span className="experience__point-text">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
