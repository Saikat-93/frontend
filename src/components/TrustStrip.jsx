import Reveal from "./Reveal.jsx";

const INDUSTRIES = [
  "Education",
  "SaaS",
  "Real Estate",
  "Restaurants",
  "E-commerce",
  "Startups",
  "Business Operations",
];

export default function TrustStrip() {
  return (
    <section className="trust">
      <div className="container">
        <Reveal as="p" className="trust-heading">
          Technology built around real business
        </Reveal>
        <div className="trust-row">
          {INDUSTRIES.map((label, i) => (
            <Reveal as="span" key={label} className="trust-item" delay={i * 40}>
              {label}
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .trust {
          padding: 56px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: var(--cream-alt);
        }
        .trust-heading {
          text-align: center;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 28px;
        }
        .trust-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px 20px;
        }
        .trust-item {
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 600;
          color: var(--ink);
          padding: 10px 20px;
          border: 1px solid var(--line);
          border-radius: 999px;
          background: var(--cream);
          transition: border-color 0.2s ease, color 0.2s ease;
        }
        .trust-item:hover {
          border-color: var(--maroon);
          color: var(--maroon);
        }
        @media (max-width: 640px) {
          .trust-row { gap: 10px 12px; }
          .trust-item { font-size: 13.5px; padding: 8px 16px; }
        }
      `}</style>
    </section>
  );
}
