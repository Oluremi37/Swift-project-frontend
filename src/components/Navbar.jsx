import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          Swift<span>Audit</span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#contact">Contact</a>
        </div>

        <Link to="/audit" className="nav-btn">
          Start Audit
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
