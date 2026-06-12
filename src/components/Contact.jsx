import "./Contact.css";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  return (
    <section id="contact" className="contact-section">
      <h2>Ready To Improve Your Online Presence?</h2>

      <p>
        Get your Business Health Score and discover opportunities to grow your
        business online.
      </p>

      <button className="contact-btn" onClick={() => navigate("/audit")}>
        Get My Business Score
      </button>
    </section>
  );
}

export default Contact;
