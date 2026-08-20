import Reveal from "./Reveal.jsx";

const TEAM = [
  {
    name: "Santunu Batabyal",
    role: "Senior Full-Stack Developer",
    years: "8+ yrs experience",
    bio: "Leads architecture and backend engineering across projects, from database design to deployment.",
  },
  {
    name: "Saikat Samanta",
    role: "Full-Stack Developer",
    years: "4 yrs experience",
    bio: "Builds frontend and backend features end to end, from UI implementation to API integration.",
  },
  {
    name: "Joydeep Chakraborty",
    role: "Senior Full-Stack Developer",
    years: "10+ yrs experience",
    bio: "Experienced in full-stack development, scalable application architecture, and delivering reliable digital products.",
  },
];

export default function Team() {
  return (
    <section id="team">
      <div className="container">
        <div className="section-head about-head">
          <p className="eyebrow">About Jss Technologies</p>
          <h2>
            Small team.
            <br />
            <em>Serious software.</em>
          </h2>
          <p>
            Jss Technologies is a hands-on software development team
            focused on turning ideas into reliable digital products —
            no account managers, no hand-offs, just the people building
            your platform.
          </p>
        </div>

        <Reveal delay={120}>
          <div className="team-marquee">
            <div className="marquee-track">
              {TEAM.concat([{ spacer: true }])
                .concat(TEAM)
                .concat([{ spacer: true }])
                .map((m, i) =>
                  m.spacer ? (
                    <div className="marquee-gap" key={"gap-" + i} />
                  ) : (
                    <div className="team-card-wrap" key={i}>
                      <div className="team-card card">
                        <div className="team-shine" />
                        <div className="team-avatar">{m.name.charAt(0)}</div>
                        <h3>{m.name}</h3>
                        <span className="team-role">{m.role}</span>
                        <span className="team-years">{m.years}</span>
                        <p>{m.bio}</p>
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .about-head h2 em {
          font-style: italic;
          color: var(--maroon);
        }
        .team-marquee { overflow: hidden; width: 100%; }
        .marquee-track {
          display: flex;
          gap: 22px;
          align-items: stretch;
          animation: teamScroll 26s linear infinite;
        }
        .marquee-gap { min-width: 880px; flex: 0 0 auto; }

        .team-card-wrap {
          min-width: 360px;
          max-width: 420px;
          flex: 0 0 auto;
          perspective: 1000px;
        }

        .team-card {
          position: relative;
          height: 100%;
          padding: 22px;
          border-radius: 10px;
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 6px 18px rgba(6,8,15,0.12);
          overflow: hidden;
          transform-style: preserve-3d;
          transform: rotateY(-6deg) rotateX(2deg) translateZ(0);
          transition: transform 320ms cubic-bezier(.2,.9,.2,1), box-shadow 320ms, border-color 320ms;
        }
        .team-card:hover {
          transform: rotateY(0deg) rotateX(0deg) translateZ(24px) translateY(-8px);
          box-shadow: 0 24px 48px rgba(6,8,15,0.28);
          border-color: rgba(255,255,255,0.14);
        }

        .team-shine {
          position: absolute;
          inset: -50% -50%;
          background: linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.10) 50%, transparent 60%);
          transform: translateX(-120%);
          transition: transform 700ms ease;
          pointer-events: none;
        }
        .team-card:hover .team-shine {
          transform: translateX(20%);
        }

        .team-avatar {
          position: relative;
          width: 64px;
          height: 64px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
          color: var(--maroon);
          font-family: var(--font-display);
          font-size: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(0,0,0,0.12);
          transform: translateZ(30px);
        }
        .team-card h3 {
          position: relative;
          margin-top: 14px;
          font-size: 18px;
          transform: translateZ(24px);
        }
        .team-role {
          position: relative;
          display: block;
          margin-top: 6px;
          color: var(--maroon);
          font-weight: 600;
          font-size: 13.5px;
          transform: translateZ(18px);
        }
        .team-years {
          position: relative;
          display: block;
          margin-top: 4px;
          color: var(--muted);
          font-size: 12.5px;
        }
        .team-card p {
          position: relative;
          margin-top: 12px;
          color: var(--muted);
          font-size: 14px;
        }

        @media (max-width: 980px) {
          .marquee-track { animation-duration: 28s; }
        }
        @media (max-width: 720px) {
          .team-card-wrap { perspective: none; min-width: auto; max-width: 100%; }
          .marquee-track { gap: 14px; animation-duration: 20s; }
          .team-card { transform: none !important; }
        }

        @keyframes teamScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}