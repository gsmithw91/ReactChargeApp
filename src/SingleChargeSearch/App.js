import React, { useState } from "react";
import BillingSearch from "./BillingSearch/BillingSearch";
import DescriptionSearch from "./DescriptionSearch/DescriptionSearch";
import ResultsChargeSheet from "./ResultsChargeSheet/ResultsChargeSheet";
import "./App.css"; // Use the same CSS for consistent styling

function App() {
  const [results, setResults] = useState([]);

  const handleResults = (newResults) => {
    setResults(newResults);
  };

  return (
    <div className="App">
      <header className="App-header">Charge Search</header>{" "}
      {/* Consistent header */}
      <div className="search-container">
        <BillingSearch onResults={handleResults} />
        <DescriptionSearch onResults={handleResults} />
      </div>
      <ResultsChargeSheet results={results} />
    </div>
  );
}

export default App;
