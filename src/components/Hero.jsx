import { useNavigate } from "react-router-dom";
import "./Hero.css";
import DashboardPreview from "./DashboardPreview";

function Hero() {
  const navigate = useNavigate();

  const handleGetScoreClick = () => {
    navigate("/audit");
  };
  

 

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">AI-Powered Business Audit Platform</span>

          <h1>
            Know Exactly How Your
            <span className="highlight"> Business Is Performing </span>
            Online
          </h1>

          <p>
            Our AI analyzes your website, social media, SEO and online presence
            to generate a comprehensive Business Health Score and personalized
            recommendations.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={handleGetScoreClick}>
              Get My Business Score
            </button>

            <button className="secondary-btn" onClick={() => navigate("/demo")}>
              See Sample Report
            </button>
          </div>
        </div>

        <div className="hero-dashboard">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}

export default Hero;
