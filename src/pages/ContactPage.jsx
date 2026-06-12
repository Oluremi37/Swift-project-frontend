import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactPage.css";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

  };

  useEffect(() => {
    document.title = "Contact Us | SwiftAudit";
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-page-container">
        {submitted ? (
          <div className="success-message">
            <div className="success-icon">✅</div>

            <h1>Request Submitted Successfully</h1>

            <p>
              Thank you for contacting SwiftAudit. Our team will review your
              request and reach out within 24 hours.
            </p>

            <button className="submit-btn" onClick={() => navigate("/")}>
              Return Home
            </button>
          </div>
        ) : (
          <>
            <h1>Request Expert Help</h1>

            <p className="contact-subtitle">
              Ready to improve your Business Health Score? Fill out the form
              below and our team will discuss how we can help improve your
              online performance.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+234..." />
              </div>

              <div className="form-group">
                <label>Business Name</label>
                <input type="text" placeholder="Your Business Name" required />
              </div>

              <div className="form-group full-width">
                <label>How Can We Help?</label>

                <textarea
                  rows="6"
                  placeholder="Tell us about your business challenges and goals..."
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit Request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ContactPage;
