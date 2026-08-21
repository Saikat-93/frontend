import jssMark from "../logo/jss-technology-mark.svg";

const EMAIL = "info@jsstechnology.in";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="brand-mini">
            <img src={jssMark} alt="JSS Technology" className="brand-logo" />
            <span className="brand-name" aria-hidden="true">
              <span className="brand-name-jss">JSS </span>
              <span className="brand-name-tech">TECHNOLOGY</span>
            </span>
          </span>
          <p>Redefining Your Digital Ceiling.</p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#stack">Technology</a>
          <a href="#team">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <a href="#services">Web Development</a>
          <a href="#services">E-commerce</a>
          <a href="#services">Education Platforms</a>
          <a href="#services">Business Software</a>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span className="footer-copy">© {new Date().getFullYear()} Jss Technology. All rights reserved.</span>
      </div>

      <style>{`
        footer {
          border-top: 1px solid var(--line);
          background: var(--cream-alt);
          padding-top: 64px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 32px;
        }
        .footer-brand p {
          margin-top: 14px;
          color: var(--muted);
          font-size: 14px;
          max-width: 30ch;
        }
        .brand-mini {
          display: flex;
          align-items: center;
          gap: 9px;
          white-space: nowrap;
        }
        .brand-logo {
          width: 42px;
          height: 42px;
          object-fit: contain;
          flex: none;
        }
        .brand-name {
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 17px;
          letter-spacing: 0.01em;
          line-height: 1;
        }
        .brand-name-jss {
          color: #172334;
        }
        .brand-name-tech {
          background: linear-gradient(100deg, #4320B7 0%, #7B1FA2 30%, #E62D42 62%, #FF8A00 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-col h4 {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 4px;
        }
        .footer-col a {
          text-decoration: none;
          color: var(--ink);
          font-size: 14.5px;
          transition: color 0.2s ease;
        }
        .footer-col a:hover {
          color: var(--maroon);
        }
        .footer-bottom {
          margin-top: 56px;
          padding: 28px 32px;
          border-top: 1px solid var(--line);
        }
        .footer-copy {
          color: var(--muted);
          font-size: 13px;
        }
        @media (max-width: 780px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            row-gap: 40px;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
