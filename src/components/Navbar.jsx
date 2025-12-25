import "../styles/navbar.css";
import aitLogo from "../assets/Logo/AIT_Logo.svg";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">
      {/* LEFT: Logo */}
      <div className="navbar-left">
        <img
          src={aitLogo}
          alt="AIT Pune"
          className="logo"
        />
        <div className="logo-text">
          <h1 className="navbar-title">Army Institute of Technology, Pune</h1>
          <p className="navbar-subtitle">Autonomous college w.e.f. AY 2025-26</p>
        </div>
      </div>

      {/* RIGHT: Menu */}
      <div className="navbar-right">
    <nav className="navbar-menu">
        <a href="#">About Us</a>

        <div className="dropdown">
          <span>Program ▾</span>
        </div>

        <a href="#" className="active">Academics</a>
        <a href="#">Placement</a>
        <a href="#">Admissions</a>
        <a href="#">Students</a>
        
      </nav>
      <div className="menu-icon">
        <FaBars />
      </div>
      </div>
      

      {/* HAMBURGER */}
      
    </header>
  );
}

export default Navbar;
