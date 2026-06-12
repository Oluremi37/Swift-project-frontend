import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>
            Swift<span>Audit</span>
          </h2>

          <p>
            Get a clear picture of how your business is performing online and
            discover opportunities for growth.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>

            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h4>Services</h4>

            <a href="#">Business Audits</a>
            <a href="#">Website Optimization</a>
            <a href="#">SEO Services</a>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>

            <p>www.digitalworldswift.com</p>
            <p>Lagos, Nigeria</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 SwiftAudit. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
