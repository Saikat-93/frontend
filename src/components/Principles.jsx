import Reveal from "./Reveal.jsx";

const PRINCIPLES = [
  { title: "Clarity", text: "Clear communication from idea to launch." },
  { title: "Craft", text: "Thoughtful design and clean engineering." },
  { title: "Ownership", text: "We take responsibility for the product we build." },
];

export default function Principles() {
  return (
    <section className="principles">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">What matters to us</p>
          <h2>The principles behind every project</h2>
        </div>

        <div className="principles-grid">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="principle">
              <div className="principle-card">
                <div className="principle-deco" aria-hidden="true" />
                <div className="principle-body">
                  <span className="principle-index">{`0${i + 1}`}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .principles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .principle { padding: 0; }
        .principle-card {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          padding: 22px;
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.06);
          backdrop-filter: blur(8px) saturate(120%);
          transition: transform 280ms cubic-bezier(.2,.9,.2,1), box-shadow 280ms;
          box-shadow: 0 6px 18px rgba(0,0,0,0.12);
        }
        .principle-card:before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px; /* for gradient stroke */
          background: linear-gradient(90deg, rgba(255,180,110,0.12), rgba(255,120,160,0.08));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .principle-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 50px rgba(15,10,10,0.36);
        }
        .principle-deco {
          position: absolute;
          right: -40px;
          top: -24px;
          width: 140px;
          height: 140px;
          background: radial-gradient(circle at 30% 30%, rgba(255,200,120,0.08), transparent 30%), radial-gradient(circle at 70% 70%, rgba(255,100,160,0.04), transparent 35%);
          transform: rotate(12deg);
          pointer-events: none;
        }
        .principle-body { position: relative; z-index: 2; }
        .principle-index {
          font-family: var(--font-display);
          font-size: 13px;
          color: var(--terracotta);
          display:block;
        }
        .principle h3 {
          margin-top: 8px;
          font-size: 20px;
        }
        .principle p {
          margin-top: 10px;
          color: var(--muted);
          font-size: 15px;
          line-height:1.45;
        }
        @media (max-width: 980px) {
          .principles-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 720px) {
          .principles-grid { grid-template-columns: 1fr; gap: 16px; }
          .principle-card { padding: 18px; }
        }
      `}</style>
    </section>
  );
}
