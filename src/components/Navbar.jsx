import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/portfolioData";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState("about");
  const [menuOpen, setMenuOpen]   = useState(false);

  /* ── Scroll: glass effect + active section ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = NAV_LINKS.map((l) => l.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link) => {
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* Logo */}
        <div className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          MR<span>_DEV</span>
        </div>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <span
                className={`navbar__link ${active === link.toLowerCase() ? "active" : ""}`}
                onClick={() => handleNav(link)}
              >
                {link}
              </span>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div
          className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </div>
      </nav>

      {/* Mobile menu */}
      <ul className={`navbar__mobile ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <span className="navbar__mobile-link" onClick={() => handleNav(link)}>
              {link}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
