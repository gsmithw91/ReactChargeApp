import React from "react";
import IntroductionCard from "./LandingCard/IntroCard";
import "./LandingPage.css";
import ThreeDImport from "../ThreeDImport/ThreeDImport";
import CameraController from "../ThreeDImport/CameraController/CameraController";
import Microchip from "../ThreeDImport/BlenderExports/Microchip/Microchip";
import GenericCard from "./LandingCard/GenericCard";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="card-section">
        <IntroductionCard className="card-container introduction-card" />
        <GenericCard
          className="card-container generic-card"
          title="Card Title"
          content="Content goes here."
        />
        {/* Add more generic cards as needed */}
      </div>
    </div>
  );
};

export default LandingPage;
