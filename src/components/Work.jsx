import { useState } from "react";
import Reveal from "./Reveal.jsx";

// Replace `href` with a link to the live site once you have it.
// Put your screenshots in the `public/sample-website-ss/` folder and
// reference them with a root-relative path (forward slashes, no "src\").
const PROJECTS = [
  {
    tag: "Cafe & Restaurant",
    title: "Restaurant ordering & booking website",
    text: "A full website for a cafe/restaurant client covering menu browsing, table booking and online ordering, built to be fast and easy to manage.",
    tech: ["React", "Node.js", "MongoDB"],
    accent: "#A94A3F",
    image: "src\\sample-website-ss\\cafe and restru.png",
  },
  {
    tag: "E-commerce",
    title: "Online store platform",
    text: "A complete e-commerce site with product catalog, cart, checkout and an admin dashboard for managing orders and inventory.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    accent: "#5B1118",
    image: "src\\sample-website-ss\\realestate.png",
  },
  {
    tag: "Real Estate",
    title: "Full-stack real estate platform",
    text: "A property listing platform with search & filters, listing details, and a backend for agents to add and manage properties.",
    tech: ["React", "Python", "PostgreSQL"],
    accent: "#741C24",
    image: "src\\sample-website-ss\\real estate.png",
  },
];

function FlipCard({ project }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "is-flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
      role="button"
      tabIndex={0}
      aria-label={`${project.title} — tap to flip`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-face flip-card-front">
          <img src={project.image} alt={project.title} />
        </div>
        <div
          className="flip-card-face flip-card-back"
          style={{ "--mock-accent": project.accent }}
        >
          <span className="flip-tag">{project.tag}</span>
          <h4>{project.title}</h4>
          <div className="flip-tech">
            {project.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <span className="flip-hint">Tap to flip back</span>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work">
      <div className="container">
        <div className="section-head work-head">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Real projects, shipped for real clients</h2>
            <p>Digital products designed, engineered and shipped with purpose.</p>
          </div>
        </div>

        <div className="work-list">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="work-item">
              <div className="work-visual card">
                <FlipCard project={p} />
              </div>
              <div className="work-info">
                <span className="work-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <div className="work-tech">
                  {p.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <span className="work-link">
                  View case study
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .work-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
        }
        .work-list {
          display: flex;
          flex-direction: column;
          gap: 64px;
        }
        .work-item {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .work-item:nth-child(even) {
          direction: rtl;
        }
        .work-item:nth-child(even) > * {
          direction: ltr;
        }
        .work-visual {
          padding: 16px;
          overflow: visible;
        }

        /* --- Flip card --- */
        .flip-card {
          background: transparent;
          perspective: 1200px;
          cursor: pointer;
          border-radius: 12px;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35), 0 4px 12px rgba(0, 0, 0, 0.25);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .flip-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 26px 50px rgba(0, 0, 0, 0.45), 0 6px 16px rgba(0, 0, 0, 0.3);
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          /* Wider ratio so dashboard-style screenshots fit without cropping */
          aspect-ratio: 16 / 11;
          transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
          transform-style: preserve-3d;
          border-radius: 12px;
        }
        .flip-card.is-flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--line);
        }
        .flip-card-front {
          /* Padded background so "contain" images never look cramped or cropped */
          background: var(--cream-alt);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }
        .flip-card-front img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
          border-radius: 6px;
        }
        .flip-card-back {
          transform: rotateY(180deg);
          background: var(--cream-alt);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 28px;
          gap: 14px;
        }
        .flip-tag {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--mock-accent);
        }
        .flip-card-back h4 {
          font-size: 20px;
          line-height: 1.3;
        }
        .flip-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .flip-tech span {
          font-size: 12px;
          color: var(--muted);
          border: 1px solid var(--line);
          border-radius: 999px;
          padding: 4px 10px;
        }
        .flip-hint {
          margin-top: auto;
          font-size: 12px;
          color: var(--muted);
          opacity: 0.7;
        }

        .work-tag {
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--terracotta);
        }
        .work-info h3 {
          font-size: clamp(22px, 2.6vw, 30px);
          margin-top: 12px;
        }
        .work-info p {
          margin-top: 14px;
          color: var(--muted);
          font-size: 15.5px;
          max-width: 46ch;
        }
        .work-tech {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .work-tech span {
          font-size: 12.5px;
          color: var(--muted);
          border: 1px solid var(--line);
          border-radius: 999px;
          padding: 5px 12px;
        }
        .work-link {
          margin-top: 26px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 14.5px;
          color: var(--maroon);
        }
        .work-link svg {
          transition: transform 0.25s ease;
        }
        .work-item:hover .work-link svg {
          transform: translateX(3px);
        }
        @media (max-width: 900px) {
          .work-item, .work-item:nth-child(even) {
            grid-template-columns: 1fr;
            direction: ltr;
          }
        }
      `}</style>
    </section>
  );
}