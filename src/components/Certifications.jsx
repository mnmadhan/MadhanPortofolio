import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";
import { CERTIFICATIONS } from "../data/portfolioData";
import "../styles/ContactCert.css";

export default function Certifications() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="certifications" className="certifications section-pad">
      <SectionHeader label="Credentials" title="Certifications" />

      <div className="certifications__grid" ref={ref}>
        {CERTIFICATIONS.map((cert, i) => (
          <div
            key={i}
            className={`cert-card ${inView ? "visible" : ""}`}
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <div className="cert-card__icon">{cert.icon}</div>
            <div>
              <p className="cert-card__name">{cert.name}</p>
              <p className="cert-card__issuer">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
