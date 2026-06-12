import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          Swift<span>Audit</span>
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#features" onClick={() => setMenuOpen(false)}>
            Features
          </a>

          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
            How It Works
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>

        <Link
          to="/audit"
          className="nav-btn"
          onClick={() => setMenuOpen(false)}
        >
          Start Audit
        </Link>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
