import { useState, useEffect } from "react";
import { STATS, CONTACT } from "../data/portfolioData";
import "../styles/Hero.css";

/* ── Typewriter ── */
function TypeWriter({ text, speed = 58 }) {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx]             = useState(0);

  useEffect(() => {
    if (idx < text.length) {
      const t = setTimeout(() => {
        setDisplayed((p) => p + text[idx]);
        setIdx((i) => i + 1);
      }, speed);
      return () => clearTimeout(t);
    }
  }, [idx, text, speed]);

  return (
    <>
      {displayed}
      <span className="hero__cursor" style={{ opacity: idx < text.length ? 1 : 0 }}>|</span>
    </>
  );
}

export default function Hero() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="about" className="hero">
      {/* Decorative background orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      {/* Grid overlay */}
      <div className="grid-bg" />

      {/* Main content */}
      <div className="hero__content">
        {/* Badge */}
        <span className="hero__badge fade-up" style={{ animationDelay: "0.2s" }}>
          ✦ AVAILABLE FOR OPPORTUNITIES
        </span>

        {/* Name */}
        <h1 className="hero__name fade-up" style={{ animationDelay: "0.4s" }}>
          Madhan <span className="hero__name--highlight">Raj R.</span>
        </h1>

        {/* Animated role */}
        <h2 className="hero__role fade-up" style={{ animationDelay: "0.6s" }}>
          {started ? <TypeWriter text="Full Stack & DevOps Developer" /> : <span>&nbsp;</span>}
        </h2>

        {/* Description */}
        <p className="hero__desc fade-up" style={{ animationDelay: "0.8s" }}>
          B.Tech AI & Data Science graduate building scalable web apps with{" "}
          <strong>Java, MERN stack</strong>, and upskilling in{" "}
          <strong>DevOps & Cloud</strong>. Based in Hyderabad 📍
        </p>

        {/* CTA buttons */}
        <div className="hero__cta fade-up" style={{ animationDelay: "1s" }}>
          <a href="#projects" className="btn btn--primary">
            🚀 View Projects
          </a>
          <a href="#contact" className="btn btn--outline">
            💬 Contact Me
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            🔗 LinkedIn
          </a>
        </div>

        {/* Stats */}
        <div className="hero__stats fade-up" style={{ animationDelay: "1.2s" }}>
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <div className="hero__stat-value">{value}</div>
              <div className="hero__stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span className="hero__scroll-label">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
