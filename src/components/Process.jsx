import Reveal from "./Reveal.jsx";

const STEPS = [
  { n: "01", title: "Discover", text: "We understand your business, users and the real problem worth solving." },
  { n: "02", title: "Design", text: "We turn requirements into a product experience and technical architecture." },
  { n: "03", title: "Build", text: "We engineer the frontend, backend, database and integrations." },
  { n: "04", title: "Launch", text: "We deploy, monitor and continuously improve for growth." },
];

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-head process-head">
          <p className="eyebrow eyebrow-inverse">Our process</p>
          <h2>From idea to production.</h2>
        </div>

        <div className="process-timeline">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} className="process-step" delay={i * 90}>
              <span className="process-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              {i < STEPS.length - 1 && <span className="process-line" aria-hidden="true" />}
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .process {
          background: var(--maroon);
          color: var(--cream);
          padding: 96px 0;
        }
        .process-head {
          margin-bottom: 56px;
        }
        .eyebrow-inverse {
          color: var(--terracotta);
        }
        .eyebrow-inverse::before {
          background: var(--cream);
        }
        .process h2 {
          color: var(--cream);
        }
        .process-timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        .process-step {
          position: relative;
          padding-top: 24px;
          border-top: 1px solid rgba(248, 244, 236, 0.28);
        }
        .process-n {
          font-family: var(--font-display);
          font-size: 15px;
          color: rgba(248, 244, 236, 0.65);
          display: block;
        }
        .process-step h3 {
          color: var(--cream);
          font-size: 22px;
          margin-top: 14px;
        }
        .process-step p {
          margin-top: 10px;
          color: rgba(248, 244, 236, 0.72);
          font-size: 14.5px;
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .process-timeline {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .process-step {
            padding: 24px 0;
          }
        }
      `}</style>
    </section>
  );
}
