import "../styles/footer.css";
import Linkedin from "../assets/images/Linkedin.svg";
import Youtube from "../assets/images/Youtube.svg";
import Facebook from "../assets/images/facebook.svg";
import Insta from "../assets/images/Insta.svg";

function Footer() {
  return (
    <footer className="footer-wrapper">
      {/* LEFT BLOCK */}
      <div className="footer-main">
      <div className="footer-left">
      <h4 className="footer-org">
        Army Institute of Technology, Pune
      </h4>

      <div className="footer-address">
        <p>Dighi Hills, Pune-411015</p>
        <p>72492-50184 | 72492-50185</p>
        <p>info@aitpune.edu.in</p>
      </div>
<br/>
      <div className="footer-socials">
        <div className="social-logo">
          <img src={Linkedin} alt="LinkedIn" />
        </div>
        <div className="social-logo">
          <img src={Youtube} alt="YouTube" />
        </div>
        <div className="social-logo">
          <img src={Facebook} alt="Facebook" />
        </div>
        <div className="social-logo">
          <img src={Insta} alt="Instagram" />
        </div>
      </div>
    </div>

      {/* ENROLLMENT */}
      <div className="footer-right">
  {/* Column 1 */}
  <div className="footer-links-column">
    <h5>ENROLLMENT</h5>
    <ul>
      <li>Application Process</li>
      <li>Tours & Open Days</li>
      <li>Tuition</li>
    </ul>
  </div>

  {/* Column 2 */}
  <div className="footer-links-column">
    <h5>USEFUL LINKS</h5>
    <ul>
      <li>SPPU</li>
      <li>AICTE</li>
      <li>Skills Test</li>
      <li>S.D.C</li>
    </ul>
  </div>

  {/* Column 3 */}
  <div className="footer-links-column">
    <h5>QUICK LINKS</h5>
    <ul>
      <li>ERP</li>
      <li>E-LMS</li>
      <li>E-MAIL</li>
      <li>E-MAGZINE</li>
      <li>E-LIBRARY</li>
      <li>I.I.C</li>
    </ul>
  </div>
</div>
</div>
<div className="footer-bottom">
  Copyright ©2024 All Rights Reserved | Army Institute of Technology, Pune ||
  Site Updated On : 2025-01-19 05:52:02
</div>

    </footer>
  );
}

export default Footer;
