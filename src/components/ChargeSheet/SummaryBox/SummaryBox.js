import React from "react";
import { systemMapping } from "../../../constants"; // Correct path based on your project structure
import "./SummaryBox.css";

function SummaryBox({ selectedRows }) {
  // Tally counts per system ID, then map to system names
  const countsPerSystem = selectedRows.reduce((acc, row) => {
    const { SystemID } = row;
    const systemName = systemMapping[SystemID];

    if (systemName) {
      if (!acc[systemName]) {
        acc[systemName] = 1; // Initialize if it doesn't exist
      } else {
        acc[systemName] += 1; // Increment existing count
      }
    }
    return acc;
  }, {});

  return (
    <div className="summary-box">
      <h3>Summary</h3>
      {Object.entries(countsPerSystem).map(([systemName, count]) => (
        <div key={systemName}>
          <strong>{systemName}:</strong> {count} charges
        </div>
      ))}
      <div>
        <strong>Total Items:</strong> {selectedRows.length}
      </div>
    </div>
  );
}

export default SummaryBox;
