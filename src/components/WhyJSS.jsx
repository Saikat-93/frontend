import Reveal from "./Reveal.jsx";

const REASONS = [
  {
    number: "01",
    title: "Cloud-First Engineering",
    text: "We architect resilient, high-availability cloud environments designed to seamlessly scale alongside your growing business operations.",
  },
  {
    number: "02",
    title: "Tailored Custom Solutions",
    text: "From enterprise applications to automated workflow platforms, we build customized software precisely mapped to your exact operational requirements.",
  },
  {
    number: "03",
    title: "End-to-End Modernization",
    text: "We guide organizations through every step of their digital journey, from technical strategy and consulting to deployment, security, and continuous optimization.",
  },
  {
    number: "04",
    title: "Agile & Scalable Execution",
    text: "Our modern technology stack and flexible development methodologies ensure rapid deployment, optimal performance, and long-term stability.",
  },
];

export default function WhyJSS() {
  return (
    <section className="whyjss">
      <div className="container">
        <div className="section-head whyjss-head">
          <p className="eyebrow">Why JSS Technology</p>
          <Reveal as="h2">
            Why partner with <em>JSS Technology?</em>
          </Reveal>
          <p>
            We combine strategic thinking, intelligent engineering, and
            dependable execution to help ambitious organizations move forward.
          </p>
        </div>

        <div className="whyjss-grid">
          {REASONS.map((reason, i) => (
            <Reveal as="article" className="whyjss-card" key={reason.title} delay={i * 80}>
              <span className="whyjss-number">{reason.number}</span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .whyjss-head {
          max-width: 700px;
          margin-bottom: 56px;
        }
        .whyjss-head h2 em {
          font-style: italic;
          color: var(--maroon);
        }
        .whyjss-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }
        .whyjss-card {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 20px;
          min-height: 188px;
          padding: 28px 30px;
          border: 1px solid var(--line);
          border-top: 3px solid var(--maroon);
          background: var(--cream-alt);
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        .whyjss-card:hover {
          transform: translateY(-5px);
          background: var(--panel);
          box-shadow: 0 16px 30px rgba(59, 8, 13, 0.1);
        }
        .whyjss-number {
          color: var(--terracotta);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding-top: 5px;
        }
        .whyjss-card h3 {
          font-size: clamp(21px, 2.3vw, 28px);
        }
        .whyjss-card p {
          margin-top: 14px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.65;
        }
        @media (max-width: 720px) {
          .whyjss-grid {
            grid-template-columns: 1fr;
          }
          .whyjss-card {
            min-height: auto;
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
