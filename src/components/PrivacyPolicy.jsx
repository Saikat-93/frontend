import jssMark from "../logo/jss-technology-mark.svg";

const sections = [
  {
    id: "information-we-collect",
    number: "01",
    title: "Information We Collect",
    paragraphs: [
      "When you interact with our website, we may collect information that you voluntarily provide, including:",
    ],
    list: [
      "Name",
      "Company or organization name",
      "Email address",
      "Phone number",
      "Job title or designation",
      "Business or project requirements",
      "Enquiry details",
      "Any other information submitted through our forms or communication channels",
    ],
    closing: "We may also automatically collect limited technical information such as your IP address, browser type, device information, pages visited and website usage data.",
  },
  {
    id: "how-we-use",
    number: "02",
    title: "How We Use Your Information",
    paragraphs: ["We may use the information collected to:"],
    list: [
      "Respond to your enquiries and requests",
      "Provide information about our products and services",
      "Prepare proposals and quotations",
      "Understand your business and technology requirements",
      "Provide customer and technical support",
      "Communicate regarding projects and services",
      "Improve our website, products and services",
      "Analyse website traffic and performance",
      "Send relevant business or marketing communications",
      "Maintain security and prevent fraudulent or unauthorized activities",
      "Comply with applicable legal and regulatory requirements",
    ],
  },
  {
    id: "cookies",
    number: "03",
    title: "Cookies",
    paragraphs: [
      "Our website may use cookies and similar technologies to improve functionality, analyse website usage and enhance your browsing experience.",
      "Cookies may help us understand how visitors use our website and improve our digital services.",
      "You can manage or disable cookies through your browser settings. Please note that disabling certain cookies may affect website functionality.",
    ],
  },
  {
    id: "third-party-services",
    number: "04",
    title: "Third-Party Services",
    paragraphs: ["We may use trusted third-party technology and service providers for purposes such as:"],
    list: [
      "Website analytics",
      "Hosting and infrastructure",
      "CRM and lead management",
      "Email communication",
      "Marketing and advertising",
      "Website security",
      "Customer communication",
      "Payment processing, where applicable",
    ],
    closing: "These third-party providers may process information in accordance with their own privacy policies and applicable laws.",
  },
  {
    id: "information-sharing",
    number: "05",
    title: "Information Sharing",
    paragraphs: [
      "JSS Technology does not sell or rent your personal information.",
      "We may share information with authorized employees, service providers, technology partners, professional advisors or government or legal authorities where reasonably necessary to provide our services, operate our business, protect our interests or comply with applicable laws.",
    ],
  },
  {
    id: "data-security",
    number: "06",
    title: "Data Security",
    paragraphs: [
      "We take reasonable technical and organizational measures to protect your information against unauthorized access, misuse, alteration, disclosure, loss or destruction.",
      "However, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
    ],
  },
  {
    id: "data-retention",
    number: "07",
    title: "Data Retention",
    paragraphs: [
      "We retain personal information only for as long as reasonably necessary for business, contractual, operational, legal or regulatory purposes.",
      "When information is no longer required, we may securely delete, anonymise or otherwise dispose of it.",
    ],
  },
  {
    id: "privacy-rights",
    number: "08",
    title: "Your Privacy Rights",
    paragraphs: ["Depending on applicable law, you may have the right to:"],
    list: [
      "Request access to your personal information",
      "Request correction of inaccurate information",
      "Request deletion where legally permitted",
      "Withdraw consent where applicable",
      "Request information regarding the processing of your personal information",
      "Opt out of marketing communications",
    ],
    closing: "To exercise any applicable rights, please contact us using the details below.",
  },
  {
    id: "marketing",
    number: "09",
    title: "Marketing Communications",
    paragraphs: [
      "If you have provided your contact information, we may occasionally contact you regarding our services, solutions, technology updates, events or business opportunities.",
      "You can request to stop receiving marketing communications at any time by contacting us or using the unsubscribe option provided in the communication.",
    ],
  },
  {
    id: "external-links",
    number: "10",
    title: "External Links",
    paragraphs: [
      "Our website may contain links to third-party websites or services.",
      "JSS Technology is not responsible for the privacy practices, content or security of external websites. We recommend reviewing the privacy policies of those websites before sharing personal information.",
    ],
  },
  {
    id: "changes",
    number: "11",
    title: "Changes to This Privacy Policy",
    paragraphs: [
      "JSS Technology may update this Privacy Policy from time to time to reflect changes in our services, technology, business practices or applicable laws.",
      "Any updated Privacy Policy will be published on this page with a revised Last Updated date.",
    ],
  },
];

