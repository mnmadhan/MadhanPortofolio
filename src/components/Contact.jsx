import { useState } from "react";
import { useInView } from "../hooks/useInView";
import SectionHeader from "./SectionHeader";
import { CONTACT } from "../data/portfolioData";
import "../styles/ContactCert.css";
import "../styles/SectionUI.css";

export default function Contact() {
  const [ref, inView] = useInView(0.15);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="contact section-pad">
      {/* Background glow */}
      <div className="contact__orb" />

      <SectionHeader label="Let's Connect" title="Get In Touch" />

      <div className={`contact__inner ${inView ? "visible" : ""}`} ref={ref}>
        <p className="contact__desc">
          I'm actively looking for full-time opportunities in <strong style={{ color: "#F1F5F9" }}>Full Stack</strong> or{" "}
          <strong style={{ color: "#F1F5F9" }}>DevOps</strong> roles. If you have an opening or just want to say hi —
          my inbox is always open!
        </p>

        {/* Action buttons */}
        <div className="contact__buttons">
          <button
            className={`btn ${copied ? "btn--success" : "btn--primary"}`}
            onClick={handleCopy}
          >
            {copied ? "✓ Copied!" : "📧 Copy Email"}
          </button>

          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            🔗 LinkedIn
          </a>

          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            🐙 GitHub
          </a>
        </div>

        {/* Meta info */}
        <div className="contact__meta">
          <span className="contact__meta-item">
            <span className="contact__meta-icon">📞</span>
            {CONTACT.phone}
          </span>
          <span className="contact__meta-item">
            <span className="contact__meta-icon">📍</span>
            {CONTACT.location}
          </span>
          <span className="contact__meta-item">
            <span className="contact__meta-icon">✉️</span>
            {CONTACT.email}
          </span>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <span className="footer__left">Madhan Raj R · Portfolio 2026</span>
        <span className="footer__right">
          Built with <span>♥</span> using React.js
        </span>
      </footer>
    </section>
  );
}
