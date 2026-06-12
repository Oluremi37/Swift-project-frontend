import "./DashboardPreview.css";

function DashboardPreview() {
  return (
    <section className="dashboard-section">
      <div className="dashboard-card">
        <div className="score-area">
          <h2>78</h2>
          <p>Business Health Score</p>
        </div>

        <div className="metrics">
          <div className="metric">
            <span>Website Performance</span>
            <span>85%</span>
          </div>

          <div className="bar">
            <div className="fill fill-85"></div>
          </div>

          <div className="metric">
            <span>SEO Score</span>
            <span>62%</span>
          </div>

          <div className="bar">
            <div className="fill fill-62"></div>
          </div>

          <div className="metric">
            <span>Social Media</span>
            <span>71%</span>
          </div>

          <div className="bar">
            <div className="fill fill-71"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;