const contents = sections.map(({ id, number, title }) => ({ id, number, title }));

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <header className="privacy-hero">
        <div className="container">
          <a href="/" className="privacy-back">← Back to JSS Technology</a>
          <div className="privacy-hero-grid">
            <div>
              <p className="eyebrow">Your privacy matters</p>
              <h1>Privacy <em>Policy</em></h1>
            </div>
            <div className="privacy-intro">
              <p>At JSS Technology, we respect your privacy and are committed to protecting the personal information you share with us.</p>
              <p>By accessing or using our website, you agree to the practices described in this Privacy Policy.</p>
            </div>
          </div>
        </div>
      </header>

      <main className="privacy-main container">
        <aside className="privacy-contents" aria-label="Privacy policy contents">
          <p className="contents-label">On this page</p>
          <nav>
            {contents.map((item) => (
              <a href={`#${item.id}`} key={item.id}>
                <span>{item.number}</span>{item.title}
              </a>
            ))}
            <a href="#contact-us"><span>12</span>Contact Us</a>
          </nav>
        </aside>

        <div className="privacy-copy">
          {sections.map((section) => (
            <section className="privacy-section" id={section.id} key={section.id}>
              <div className="privacy-section-number">{section.number}</div>
              <div>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.list && (
                  <ul>
                    {section.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {section.closing && <p>{section.closing}</p>}
              </div>
            </section>
          ))}

          <section className="privacy-section privacy-contact" id="contact-us">
            <div className="privacy-section-number">12</div>
            <div>
              <h2>Contact Us</h2>
              <p>If you have any questions, concerns or requests regarding this Privacy Policy or the way we handle your information, please contact us.</p>
              <div className="privacy-contact-card">
                <img src={jssMark} alt="" />
                <div>
                  <strong>JSS Technology</strong>
                  <a href="https://www.jsstechnology.in/" target="_blank" rel="noopener noreferrer">jsstechnology.in</a>
                  <a href="mailto:info@jsstechnology.in">info@jsstechnology.in</a>
                  <a href="tel:+919382179280">+91 9382179280</a>
                </div>
                <span className="privacy-subject">Subject: Privacy Policy Enquiry</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <style>{`
        .privacy-page { background: var(--cream); }
        .privacy-hero { padding: 30px 0 108px; background: var(--cream-alt); border-bottom: 1px solid var(--line); }
        .privacy-back { color: var(--muted); font-size: 13px; text-decoration: none; transition: color .2s ease; }
        .privacy-back:hover { color: var(--maroon); }
        .privacy-hero-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 80px; align-items: end; margin-top: 82px; }
        .privacy-hero h1 { font-size: clamp(58px, 8vw, 116px); letter-spacing: -.045em; line-height: .9; }
        .privacy-hero h1 em { color: var(--terracotta); font-style: italic; font-weight: 400; }
        .privacy-intro { max-width: 480px; color: var(--muted); font-size: 17px; line-height: 1.7; }
        .privacy-intro p + p { margin-top: 16px; }
        .privacy-updated { display: block; margin-top: 28px; color: var(--maroon); font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
        .privacy-main { display: grid; grid-template-columns: 220px minmax(0, 720px); justify-content: space-between; gap: 80px; padding-top: 88px; padding-bottom: 120px; }
        .privacy-contents { position: sticky; top: 110px; align-self: start; }
        .contents-label { color: var(--maroon); font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; margin-bottom: 20px; }
        .privacy-contents nav { display: flex; flex-direction: column; border-left: 1px solid var(--line); }
        .privacy-contents a { display: flex; gap: 12px; padding: 7px 0 7px 16px; color: var(--muted); font-size: 12px; line-height: 1.25; text-decoration: none; transition: color .2s ease, border-color .2s ease; }
        .privacy-contents a:hover { color: var(--maroon); border-left: 2px solid var(--terracotta); margin-left: -1px; }
        .privacy-contents a span { color: var(--terracotta); font-variant-numeric: tabular-nums; }
        .privacy-section { display: grid; grid-template-columns: 46px 1fr; gap: 24px; padding: 0 0 56px; margin: 0 0 56px; border-bottom: 1px solid var(--line); scroll-margin-top: 110px; }
        .privacy-section-number { color: var(--terracotta); font-size: 13px; font-weight: 700; padding-top: 8px; }
        .privacy-section h2 { font-size: 32px; margin-bottom: 20px; }
        .privacy-section p { color: var(--muted); font-size: 15px; line-height: 1.75; margin-bottom: 16px; }
        .privacy-section ul { margin: 4px 0 18px; padding: 0; list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 0 26px; }
        .privacy-section li { position: relative; padding: 8px 0 8px 18px; color: var(--ink); font-size: 14px; line-height: 1.45; }
        .privacy-section li::before { content: ""; position: absolute; left: 0; top: 15px; width: 6px; height: 6px; background: var(--terracotta); border-radius: 50%; }
        .privacy-contact { border-bottom: 0; padding-bottom: 0; margin-bottom: 0; }
        .privacy-contact-card { display: grid; grid-template-columns: 42px 1fr auto; gap: 16px; align-items: center; margin-top: 28px; padding: 24px; background: var(--cream-alt); border: 1px solid var(--line); border-radius: var(--radius-sm); }
        .privacy-contact-card img { width: 42px; height: 42px; }
        .privacy-contact-card strong, .privacy-contact-card a { display: block; font-size: 14px; }
        .privacy-contact-card strong { margin-bottom: 4px; }
        .privacy-contact-card a { color: var(--maroon); text-decoration: none; line-height: 1.6; }
        .privacy-subject { align-self: start; color: var(--muted); font-size: 12px; }
        @media (max-width: 800px) {
          .privacy-hero { padding-bottom: 72px; }
          .privacy-hero-grid { grid-template-columns: 1fr; gap: 38px; margin-top: 64px; }
          .privacy-main { grid-template-columns: 1fr; gap: 56px; padding-top: 64px; padding-bottom: 80px; }
          .privacy-contents { position: static; }
          .privacy-contents nav { display: grid; grid-template-columns: 1fr 1fr; }
          .privacy-section ul { grid-template-columns: 1fr; }
        }
        @media (max-width: 520px) {
          .privacy-hero h1 { font-size: 64px; }
          .privacy-section { grid-template-columns: 1fr; gap: 8px; }
          .privacy-section-number { padding-top: 0; }
          .privacy-section h2 { font-size: 28px; }
          .privacy-contact-card { grid-template-columns: 36px 1fr; }
          .privacy-contact-card img { width: 36px; height: 36px; }
          .privacy-subject { grid-column: 2; }
        }
      `}</style>
    </div>
  );
}
