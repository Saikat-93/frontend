import { useState } from "react";
import Reveal from "./Reveal.jsx";

const FEATURES = [
  {
    n: "01",
    label: "EdTech",
    title: "Education technology platforms",
    text: "E-learning portals, course and student management systems built for schools, institutes and ed-tech businesses.",
  },
  {
    n: "02",
    label: "Devops",
    title: "Cloud Architecture & Infrastructure",
    text: "Scalable cloud migration, management, and security protocols.",
  },
  {
    n: "03",
    label: "Web apps",
    title: "Full-stack web applications",
    text: "Custom web platforms built with React on the frontend and Node.js or Python on the backend, from MVP to production.",
  },
  {
    n: "04",
    label: "E-commerce",
    title: "Enterprise Digital Transformation",
    text: "Strategic consulting to optimize business workflows through modern tech adoption.",
  },
  {
    n: "05",
    label: "IT services",
    title: "Data & IT Consulting",
    text: "Infrastructure design, analytics, and managed IT services to safeguard and optimize core data operations.",
  },
  {
    n: "06",
    label: "AI&ML",
    title: "AI & Machine Learning Integrations",
    text: "Predictive analytics, process automation, and intelligent data systems.",
  },
  {
    n: "07",
    label: "Support",
    title: "Maintenance & support",
    text: "Ongoing fixes, feature updates and a direct line to the developers who actually built your project.",
  },
];

export default function Features() {
  const [active, setActive] = useState(null);

  return (
    <section id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">What we build</p>
          <h2>End-to-end digital solutions</h2>
          <p>
            One team, the whole stack — from education platforms to
            business and e-commerce websites, designed and built end to end.
          </p>
        </div>

        <div className="feature-list">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              as="div"
              delay={i * 60}
              className={`feature-row ${active === i ? "is-active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <span className="feature-num">{f.n}</span>
              <span className="feature-title">{f.title}</span>
              <span className="feature-label">{f.label}</span>
              <svg className="feature-arrow" width="18" height="18" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="feature-panel">
                <p>{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .feature-list {
          display: flex;
          flex-direction: column;
        }
        .feature-row {
          display: grid;
          grid-template-columns: 56px 1fr auto 22px;
          align-items: center;
          gap: 24px;
          padding: 26px 20px;
          border-top: 1px solid var(--line);
          cursor: default;
          transition: background 0.25s ease, padding 0.25s ease;
        }
        .feature-list .feature-row:last-child {
          border-bottom: 1px solid var(--line);
        }
        .feature-num {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--muted);
          font-weight: 600;
        }
        .feature-title {
          font-family: var(--font-display);
          font-size: clamp(20px, 2.6vw, 28px);
          color: var(--ink);
          transition: color 0.2s ease;
        }
        .feature-label {
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--terracotta);
        }
        .feature-arrow {
          color: var(--muted);
          transition: transform 0.25s ease, color 0.25s ease;
        }
        .feature-row.is-active {
          background: var(--cream-alt);
          padding-left: 28px;
          padding-right: 28px;
        }
        .feature-row.is-active .feature-title {
          color: var(--maroon);
        }
        .feature-row.is-active .feature-arrow {
          transform: translateX(4px);
          color: var(--maroon);
        }
        .feature-panel {
          grid-column: 2 / 3;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease;
        }
        .feature-row.is-active .feature-panel {
          max-height: 80px;
        }
        .feature-panel p {
          padding-top: 12px;
          color: var(--muted);
          font-size: 15px;
          max-width: 56ch;
        }
        @media (max-width: 720px) {
          .feature-row {
            grid-template-columns: 40px 1fr 20px;
            gap: 14px;
          }
          .feature-label { display: none; }
          .feature-panel { grid-column: 2 / 3; }
        }
      `}</style>
    </section>
  );
}
