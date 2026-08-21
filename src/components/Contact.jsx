import Reveal from "./Reveal.jsx";

// TODO: replace these with your real details.
const EMAIL = "info@jsstechnology.in";
const PHONE_DISPLAY = "+91 9382179280";
const PHONE_TEL = "+91 9382179280";
const GOOGLE_FORM_URL = "https://forms.gle/he8sikNnGK5qpDti8";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container contact-grid">
        <Reveal>
          <p className="eyebrow">Get in touch</p>
          <h2>Have a project in mind?</h2>
          <p className="contact-sub">
            Reach out by email or phone, or fill out our project form and
            we'll get back to you with next steps.
          </p>

          <div className="contact-links">
            <a href={`mailto:${EMAIL}`} className="contact-link">
              <span className="contact-link-label">Email</span>
              <span className="contact-link-value">
                <svg className="contact-mail-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {EMAIL}
              </span>
            </a>
            <a href={`tel:${PHONE_TEL}`} className="contact-link">
              <span className="contact-link-label">Phone</span>
              <span className="contact-link-value">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="card contact-cta">
          <span className="contact-cta-eyebrow">Start a project</span>
          <h3>Tell us about your project</h3>
          <p>
            Fill out our short project form with what you're building, your
            timeline and budget — it only takes a couple of minutes.
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary contact-form-btn"
          >
            Open project form ↗
          </a>
          <p className="contact-cta-note">Opens our Google Form in a new tab.</p>
        </Reveal>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }
        .contact-sub {
          margin-top: 18px;
          color: var(--muted);
          max-width: 42ch;
        }
        .contact-links {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .contact-link {
          text-decoration: none;
          color: var(--ink);
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-bottom: 18px;
          border-bottom: 1px solid var(--line);
          max-width: 340px;
          transition: border-color 0.2s ease;
        }
        .contact-link:hover {
          border-color: var(--maroon);
        }
        .contact-link-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--maroon);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .contact-link-value {
          font-family: var(--font-display);
          font-size: 21px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
        }
        .contact-mail-icon {
          color: var(--maroon);
          flex: none;
        }
        .contact-cta {
          padding: 40px;
          background: var(--cream-alt);
        }
        .contact-cta-eyebrow {
          font-size: 12px;
          font-weight: 600;
          color: var(--maroon);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .contact-cta h3 {
          font-size: 23px;
          margin-top: 12px;
        }
        .contact-cta p {
          margin-top: 12px;
          color: var(--muted);
          font-size: 14.5px;
        }
        .contact-form-btn {
          margin-top: 24px;
        }
        .contact-cta-note {
          margin-top: 12px;
          font-size: 12.5px;
          color: var(--muted);
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
