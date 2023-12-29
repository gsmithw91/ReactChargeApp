import React, { useState, useEffect } from "react";
import "./ColumnSelector.css";

function ColumnSelector({ availableColumns, onColumnChange }) {
  // Default columns to be selected
  const defaultSelectedColumns = [
    "BillingCode",
    "ServiceDescription",
    "GrossCharge",
    "DiscountedCashPrice",
  ];

  const [selectedColumns, setSelectedColumns] = useState(
    defaultSelectedColumns
  );

  useEffect(() => {
    // Update selected columns if available columns change
    setSelectedColumns(
      selectedColumns.filter((column) => availableColumns.includes(column))
    );
  }, [availableColumns]);

  const handleColumnClick = (column) => {
    const updatedColumns = selectedColumns.includes(column)
      ? selectedColumns.filter((c) => c !== column) // Remove column
      : [...selectedColumns, column]; // Add column

    setSelectedColumns(updatedColumns);
    onColumnChange(updatedColumns);
  };

  return (
    <div className="column-selector">
      {availableColumns.map((column) => (
        <button
          key={column}
          onClick={() => handleColumnClick(column)}
          className={selectedColumns.includes(column) ? "selected" : ""}
        >
          {column}
        </button>
      ))}
    </div>
  );
}

export default ColumnSelector;
