import React, { useEffect } from "react";
import ResultItem from "./ResultItem/ResultItem";
import "./ResultsChargeSheet.css";
import ResultsControls from "./ResultsControls/ResultsControls";

function ResultsChargeSheet({ results }) {
  // Define a function to check if a detail is valid and should be displayed
  const isValidDetail = (key, value) => {
    const ignoreFields = ["LocationID", "SystemID"];
    if (ignoreFields.includes(key)) return false;
    if (value === null || value === undefined) return false;
    if (value === 0 || value === "0" || value === "0.00") return false;
    if (value === "NA" || value === "N/A") return false;
    return true;
  };

  // Define the order of keys for display
  const orderedKeys = [
    "LocationName",
    "BillingCode",
    "ServiceDescription",
    "GrossCharge",
    "DiscountedCashPrice",
  ];

  useEffect(() => {
    console.log("Initial Results: ", results);
  }, [results]);

  return (
    <div className="results-charge-sheet">
      <h2>Search Results</h2>
      <div className="results-list">
        {results.map((result, index) => (
          <ResultItem
            key={index}
            result={result}
            orderedKeys={orderedKeys}
            isValidDetail={isValidDetail}
          />
        ))}
      </div>
    </div>
  );
}

export default ResultsChargeSheet;
