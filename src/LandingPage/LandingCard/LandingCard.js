import React from "react";
import "./LandingCard.css";

const LandingCard = ({ title, content }) => {
  return (
    <div className="landing-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
    </div>
  );
};

export default LandingCard;
