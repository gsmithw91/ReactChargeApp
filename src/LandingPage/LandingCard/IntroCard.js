import React from "react";
import "./LandingCard.css"; // Assuming you're using styles from LandingCard.css

const IntroductionCard = () => {
  return (
    <div className="introduction-card">
      <h1>Welcome to SmithTech Solutions Healthcare Insights</h1>
      <div className="content-paragraph">
        <p>
          Navigating the complexities of healthcare data can be daunting.
          HealthData Insight is here to change that. Our platform brings
          transparency and clarity to healthcare eligibility and charge data,
          empowering you with the information you need to make informed
          decisions.
        </p>
      </div>
      <div className="content-paragraph">
        <p>
          Whether you're a patient, healthcare provider, or an insurer, our
          intuitive platform simplifies the data, helping you understand
          healthcare charges, eligibility criteria, and more. We believe in
          making healthcare data accessible and understandable for everyone.
        </p>
      </div>
    </div>
  );
};

export default IntroductionCard;
