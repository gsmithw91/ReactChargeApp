import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Our Application</h1>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default LandingPage;
