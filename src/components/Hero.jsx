import Reveal from "./Reveal.jsx";

const BADGES = [
  { label: "React", color: "#5B8DEF" },
  { label: "Node.js", color: "#5B1118" },
  { label: "PostgreSQL", color: "#336791" },
  { label: "AWS", color: "#B8590A" },
  { label: "Docker", color: "#2496ED" },
  { label: "Python", color: "#3776AB" },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal as="p" className="eyebrow">
            JSS Technology · Digital Product Engineering
          </Reveal>

          <h1 className="hero-h1">
            <Reveal as="span" className="hero-line" delay={80}>
              We build digital
            </Reveal>
            <Reveal as="span" className="hero-line" delay={160}>
              products that
            </Reveal>
            <Reveal as="span" className="hero-line hero-emph" delay={240}>
              drive real impact.
            </Reveal>
          </h1>

          <Reveal as="p" className="hero-sub" delay={320}>
            We design and engineer scalable web platforms, SaaS products,
            AI-powered experiences and business systems for ambitious
            companies.
          </Reveal>

          <Reveal className="hero-actions" delay={380}>
            <a href="#contact" className="btn btn-primary">
              Start a project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#work" className="btn btn-ghost">
              Explore our work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Reveal>
        </div>

        <Reveal className="hero-visual" delay={200} aria-hidden="true">
          <div className="dash">
            <div className="dash-topbar">
              <span className="dash-title">JSS Analytics</span>
              <span className="dash-search">Search anything…</span>
              <span className="dash-avatar" />
            </div>

            <div className="dash-stats">
              <div className="dash-stat">
                <span className="dash-stat-label">Revenue</span>
                <span className="dash-stat-value">₹8.45L</span>
                <span className="dash-stat-delta">▲ 32.6% vs last month</span>
              </div>
              <div className="dash-stat">
                <span className="dash-stat-label">Active Users</span>
                <span className="dash-stat-value">12.8K</span>
                <span className="dash-stat-delta">▲ 18.5% vs last month</span>
              </div>
              <div className="dash-stat">
                <span className="dash-stat-label">Conversion</span>
                <span className="dash-stat-value">3.24%</span>
                <span className="dash-stat-delta">▲ 12.4% vs last month</span>
              </div>
            </div>

            <div className="dash-row">
              <div className="dash-chart">
                <span className="dash-chart-label">Performance Overview <em>▲ 28.4%</em></span>
                <svg viewBox="0 0 320 90" className="dash-chart-svg" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="dashFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5B1118" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#5B1118" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,68 C20,60 30,72 45,58 C60,44 70,50 85,38 C100,26 115,40 130,30 C145,20 160,34 175,24 C190,14 205,30 220,20 C235,10 250,26 265,16 C280,6 300,18 320,8 L320,90 L0,90 Z"
                    fill="url(#dashFill)"
                  />
                  <path
                    d="M0,68 C20,60 30,72 45,58 C60,44 70,50 85,38 C100,26 115,40 130,30 C145,20 160,34 175,24 C190,14 205,30 220,20 C235,10 250,26 265,16 C280,6 300,18 320,8"
                    fill="none"
                    stroke="#5B1118"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="dash-chart-months">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Aug</span>
                </div>
              </div>

              <div className="dash-activity">
                <span className="dash-chart-label">Recent Activity</span>
                <ul>
                  <li><span className="dot dot-a" />New user registered<time>2m ago</time></li>
                  <li><span className="dot dot-b" />Subscription created<time>15m ago</time></li>
                  <li><span className="dot dot-c" />Payment received<time>22m ago</time></li>
                  <li><span className="dot dot-a" />New project created<time>1h ago</time></li>
                </ul>
              </div>
            </div>
          </div>

          {BADGES.map((b, i) => (
            <span key={b.label} className={`float-badge fb-${i}`}>
              <span className="fb-dot" style={{ background: b.color }} />
              {b.label}
            </span>
          ))}
        </Reveal>
      </div>

      <style>{`
        .hero {
          padding-top: 56px;
          padding-bottom: 96px;
          overflow: hidden;
          position: relative;
        }
        .hero-bg {
          position: absolute;
          inset: -10% -5% auto -5%;
          height: 640px;
          background:
            radial-gradient(ellipse 60% 50% at 75% 20%, rgba(91, 17, 24, 0.07), transparent 70%),
            radial-gradient(ellipse 40% 40% at 15% 10%, rgba(222, 212, 197, 0.6), transparent 70%);
          pointer-events: none;
        }
        .hero-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(91,17,24,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(91,17,24,0.035) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: linear-gradient(to bottom, black, transparent 85%);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1.02fr;
          gap: 48px;
          align-items: center;
          position: relative;
        }
        .hero-h1 {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          font-size: clamp(38px, 5vw, 58px);
        }
        .hero-line {
          display: block;
        }
        .hero-emph {
          font-style: italic;
          color: var(--maroon);
        }
        .hero-sub {
          margin-top: 24px;
          color: var(--muted);
          font-size: 17.5px;
          max-width: 46ch;
          line-height: 1.65;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          margin-top: 36px;
          flex-wrap: wrap;
        }

        /* Dashboard mock */
        .hero-visual {
          position: relative;
        }
        .dash {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 20px;
          box-shadow: 0 40px 90px -40px rgba(59, 8, 13, 0.28);
          animation: floatY 7s ease-in-out infinite;
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .dash-topbar {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--line);
        }
        .dash-title {
          font-family: var(--font-display);
          font-size: 19px;
          color: var(--maroon);
          margin-right: auto;
        }
        .dash-search {
          font-size: 12.5px;
          color: var(--muted);
          background: var(--cream-alt);
          border-radius: 999px;
          padding: 7px 16px;
          display: none;
        }
        .dash-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--maroon), var(--terracotta));
          flex: none;
        }
        .dash-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 18px;
        }
        .dash-stat {
          background: var(--cream-alt);
          border-radius: 12px;
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .dash-stat-label {
          font-size: 12px;
          color: var(--muted);
        }
        .dash-stat-value {
          font-family: var(--font-display);
          font-size: 22px;
          color: var(--ink);
        }
        .dash-stat-delta {
          font-size: 11px;
          color: #2E7D4F;
        }
        .dash-row {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 14px;
          margin-top: 14px;
        }
        .dash-chart, .dash-activity {
          background: var(--cream-alt);
          border-radius: 12px;
          padding: 16px;
        }
        .dash-chart-label {
          font-size: 12.5px;
          color: var(--muted);
          display: flex;
          justify-content: space-between;
        }
        .dash-chart-label em {
          font-style: normal;
          color: #2E7D4F;
        }
        .dash-chart-svg {
          width: 100%;
          height: 70px;
          margin-top: 10px;
        }
        .dash-chart-months {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          color: var(--muted);
          margin-top: 4px;
        }
        .dash-activity ul {
          list-style: none;
          margin: 12px 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .dash-activity li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: var(--ink);
        }
        .dash-activity li time {
          margin-left: auto;
          color: var(--muted);
          font-size: 11px;
        }
        .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex: none;
        }
        .dot-a { background: var(--maroon); }
        .dot-b { background: var(--terracotta); }
        .dot-c { background: #2E7D4F; }

        .float-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 999px;
          padding: 9px 14px;
          font-size: 12.5px;
          font-weight: 600;
          color: var(--ink);
          box-shadow: 0 16px 32px -16px rgba(59, 8, 13, 0.22);
          animation: floatBadge 6s ease-in-out infinite;
        }
        .fb-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex: none;
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .fb-0 { top: -14px; left: -10px; animation-delay: 0s; }
        .fb-1 { top: 110px; left: -30px; animation-delay: 0.6s; }
        .fb-2 { bottom: 60px; left: -34px; animation-delay: 1.2s; }
        .fb-3 { top: -10px; right: -20px; animation-delay: 0.3s; }
        .fb-4 { bottom: 90px; right: -30px; animation-delay: 0.9s; }
        .fb-5 { bottom: -14px; right: 40px; animation-delay: 1.5s; }

        @media (max-width: 1080px) {
          .float-badge { display: none; }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-visual { order: 2; margin-top: 8px; }
          .dash-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .dash-stats { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .dash, .float-badge { animation: none; }
        }
      `}</style>
    </section>
  );
}
