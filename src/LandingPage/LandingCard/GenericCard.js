import React from "react";
import "./LandingCard.css"; // Assuming this CSS file contains generic card styles

const GenericCard = ({ title, content, imageUrl }) => {
  return (
    <div className="generic-card">
      {imageUrl && <img src={imageUrl} alt={title} />}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default GenericCard;
