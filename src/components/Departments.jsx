import "../styles/departments.css";
import compImg from "../assets/images/compImg.png";
import itImg from "../assets/images/itImg.png";
import etcImg from "../assets/images/etcImg.png";
import mechImg from "../assets/images/mechImg.png";
import autoImg from "../assets/images/autoImg.png";

function Departments() {
  return (
    <section className="departments-section">
      {/* Header */}
      <div className="departments-header">
        <span className="departments-tag">DEPARTMENTS</span>

        <div className="departments-title-row">
            
          <h2 className="departments-title">
            Discover Our Academic <span>Departments</span>
          </h2>

          {/* Tabs */}
          <div className="dept-tabs">
            <button className="dept-tab active">Undergraduate</button>
            <button className="dept-tab">Postgraduate</button>
            <button className="dept-tab">Phd</button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="departments-wrapper">
      <div className="departments-grid">
        <DepartmentCard
          img={compImg}
          title="Computer Engineering"
          desc="The Computer Engineering Department empowers students with advanced technical skills to drive innovation and solve real-world challenges."
        />
        <DepartmentCard
          img={itImg}
          title="Information Technology"
          desc="The Information Technology Department equips students with modern IT skills to build efficient, secure, and innovative digital solutions."
        />
        <DepartmentCard
          img={etcImg}
          title="Electronics & Telecommunications"
          desc="The E&TC Department builds expertise in electronics and communication technologies to drive innovation in a connected world."
        />
        <DepartmentCard
          img={mechImg}
          title="Mechanical Engineering"
          desc="The Mechanical Engineering Department shapes innovators who design, build, and optimize machines for a better future."
        />
        <DepartmentCard
          img={autoImg}
          title="Automation & Robotics Engineering"
          desc="The Automation and Robotics Department empowers students to create intelligent, automated systems for smart industries."
        />
      </div>
      </div>
    </section>
  );
}

function DepartmentCard({ img, title, desc }) {
  return (
    <div className="department-card">
      <img src={img} alt={title} className="department-img" />

      <div className="department-content">
        <h3>{title}</h3>
        <p>{desc}</p>

        <div className="learn-more">
           <button className="arrow-btn">→</button>
          <span>Learn more</span>
        </div>
      </div>
    </div>
  );
}

export default Departments;
