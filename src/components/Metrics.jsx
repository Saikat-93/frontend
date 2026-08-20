import Reveal from "./Reveal.jsx";

const METRICS = [
  { value: "12+", label: "Years of combined experience" },
  { value: "10+", label: "Digital products delivered" },
  { value: "100%", label: "Hands-on engineering" },
];

export default function Metrics() {
  return (
    <section className="metrics">
      <div className="container metrics-row">
        {METRICS.map((m, i) => (
          <Reveal key={m.label} className="metric" delay={i * 90}>
            <span className="metric-value">{m.value}</span>
            <span className="metric-label">{m.label}</span>
          </Reveal>
        ))}
      </div>

      <style>{`
        .metrics {
          padding: 72px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .metrics-row {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
        }
        .metric {
          flex: 1 1 200px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .metric-value {
          font-family: var(--font-display);
          font-size: clamp(36px, 4.4vw, 52px);
          color: var(--maroon);
        }
        .metric-label {
          color: var(--muted);
          font-size: 15px;
        }
      `}</style>
    </section>
  );
}
