import React from "react";
import "./ResultItem.css";

function ResultItem({ result, orderedKeys, isValidDetail }) {
  const otherKeys = Object.keys(result)
    .filter(
      (key) => !orderedKeys.includes(key) && isValidDetail(key, result[key])
    )
    .sort();

  return (
    <div className="result-item">
      {orderedKeys.concat(otherKeys).map((key) => {
        // Check if the key is 'LocationName'
        if (key === "LocationName" && isValidDetail(key, result[key])) {
          return (
            <div key={key} className="location-name">
              {result[key].toString()}
            </div>
          );
        }

        // For all other keys
        return (
          result[key] &&
          isValidDetail(key, result[key]) && (
            <div key={key}>
              <strong>{key}:</strong> {result[key].toString()}
            </div>
          )
        );
      })}
    </div>
  );
}

export default ResultItem;
