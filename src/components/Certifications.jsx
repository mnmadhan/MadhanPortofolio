import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { CERTIFICATIONS } from "../data/portfolioData";
import "../styles/Certifications.css";

function CertImage({ src, name }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(!src);

  if (errored || !src) {
    return <div className="cert-card__icon-fallback" aria-hidden="true">{name.slice(0,2).toUpperCase()}</div>;
  }

  return (
    <>
      {!loaded && <div className="cert-card__skeleton" aria-hidden="true" />}
      <img
        src={src}
        alt={`${name} certificate`}
        className="cert-card__img"
        style={{ display: loaded ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        loading="lazy"
        width="48"
        height="48"
      />
    </>
  );
}

export default function Certifications() {
  const [ref, inView] = useInView(0.05);

  return (
    <section id="certifications" className="certs section" aria-labelledby="certs-title">
      <div className="section__head">
        <p className="section__label">Courses &amp; certifications</p>
        <h2 className="section__title" id="certs-title">Certifications</h2>
      </div>
      <ul className="certs__grid" ref={ref}>
        {CERTIFICATIONS.map((c, i) => (
          <li
            key={c.name}
            className={`cert-card reveal ${inView ? "in" : ""}`}
            style={{ transitionDelay: `${i * 0.04}s` }}
          >
            <CertImage src={c.img} name={c.name} />
            <div>
              <p className="cert-card__name">{c.name}</p>
              <p className="cert-card__issuer">{c.issuer}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
