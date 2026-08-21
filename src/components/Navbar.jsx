import { useEffect, useState } from "react";
import jssMark from "../logo/jss-technology-mark.svg";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#stack", label: "Technology" },
  { href: "#team", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <img src={jssMark} alt="JSS Technology" className="brand-logo" />
          <span className="brand-name" aria-hidden="true">
            <span className="brand-name-jss">JSS</span>
            <span className="brand-name-tech">TECHNOLOGY</span>
          </span>
        </a>

        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary nav-cta">
          Start a project
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Start a project
          </a>
        </div>
      )}

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid transparent;
          background: var(--cream);
          transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .nav-scrolled {
          background: rgba(248, 244, 236, 0.82);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-color: var(--line);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          gap: 40px;
          padding-top: 20px;
          padding-bottom: 20px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
          margin-right: auto;
          white-space: nowrap;
        }
        .brand-logo {
          width: 42px;
          height: 42px;
          object-fit: contain;
          flex: none;
        }
        .brand-name {
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 17px;
          letter-spacing: 0.01em;
          line-height: 1;
        }
        .brand-name-jss {
          color: #172334;
        }
        .brand-name-tech {
          background: linear-gradient(100deg, #4320B7 0%, #7B1FA2 30%, #E62D42 62%, #FF8A00 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .nav-links {
          display: flex;
          gap: 30px;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--muted);
          font-size: 14.5px;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .nav-links a:hover {
          color: var(--maroon);
        }
        .nav-cta {
          padding: 11px 20px;
          font-size: 14px;
        }
        .nav-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 32px;
          height: 32px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .nav-toggle span {
          height: 2px;
          background: var(--ink);
          width: 100%;
          border-radius: 2px;
        }
        .nav-mobile {
          display: none;
        }
        @media (max-width: 900px) {
          .nav-links, .nav-cta { display: none; }
          .nav-toggle { display: flex; }
          .nav-mobile {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 0 20px 24px;
            border-top: 1px solid var(--line);
            padding-top: 20px;
          }
          .nav-mobile a {
            text-decoration: none;
            color: var(--ink);
            font-weight: 500;
          }
          .nav-mobile .btn {
            align-self: flex-start;
          }
        }
        @media (max-width: 420px) {
          .brand-logo {
            width: 36px;
            height: 36px;
          }
          .brand {
            gap: 8px;
          }
          .brand-name {
            font-size: 14px;
            letter-spacing: 0.11em;
          }
        }
      `}</style>
    </header>
  );
}
