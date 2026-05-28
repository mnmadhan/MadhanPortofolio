import { useState, useEffect } from "react";
import { STATS, CONTACT } from "../data/portfolioData";
import "../styles/Hero.css";

function TypeWriter({ text, speed = 55 }) {
  const [out, setOut] = useState("");
  const [i, setI]     = useState(0);

  useEffect(() => {
    if (i >= text.length) return;
    const t = setTimeout(() => {
      setOut(p => p + text[i]);
      setI(x => x + 1);
    }, speed);
    return () => clearTimeout(t);
  }, [i, text, speed]);

  return (
    <span aria-label={text}>
      <span aria-hidden="true">{out}</span>
      <span className="hero__cursor" aria-hidden="true" style={{ opacity: i < text.length ? 1 : 0 }}>|</span>
    </span>
  );
}

export default function Hero() {
  const [go, setGo] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGo(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="about" className="hero" aria-label="Introduction">
      <div className="hero__rule" aria-hidden="true" />

      {/* ── LEFT ── */}
      <div className="hero__left">
        <p className="hero__number" aria-hidden="true">01 — Introduction</p>

        <h1 className="hero__name">
          Madhan<br /><em>Raj R.</em>
        </h1>

        <div className="hero__role-wrap" aria-live="polite">
          {go ? <TypeWriter text="Full Stack & DevOps Developer" /> : <span>&nbsp;</span>}
        </div>

        <p className="hero__bio">
          B.Tech AI & Data Science graduate building scalable web apps with{" "}
          <strong>Java & the MERN stack</strong>, actively upskilling in{" "}
          <strong>DevOps & Cloud</strong>. Open to full-time opportunities — based in Hyderabad.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-gold">View Work</a>
          <a href="/resume.pdf" className="btn btn-outline" download aria-label="Download Resume PDF">
            Resume ↓
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline" aria-label="LinkedIn profile (opens in new tab)">
            LinkedIn ↗
          </a>
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" aria-label="GitHub profile (opens in new tab)">
            GitHub ↗
          </a>
        </div>

        {/* Stats — fixed: no more duplicate render */}
        <div className="hero__stats" aria-label="Quick stats">
          {STATS.map(({ value, label }) => (
            <div className="hero__stat" key={label}>
              <div className="hero__stat-num" aria-label={`${value} ${label}`}>
                {value}
              </div>
              <div className="hero__stat-label" aria-hidden="true">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT — Photo ── */}
      <div className="hero__right" aria-hidden="true">
        <div className="hero__photo-frame">
          <img
            src="/images/your-photo.jpg"
            alt="Madhan Raj R, Full Stack & DevOps Developer"
            className="hero__photo"
            width="400"
            height="533"
            onError={e => { e.target.style.display = "none"; }}
          />
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for hire
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <p>Scroll</p>
        <div className="hero__scroll-bar" />
      </div>
    </section>
  );
}
