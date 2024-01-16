import React from "react";
import { Link } from "react-router-dom";
import IntroductionCard from "./LandingCard/IntroCard";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <IntroductionCard />
    </div>
  );
};

export default LandingPage;
