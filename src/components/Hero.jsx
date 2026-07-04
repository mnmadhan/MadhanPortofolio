import { CONTACT } from "../data/portfolioData";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section id="about" className="hero" aria-label="Introduction">
      <div className="hero__left">
        <p className="hero__eyebrow">Full-stack developer, mostly MERN</p>

        <h1 className="hero__name">Madhan Raj R.</h1>

        <p className="hero__bio">
          I finished my B.Tech in AI &amp; Data Science in 2026, and spent the year
          before that actually building things — full-stack apps, mostly, and
          picking up the DevOps side of shipping them along the way. I'm comfortable
          in React and Node, getting better at the infra pieces (Docker, CI/CD),
          and I like understanding how something works end to end rather than
          just gluing libraries together.
        </p>
        <p className="hero__bio hero__bio--secondary">
          Outside of that I build small multiplayer games in Unity, mostly for fun.
          Based in {CONTACT.location}, looking for my first full-time role.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary">See what I've built</a>
          <a href="/resume.pdf" className="btn btn-outline" download>Resume</a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn</a>
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
        </div>
      </div>

      <div className="hero__right" aria-hidden="true">
        <div className="hero__photo-frame">
          <img
            src="/images/My-photo.png"
            alt="Madhan Raj R"
            className="hero__photo"
            width="360"
            height="480"
            onError={e => { e.target.style.display = "none"; }}
          />
        </div>
      </div>
    </section>
  );
}
