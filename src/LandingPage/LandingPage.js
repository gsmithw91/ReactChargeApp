import React from "react";
import { Link } from "react-router-dom";
import ThreeDImport from "../ThreeDImport/ThreeDImport";
import Microchip from "../ThreeDImport/BlenderExports/Microchip/Microchip";
import CameraController from "../ThreeDImport/CameraController/CameraController";
import "./LandingPage.css";

const LandingPage = () => {
  const cameraPosition = [0, 3, 5];
  const cameraLookAt = [0, 0, 0];

  return (
    <div className="landing-page">
      <ThreeDImport>
        <CameraController position={cameraPosition} lookAt={cameraLookAt} />
        <Microchip />
      </ThreeDImport>
      <div className="overlay-content">
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
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default LandingPage;
