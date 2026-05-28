import { useState, useEffect, useCallback } from "react";
import { NAV_LINKS } from "../data/portfolioData";
import "../styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("about");
  const [open,     setOpen]     = useState(false);

  const go = useCallback((id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = NAV_LINKS.map(l => l.toLowerCase());
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 130) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (!e.target.closest(".navbar__drawer") && !e.target.closest(".navbar__ham")) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Main navigation">
        <button
          className="navbar__logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Go to top"
        >
          Madhan<span>.</span>
        </button>

        <ul className="navbar__links" role="list">
          {NAV_LINKS.map(l => (
            <li key={l}>
              <button
                className={`navbar__link ${active === l.toLowerCase() ? "active" : ""}`}
                onClick={() => go(l)}
                aria-current={active === l.toLowerCase() ? "true" : undefined}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__ham ${open ? "open" : ""}`}
          onClick={() => setOpen(p => !p)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-drawer"
        >
          <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
        </button>
      </nav>

      <ul
        id="mobile-drawer"
        className={`navbar__drawer ${open ? "open" : ""}`}
        role="list"
        aria-hidden={!open}
      >
        {NAV_LINKS.map(l => (
          <li key={l}>
            <button className="navbar__drawer-link" onClick={() => go(l)}>{l}</button>
          </li>
        ))}
      </ul>
    </>
  );
}
