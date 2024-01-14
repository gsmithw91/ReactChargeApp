// EligibilityTool.js
import React from "react";
import CarrierTextSearch from "./components/CarrierTextSearch/CarrierTextSearch";
import "./EligibilityTool.css";

function EligibilityTool() {
  return (
    <div className="App">
      <header className="App-header">Insurance Eligibility</header>
      <main>
        <CarrierTextSearch />
      </main>
    </div>
  );
}

export default EligibilityTool;
