import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loading.css";

function Loading() {
  const navigate = useNavigate();

  const steps = [
    "Reviewing Business Information...",
    "Checking Website Presence...",
    "Evaluating SEO Signals...",
    "Analyzing Social Media Presence...",
    "Generating Recommendations...",
  ];

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }

        clearInterval(interval);

        setTimeout(() => {
          navigate("/report");
        }, 1000);

        return prev;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [navigate, steps.length]);

  return (
    <div className="loading-page">
      <div className="loading-container">
        <div className="spinner"></div>

        <h1>Generating Your Business Health Report</h1>

        <p>
          Our AI is evaluating your online presence and preparing your Business
          Health Report.
        </p>
        <p className="progress-text">
          {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
        </p>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step ${index <= currentStep ? "active-step" : ""}`}
            >
              {index < currentStep ? "✓" : index === currentStep ? "⏳" : "○"}{" "}
              {step}
            </div>
          ))}
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${((currentStep + 1) / steps.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
