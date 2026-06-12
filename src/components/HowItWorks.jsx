import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-section">
      <div className="section-header">
        <h2>How It Works</h2>

        <p>Get your Business Health Score in three simple steps.</p>
      </div>

      <div className="steps-grid">
        <div className="step-card">
          <div className="step-number">01</div>
          <h3>Enter Your Business Details</h3>
          <p>Add your business name, website and social media links.</p>
        </div>

        <div className="step-card">
          <div className="step-number">02</div>
          <h3>AI Analyzes Your Presence</h3>
          <p>SwiftAudit evaluates your website, SEO and social media.</p>
        </div>

        <div className="step-card">
          <div className="step-number">03</div>
          <h3>Receive Your Score</h3>
          <p>Get a Business Health Score and personalized recommendations.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
