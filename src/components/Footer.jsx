import jssMark from "../logo/jss-technology-mark.svg";

const EMAIL = "info@jsstechnology.in";
const WEBSITE = "https://www.jsstechnology.com";

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
          <p className="footer-tagline">
            <span className="tagline-main">
              <span>Innovate.</span>{" "}
              <span className="tagline-automate">Automate.</span>{" "}
              <span className="tagline-elevate">Elevate.</span>
            </span>
            <span className="tagline-sub">Smart Solutions for a Digital Tomorrow</span>
          </p>
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
          <a className="footer-contact-link" href={`mailto:${EMAIL}`}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
              <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {EMAIL}
          </a>
          <a className="footer-contact-link" href={WEBSITE} target="_blank" rel="noopener noreferrer">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M10 13.5a4 4 0 0 0 5.7.1l2-2a4 4 0 0 0-5.7-5.7l-1.1 1.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M14 10.5a4 4 0 0 0-5.7-.1l-2 2A4 4 0 0 0 12 18.1l1.1-1.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            www.jsstechnology.com
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span className="footer-copy">© {new Date().getFullYear()} Jss Technology. All rights reserved.</span>
        <a className="privacy-link" href="/privacy-policy">Privacy Policy</a>
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
        .footer-tagline {
          display: flex;
          flex-direction: column;
          gap: 7px;
          max-width: 34ch;
        }
        .tagline-main {
          color: #172334;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.25;
          white-space: nowrap;
        }
        .tagline-automate {
          color: #6B27C7;
        }
        .tagline-elevate {
          background: linear-gradient(100deg, #D72B58, #FF7A00);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .tagline-sub {
          color: #172334;
          font-size: 13px;
          line-height: 1.4;
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
        .footer-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
        }
        .footer-contact-link svg {
          color: var(--maroon);
          flex: none;
        }
        .footer-bottom {
          margin-top: 56px;
          padding: 28px 32px;
          border-top: 1px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .footer-copy {
          color: var(--muted);
          font-size: 13px;
        }
        .privacy-link {
          color: var(--muted);
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .privacy-link:hover {
          color: var(--maroon);
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
          .footer-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </footer>
  );
}
