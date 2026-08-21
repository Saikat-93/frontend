import Reveal from "./Reveal.jsx";

export default function Team() {
  return (
    <section id="team">
      <div className="container">
        <Reveal className="about-intro">
          <p className="eyebrow">About JSS Technology</p>
          <h2>
            Redefining your
            <br />
            <em>digital ceiling.</em>
          </h2>
          <p className="about-lead">
            At JSS Technology, we empower enterprises to break past traditional
            operational limits and scale with precision. We are a modern
            technology solutions provider specializing in cloud infrastructure,
            custom software engineering, and AI-driven digital transformation.
            By combining machine learning, automated workflows, and scalable
            architectures, we help organizations modernize operations, unlock
            data-driven insights, and achieve sustainable competitive advantage.
          </p>
        </Reveal>

        <div className="about-pillars">
          <Reveal className="about-pillar" delay={100}>
            <span className="pillar-number">01</span>
            <h3>Our Core Mission</h3>
            <p>
              To engineer robust, adaptable, and client-centric technology
              solutions that drive business efficiency, foster innovation, and
              create sustainable competitive advantages for enterprises
              worldwide.
            </p>
          </Reveal>

          <Reveal className="about-pillar" delay={180}>
            <span className="pillar-number">02</span>
            <h3>Our Vision</h3>
            <p>
              To be a premier digital transformation partner, pushing the
              boundaries of cloud architecture, software engineering, and data
              solutions to shape the future of enterprise technology.
            </p>
          </Reveal>
        </div>
      </div>

      <style>{`
        .about-intro {
          max-width: 930px;
        }
        .about-intro h2 {
          margin-top: 18px;
          font-size: clamp(42px, 6vw, 72px);
        }
        .about-intro h2 em {
          font-style: italic;
          color: var(--maroon);
        }
        .about-lead {
          max-width: 760px;
          margin-top: 24px;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.7;
        }
        .about-pillars {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
          margin-top: 72px;
        }
        .about-pillar {
          padding: 28px 30px 30px;
          border-top: 2px solid var(--maroon);
          background: var(--cream-alt);
        }
        .pillar-number {
          color: var(--terracotta);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }
        .about-pillar h3 {
          margin-top: 34px;
          font-size: 26px;
        }
        .about-pillar p {
          margin-top: 14px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.7;
        }
        @media (max-width: 700px) {
          .about-pillars {
            grid-template-columns: 1fr;
            margin-top: 52px;
          }
          .about-pillar {
            padding: 24px;
          }
          .about-pillar h3 {
            margin-top: 26px;
          }
        }
      `}</style>
    </section>
  );
}