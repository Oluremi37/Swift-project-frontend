import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Report.css";

function Report() {
  const navigate = useNavigate();

  const [auditData, setAuditData] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("auditData");

    if (savedData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAuditData(JSON.parse(savedData));
    }
  }, []);

  let websiteScore = 40;
  let seoScore = 40;
  let socialScore = 40;

  if (auditData?.website) {
    websiteScore += 35;
    seoScore += 15;
  }

  if (auditData?.googleBusiness) {
    seoScore += 20;
  }

  if (auditData?.instagram) {
    socialScore += 15;
  }

  if (auditData?.facebook) {
    socialScore += 15;
  }

  if (auditData?.linkedin) {
    socialScore += 15;
  }

  const overallScore = Math.round((websiteScore + seoScore + socialScore) / 3);
  const reportDate = new Date().toLocaleDateString();


  const reportId = localStorage.getItem("reportId") || "SA-0000";
  useEffect(() => {
    document.title = "Business Report | SwiftAudit";
  }, []);


  return (
    <div className="report-page">
      <div className="report-container">
        <div className="report-header">
          <img
            src="/image/img_1.jpg"
            alt="Digital World Swift"
            className="report-logo"
          />

          <h2>SwiftAudit</h2>

          <p>Business Health Report</p>

          <span>by Digital World Swift</span>
        </div>
        <div className="score-card">
          <h1>{auditData?.businessName || "Business"} Health Score</h1>
          <div className="report-meta">
            <div>
              <span>Audit Date</span>
              <strong>{reportDate}</strong>
            </div>

            <div>
              <span>Report ID</span>
              <strong>{reportId}</strong>
            </div>
          </div>

          <div
            className={`score-circle ${
              overallScore >= 75
                ? "good-score"
                : overallScore >= 50
                  ? "average-score"
                  : "poor-score"
            }`}
          >
            <span>{overallScore}</span>
          </div>
          <div
            className={`score-badge ${
              overallScore >= 75
                ? "badge-good"
                : overallScore >= 50
                  ? "badge-average"
                  : "badge-poor"
            }`}
          >
            {overallScore >= 75
              ? "🟢 Excellent Online Presence"
              : overallScore >= 50
                ? "🟠 Moderate Online Presence"
                : "🔴 Needs Immediate Attention"}
          </div>
          <p className="score-status">
            {overallScore >= 75
              ? "Excellent"
              : overallScore >= 50
                ? "Needs Improvement"
                : "Critical Attention Needed"}
          </p>
          <p>
            {overallScore >= 75
              ? "Your business has a strong online foundation with excellent growth potential. A few strategic improvements could help you achieve even better results."
              : overallScore >= 50
                ? "Your business has an established online presence, but several areas can be optimized to improve visibility, engagement and customer acquisition."
                : "Your business is missing important digital assets that may be limiting visibility, credibility and growth opportunities."}
          </p>
          <div className="business-info">
            <div className="info-item">
              <span>Business</span>
              <strong>{auditData?.businessName || "Not Provided"}</strong>
            </div>

            <div className="info-item">
              <span>Category</span>
              <strong>{auditData?.category || "Not Provided"}</strong>
            </div>

            <div className="info-item">
              <span>Location</span>
              <strong>{auditData?.location || "Not Provided"}</strong>
            </div>
          </div>
          <div className="report-section">
            <h2 className="header">Executive Summary</h2>

            <div className="insight-card">
              <p>
                {overallScore >= 75
                  ? `${auditData?.businessName || "This business"} has a strong online presence with a solid digital foundation. The business demonstrates good visibility and engagement opportunities across its online assets. Continued optimization of SEO, customer acquisition, and conversion performance can help accelerate growth.`
                  : overallScore >= 50
                    ? `${auditData?.businessName || "This business"} has an established online presence but there are several opportunities to improve visibility, engagement, and lead generation. Focusing on digital optimization efforts could significantly improve overall performance.`
                    : `${auditData?.businessName || "This business"} is currently missing important digital assets that may be limiting growth and online visibility. Building a stronger online foundation should be a priority to improve credibility and attract more customers.`}
              </p>
            </div>
          </div>
        </div>

        <div className="report-section">
          <h2>Score Breakdown</h2>

          <div className="score-breakdown">
            <div className="score-row">
              <div className="score-label">
                <span>Website Score</span>
                <strong>{websiteScore}%</strong>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${websiteScore}%` }}
                ></div>
              </div>
            </div>

            <div className="score-row">
              <div className="score-label">
                <span>SEO Score</span>
                <strong>{seoScore}%</strong>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${seoScore}%` }}
                ></div>
              </div>
            </div>

            <div className="score-row">
              <div className="score-label">
                <span>Social Score</span>
                <strong>{socialScore}%</strong>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${socialScore}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="report-section">
          <h2>Business Strengths</h2>

          <div className="insight-card">
            <ul>
              <li>✅ Business information successfully submitted</li>

              {auditData?.website && <li>✅ Website presence established</li>}

              {auditData?.googleBusiness && (
                <li>✅ Google Business Profile detected</li>
              )}

              {(auditData?.instagram ||
                auditData?.facebook ||
                auditData?.linkedin) && (
                <li>✅ Social media presence detected</li>
              )}
            </ul>
          </div>
        </div>

        <div className="report-section">
          <h2>Areas for Improvement</h2>

          <div className="insight-card">
            <ul>
              {!auditData?.website ? (
                <li>
                  ⚠ Add a business website to improve credibility and
                  visibility.
                </li>
              ) : (
                <li>⚠ Improve website speed and conversion performance.</li>
              )}

              {!auditData?.googleBusiness ? (
                <li>⚠ Create or optimize your Google Business Profile.</li>
              ) : (
                <li>⚠ Improve local search rankings.</li>
              )}

              {socialScore < 70 ? (
                <li>⚠ Increase social media activity and engagement.</li>
              ) : (
                <li>⚠ Maintain consistent content posting.</li>
              )}
            </ul>
          </div>
        </div>

        <div className="report-section">
          <h2>Priority Actions</h2>

          <div className="insight-card">
            <ol>
              {!auditData?.website && (
                <li>Launch or improve your business website.</li>
              )}

              {!auditData?.googleBusiness && (
                <li>Claim and optimize your Google Business Profile.</li>
              )}

              <li>Improve local SEO visibility.</li>

              <li>Create consistent social media content.</li>

              <li>Track performance and customer engagement.</li>
            </ol>
          </div>
        </div>

        <div className="report-section">
          <h2>Recommended Services</h2>

          <div className="services-grid">
            {!auditData?.website && (
              <div className="service-card">
                <h3>Website Development</h3>
                <p>
                  Build a professional website that attracts customers and
                  increases credibility.
                </p>
              </div>
            )}

            {!auditData?.googleBusiness && (
              <div className="service-card">
                <h3>Local SEO Setup</h3>
                <p>
                  Improve your visibility on Google Maps and local search
                  results.
                </p>
              </div>
            )}

            {socialScore < 70 && (
              <div className="service-card">
                <h3>Social Media Growth</h3>
                <p>
                  Build a stronger online presence and engage more customers.
                </p>
              </div>
            )}

            {websiteScore >= 70 && (
              <div className="service-card">
                <h3>Conversion Optimization</h3>
                <p>Turn more visitors into leads and paying customers.</p>
              </div>
            )}

            <div className="service-card">
              <h3>Business Growth Strategy</h3>
              <p>
                Get a personalized roadmap to improve your overall digital
                performance.
              </p>
            </div>
          </div>
        </div>

        <div className="cta-card">
          <h2>Need Help Improving Your Score?</h2>

          <p>
            Our team can help improve your website, SEO performance, online
            visibility and social media presence.
          </p>

          <div className="cta-buttons">
            <button className="download-btn" onClick={() => window.print()}>
              Download PDF Report
            </button>

            <button className="cta-btn" onClick={() => navigate("/contact")}>
              🚀 Request Expert Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
