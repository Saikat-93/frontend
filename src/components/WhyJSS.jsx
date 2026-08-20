import Reveal from "./Reveal.jsx";

const LINES = [
  "We understand the problem.",
  "We design the experience.",
  "We engineer the product.",
  "We launch it.",
  "We help it evolve.",
];

export default function WhyJSS() {
  return (
    <section className="whyjss">
      <div className="container">
        <Reveal as="h2" className="whyjss-h2">
          We don't just
          <br />
          <em>write code.</em>
        </Reveal>

        <ul className="whyjss-list">
          {LINES.map((line, i) => (
            <Reveal as="li" key={line} delay={i * 90}>
              {line}
            </Reveal>
          ))}
        </ul>
      </div>

      <style>{`
        .whyjss .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .whyjss-h2 {
          font-size: clamp(34px, 5vw, 56px);
        }
        .whyjss-h2 em {
          font-style: italic;
          color: var(--maroon);
        }
        .whyjss-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }
        .whyjss-list li {
          font-family: var(--font-display);
          font-size: clamp(20px, 2.6vw, 28px);
          padding: 18px 0;
          border-top: 1px solid var(--line);
          color: var(--ink);
        }
        .whyjss-list li:last-child {
          border-bottom: 1px solid var(--line);
        }
        @media (max-width: 900px) {
          .whyjss .container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
