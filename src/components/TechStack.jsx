import Reveal from "./Reveal.jsx";
import reactLogo from "../logo/react.png";
import nodeLogo from "../logo/node.png";
import pythonLogo from "../logo/python.webp";
import phpLogo from "../logo/php.png";
import mongoLogo from "../logo/mongo.png";
import mysqlLogo from "../logo/mysql.png";
import pgLogo from "../logo/postgres.png";
import jsLogo from "../logo/javascript.png";
import htmlLogo from "../logo/html.png";
import cssLogo from "../logo/css.png";
import awsLogo from "../logo/Amazon_Web_Services_Logo.svg.webp";
import dockerLogo from "../logo/docker.jpg";
import gitLogo from "../logo/git.png";
import cicdLogo from "../logo/ci-cd.png";

const STACK = {
  Frontend: ["React", "JavaScript", "HTML", "CSS"],
  Backend: ["Node.js", "Python", "PHP"],
  Database: ["MongoDB", "MySQL", "PostgreSQL"],
  "Cloud & Tools": ["AWS", "Docker", "Git", "CI/CD"],
};

const LOGOS = {
  React: reactLogo,
  "Node.js": nodeLogo,
  Python: pythonLogo,
  PHP: phpLogo,
  MongoDB: mongoLogo,
  MySQL: mysqlLogo,
  PostgreSQL: pgLogo,
  JavaScript: jsLogo,
  HTML: htmlLogo,
  CSS: cssLogo,
  AWS: awsLogo,
  Docker: dockerLogo,
  Git: gitLogo,
  "CI/CD": cicdLogo,
};

export default function TechStack() {
  return (
    <section id="stack">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Technology</p>
          <h2>Engineered with modern technology</h2>
          <p>We build on proven, in-demand technology so your platform is fast to build and easy to maintain long-term.</p>
        </div>

        <div className="stack-grid">
          {Object.entries(STACK).map(([group, items], i) => (
            <Reveal key={group} delay={i * 90} className="stack-col">
              <h4>{group}</h4>
              <ul>
                {items.map((item) => (
                  <li key={item} className="stack-item">
                    {LOGOS[item] ? (
                      <img src={LOGOS[item]} alt={item + " logo"} className="stack-logo" />
                    ) : null}
                    <span className="stack-label">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .stack-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        .stack-col h4 {
          font-family: var(--font-body);
          font-size: 12.5px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--line);
        }
        .stack-col ul {
          list-style: none;
          margin: 18px 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .stack-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-display);
          font-size: 18px;
          color: var(--ink);
          transition: color 0.18s ease, transform 0.18s ease;
          cursor: default;
        }
        .stack-item:hover { color: var(--maroon); transform: translateX(4px); }
        .stack-logo { width: 34px; height: 34px; object-fit: contain; display: block; }
        .stack-label { display: inline-block; }
        @media (max-width: 900px) {
          .stack-grid { grid-template-columns: 1fr 1fr; row-gap: 36px; }
        }
        @media (max-width: 520px) {
          .stack-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
