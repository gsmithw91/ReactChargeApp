import React from "react";
import { Link } from "react-router-dom";
import IntroductionCard from "./LandingCard/IntroCard";
import "./LandingPage.css";
import ThreeDImport from "../ThreeDImport/ThreeDImport";
import CameraController from "../ThreeDImport/CameraController/CameraController";
import Microchip from "../ThreeDImport/BlenderExports/Microchip/Microchip";

const LandingPage = () => {
  const cameraPosition = [0,3,5]
  const cameraLookAt = [0,0,0]

  return (
    <div className="landing-page">
      <ThreeDImport>
        <CameraController position={[0, 0, 5]} lookAt={[0, 0, 0]} />
        <Microchip />

        {/* Add a simple test geometry (a cube) */}
      </ThreeDImport>

      <IntroductionCard />
    </div>
  );
};

export default LandingPage;
