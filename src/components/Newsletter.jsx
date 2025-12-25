import "../styles/newsletter.css";
import aitLogo from "../assets/Logo/AIT_Logo.svg";

function Newsletter() {
  return (
    <section className="newsletter-wrapper">
       
        {/* LEFT */}
        <div className="newsletter-left">
          <img src={aitLogo} alt="AIT Pune" className="newsletter-logo" />

          <div className="newsletter-org">
            <p className="org-name">Army Institute of Technology, Pune</p>
            <p className="org-sub">
              Autonomous college w.e.f. AY 2025-26
            </p>
          </div>
        </div>

        {/* SEPARATOR */}
        <div className="newsletter-divider" />

        {/* RIGHT */}
        <div className="newsletter-right">
          <span className="newsletter-tag">Newsletter</span>

          <h3 className="newsletter-title">
            Stay up-to-date with what's happening around the<br></br> College
          </h3>

          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your college email"
              className="newsletter-input"
            />
            <button className="newsletter-btn">
              Subscribe to our Newsletter
            </button>
          </div>

      </div>
    </section>
  );
}

export default Newsletter;
