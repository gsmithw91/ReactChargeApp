import React from "react";
import { Link } from "react-router-dom";
import ThreeDImport from "../ThreeDImport/ThreeDImport";
import Microchip from "../ThreeDImport/BlenderExports/Microchip/Microchip";
import CameraController from "../ThreeDImport/CameraController/CameraController";
import "./LandingPage.css";

const LandingPage = () => {
  // Define camera position and lookAt point for the CameraController
  const cameraPosition = [0, 3, 5]; // Example position, adjust as needed
  const cameraLookAt = [0, 0, 0]; // Example target point, adjust as needed

  return (
    <div className="landing-page">
      <ThreeDImport>
        {/* Include the CameraController with the position and lookAt props */}
        <CameraController position={cameraPosition} lookAt={cameraLookAt} />
        <Microchip />
      </ThreeDImport>
      <div className="overlay-content">
        <h1>Welcome to Our Application</h1>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default LandingPage;
