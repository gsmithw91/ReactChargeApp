import React from "react";
import { Link } from "react-router-dom";
import ThreeDImport from "../ThreeDImport/ThreeDImport";
import Microchip from "../ThreeDImport/BlenderExports/Microchip/Microchip";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Our Application</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Sign Up</Link>

      <ThreeDImport>
        <Microchip className="microchip" />
        {/* You can add more 3D components as needed */}
      </ThreeDImport>
    </div>
  );
};

export default LandingPage;