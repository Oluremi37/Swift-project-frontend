import { useNavigate } from "react-router-dom";
import "./Report.css";

function Demo() {
  const navigate = useNavigate();
  return (
    <div className="report-page">
      <div className="report-container">
        <div className="report-header">
          <h1>Sample Business Audit Report</h1>
          <p>Here's an example of the insights SwiftAudit provides.</p>
        </div>

        <div className="score-card">
          <div className="score-number">84</div>
          <div className="score-label">Business Health Score / 100</div>
        </div>

        <div className="metrics-card">
          <div className="metric">
            <div className="metric-top">
              <span>Website Performance</span>
              <span>91%</span>
            </div>
            <div className="bar">
              <div className="fill" style={{ width: "91%" }}></div>
            </div>
          </div>

          <div className="metric">
            <div className="metric-top">
              <span>SEO Score</span>
              <span>78%</span>
            </div>
            <div className="bar">
              <div className="fill" style={{ width: "78%" }}></div>
            </div>
          </div>

          <div className="metric">
            <div className="metric-top">
              <span>Social Media Presence</span>
              <span>82%</span>
            </div>
            <div className="bar">
              <div className="fill" style={{ width: "82%" }}></div>
            </div>
          </div>

          <div className="metric">
            <div className="metric-top">
              <span>Brand Consistency</span>
              <span>86%</span>
            </div>
            <div className="bar">
              <div className="fill" style={{ width: "86%" }}></div>
            </div>
          </div>
        </div>

        <div className="recommendation-card">
          <h2>AI Recommendations</h2>

          <div className="recommendation-item">
            ✅ Improve homepage loading speed by compressing images.
          </div>

          <div className="recommendation-item">
            ✅ Add stronger call-to-actions on service pages.
          </div>

          <div className="recommendation-item">
            ✅ Increase Instagram posting frequency.
          </div>

          <div className="recommendation-item">
            ✅ Optimize blog content for high-value keywords.
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          <button className="contact-btn" onClick={() => navigate("/audit")}>
            Get My Business Score
          </button>
        </div>
      </div>
    </div>
  );
}

export default Demo;
