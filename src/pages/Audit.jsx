import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Audit.css";

function Audit() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    businessName: "",
    category: "",
    location: "",
    website: "",
    googleBusiness: "",
    instagram: "",
    facebook: "",
    linkedin: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = (e) => {
   e.preventDefault();

   let website = formData.website.trim();

   if (
     website &&
     !website.startsWith("http://") &&
     !website.startsWith("https://")
   ) {
     website = `https://${website}`;
   }

   const updatedFormData = {
     ...formData,
     website,
   };

   const reportId = `SA-${Date.now()}`;

   localStorage.setItem("reportId", reportId);

   localStorage.setItem("auditData", JSON.stringify(updatedFormData));

   navigate("/loading");
 };
  
  return (
    <div className="audit-page">
      <div className="audit-container">
        {/* <div className="audit-nav">
          <Link to="/" className="back-link">
            ← Back to Home
          </Link>
        </div> */}
        <div className="audit-header">
          <h1>Analyze Your Business Performance</h1>

          <p>
            Provide your business details and online assets. Our AI will
            evaluate your digital presence and generate a Business Health Score
            with actionable recommendations.
          </p>
        </div>

        <form className="audit-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Business Name *</label>
              <input
                type="text"
                name="businessName"
                placeholder="Swift Digital Agency"
                value={formData.businessName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Business Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Real Estate">Real Estate</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Technology">Technology</option>
                <option value="Professional Services">
                  Professional Services
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Business Location</label>
              <input
                type="text"
                name="location"
                placeholder="Lagos, Nigeria"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Website URL</label>
              <input
                type="url"
                name="website"
                placeholder="www.yourbusiness.com"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Google Business Profile</label>
              <input
                type="text"
                name="googleBusiness"
                placeholder="Google Business Profile URL"
                value={formData.googleBusiness}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Instagram Profile</label>
              <input
                type="text"
                name="instagram"
                placeholder="@yourbusiness"
                value={formData.instagram}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Facebook Page</label>
              <input
                type="text"
                name="facebook"
                placeholder="Facebook Page URL"
                value={formData.facebook}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>LinkedIn Page</label>
              <input
                type="text"
                name="linkedin"
                placeholder="LinkedIn Company Page"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full-width">
              <label>Additional Notes</label>
              <textarea
                name="notes"
                placeholder="Tell us anything else about your business..."
                value={formData.notes}
                onChange={handleChange}
                rows="5"
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Analyze My Business
          </button>
        </form>
      </div>
    </div>
  );
}

export default Audit;
