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


export default function FinalCTA() {
  const techs = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "🚂" },
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "🌿" },
  { name: "PHP", icon: "🐘" },
  { name: "JavaScript", icon: "✨" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Bootstrap", icon: "🅱️" },
  { name: "MySQL", icon: "🐬" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "PostgreSQL", icon: "🟦" },
  { name: "MongoDB", icon: "🍃" }
];

  const LOGOS = {
    React: reactLogo,
    "Node.js": nodeLogo,
    Python: pythonLogo,
    PHP: phpLogo,
    JavaScript: jsLogo,
    "Tailwind CSS": cssLogo,
    Bootstrap: cssLogo,
    MySQL: mysqlLogo,
    AWS: awsLogo,
    Docker: dockerLogo,
    PostgreSQL: pgLogo,
    MongoDB: mongoLogo,
  };

  // continuous marquee doesn't need React state here

  return (
    <section className="final-cta">
      <div className="final-lines" aria-hidden="true" />
      <div className="container final-inner">
        <Reveal as="p" className="final-eyebrow">
          Have an idea?
        </Reveal>
        <Reveal as="h2" className="final-h2" delay={80}>
          Let's build something
          <br />
          <em>great</em> together.
        </Reveal>
        <Reveal as="p" className="final-sub" delay={160}>
          Tell us what you're building. We'll help turn the idea into a
          real digital product.
        </Reveal>
        <Reveal delay={240}>
          <a href="#contact" className="btn btn-cream">
            Start a project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Reveal>
        <Reveal as="div" delay={320} className="tech-slider-wrap">
          <div className="marquee" aria-hidden="false">
            <div className="marquee-track">
              {techs.concat(techs).map((t, i) => (
                <div className="tech-card" key={i}>
                  <div className="tech-card-inner">
                    {LOGOS[t.name] ? (
                      <img src={LOGOS[t.name]} alt={t.name + ' logo'} className="tech-logo" />
                    ) : (
                      <div className="tech-icon">{t.icon}</div>
                    )}
                    <div className="tech-info">
                      <div className="tech-name">{t.name}</div>
                      <div className="tech-desc">{t.desc || ''}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>


      <style>{`
        .final-cta {
          background: var(--maroon);
          position: relative;
          overflow: hidden;
          padding: 110px 0;
          text-align: center;
        }
        .final-lines {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            115deg,
            rgba(248, 244, 236, 0.05) 0px,
            rgba(248, 244, 236, 0.05) 1px,
            transparent 1px,
            transparent 64px
          );
          pointer-events: none;
        }
        .final-inner {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .final-eyebrow {
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--terracotta);
        }
        .final-h2 {
          margin-top: 18px;
          color: var(--cream);
          font-size: clamp(34px, 5.6vw, 58px);
        }
        .final-h2 em {
          font-style: italic;
        }
        .final-sub {
          margin-top: 22px;
          color: rgba(248, 244, 236, 0.75);
          font-size: 17px;
          max-width: 44ch;
        }
        .btn-cream {
          margin-top: 40px;
          background: var(--cream);
          color: var(--maroon);
        }
        .btn-cream:hover {
          background: #fff;
        }
        .tech-slider-wrap { margin-top: 28px; }
        .marquee { overflow: hidden; width: 100%; }
        .marquee-track {
          display: flex;
          gap: 18px;
          align-items: stretch;
          animation: marqueeScroll 30s linear infinite;
        }
        .marquee:hover .marquee-track { animation-play-state: paused; }
        .tech-card {
          background: rgba(255,255,255,0.02);
          border-radius: 10px;
          padding: 18px 20px;
          min-width: 180px;
          box-shadow: 0 6px 18px rgba(0,0,0,0.18);
          display: flex;
          align-items: center;
        }
        .tech-card-inner { display:flex; gap:12px; align-items:center; }
        .tech-icon { font-size: 28px; }
        .tech-logo { width: 40px; height: 40px; object-fit: contain; display: block; }
        .tech-info { text-align: left; color: var(--cream); }
        .tech-name { font-weight: 700; font-size: 15px; }
        .tech-desc { font-size: 13px; color: rgba(248,244,236,0.72); margin-top:4px; }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
