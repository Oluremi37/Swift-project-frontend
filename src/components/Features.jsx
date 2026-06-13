import "./Features.css";

import {
  FaGlobe,
  FaChartLine,
  FaMobileAlt,
  FaPalette,
  FaSearch,
  FaRobot,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      title: "Website Audit",
      icon: <FaGlobe />,
      description:
        "Analyze performance, mobile responsiveness, user experience and conversion opportunities.",
    },
    {
      title: "SEO Analysis",
      icon: <FaChartLine />,
      description:
        "Evaluate keywords, technical SEO, rankings and visibility across search engines.",
    },
    {
      title: "Social Media Review",
      icon: <FaMobileAlt />,
      description:
        "Measure engagement, posting consistency, audience growth and content effectiveness.",
    },
    {
      title: "Brand Consistency",
      icon: <FaPalette />,
      description:
        "Review branding, messaging and visual consistency across digital channels.",
    },
    {
      title: "Competitor Benchmarking",
      icon: <FaSearch />,
      description:
        "Compare your online presence against competitors in your industry.",
    },
    {
      title: "AI Recommendations",
      icon: <FaRobot />,
      description:
        "Receive personalized recommendations and a clear action plan for improvement.",
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-header">
        <span className="features-tag">Powerful Features</span>

        <h2>Everything You Need To Measure Your Online Performance</h2>

        <p>
          SwiftAudit examines every important aspect of your online presence and
          delivers a complete Business Health Score.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
