import React, { useState } from "react";
import BillingSearch from "./BillingSearch/BillingSearch";
import DescriptionSearch from "./DescriptionSearch/DescriptionSearch";
import ResultsChargeSheet from "./ResultsChargeSheet/ResultsChargeSheet";
import "./SingleChargeSearch.css"; // Ensure this is the correct path to your CSS file

function SingleChargeSearch() {
  const [results, setResults] = useState([]);
  const [activeTab, setActiveTab] = useState("description"); // 'description' or 'billing'

  const handleResults = (newResults) => {
    setResults(newResults);
  };

  return (
    <div className="App">
      <header className="App-header">Charge Search</header>
      <div className="search-container-with-tabs">
        <div className="tab-buttons-container"></div>
        <div className="search-content">
          <button
            className={`tab-button ${
              activeTab === "description" ? "active" : ""
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`tab-button ${activeTab === "billing" ? "active" : ""}`}
            onClick={() => setActiveTab("billing")}
          >
            Billing Code
          </button>
          {activeTab === "description" ? (
            <DescriptionSearch onResults={handleResults} />
          ) : (
            <BillingSearch onResults={handleResults} />
          )}
        </div>
      </div>
      <ResultsChargeSheet results={results} />
    </div>
  );
}

export default SingleChargeSearch;
