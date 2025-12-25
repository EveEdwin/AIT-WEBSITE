import "../styles/pastRecruiters.css";

import citibank from "../assets/images/company/source/citi.png";
import microsoft from "../assets/images/company/source/micro.png";
import mastercard from "../assets/images/company/source/master.png";
import google from "../assets/images/company/source/google.png";
import ubs from "../assets/images/company/source/ubs.png";
import zs from "../assets/images/company/source/zs.png";
// import alliance from "../assets/recruiters/alliance.png";
const logos = [
  citibank,
  microsoft, mastercard, google, ubs, zs
];

function PastRecruiters() {
  return (
    <section className="recruiters-section">
      {/* Header */}
      <div className="recruiters-header">
        <span className="recruiters-tag">PAST RECRUITERS</span>

        <h2 className="recruiters-title">
          Discover Our <span>Top</span> Recruiting Companies
        </h2>
      </div>

      {/* Logos */}
      <div className="recruiters-carousel">
  <div className="recruiters-track">
    {logos.map((logo, i) => (
      <img src={logo} key={`a-${i}`} />
    ))}
     {logos.map((logo, i) => (
      <img src={logo} key={`a-${i}`} />
    ))}
    {logos.map((logo, i) => (
      <img src={logo} key={`a-${i}`} />
    ))}
  </div>
</div>
    <div className="recruiters-carousel-left">
  <div className="recruiters-track-left">
    {logos.map((logo, i) => (
      <img src={logo} key={`a-${i}`} />
    ))}
     {logos.map((logo, i) => (
      <img src={logo} key={`a-${i}`} />
    ))}
    {logos.map((logo, i) => (
      <img src={logo} key={`a-${i}`} />
    ))}
  </div>
</div>
    </section>
  );
}

export default PastRecruiters;
