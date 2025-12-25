import "../styles/aboutSection.css";
import aboutImg from "../assets/images/source/ait_main_croped_image.png";
import { FaArrowRight } from "react-icons/fa";

function AboutSection() {
  return (
    <section className="about-section">
      {/* IMAGE */}
      <div className="about-image-wrapper">
        <img src={aboutImg} alt="AIT Pune Campus" />
      </div>

      {/* CONTENT */}
      <div className="about-content">
        <span className="about-tag">ABOUT US</span>

        <h2 className="about-heading">
          A Community of{" "}
          <span className="about-highlight">Excellence, Knowledge</span>
          <br />
          and <span className="about-highlight">Growth</span>
        </h2>

        <p className="about-description">
          AIT Pune is a top technical institute that prepares students for
          successful careers through industry-focused</p> <p className="about-description">education and expert
          faculty. Join us to shape your future and become a leader in the world
          of engineering.</p> 
        

        <div className="about-cta">
                   <button className="arrow-btn">→</button>
          <span className="cta-text">Learn more about AIT</span>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;