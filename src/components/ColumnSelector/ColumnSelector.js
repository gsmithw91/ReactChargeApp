import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ColumnSelector.css"; // Create a CSS file for styling if needed

function ColumnSelector({ selectedSystemId }) {
  const [columns, setColumns] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState([]);

  // Fetch columns for the selected system
  useEffect(() => {
    if (selectedSystemId) {
      setLoading(true);
      axios
        .get(`http://127.0.0.1:5000/react/columns/${selectedSystemId}`)
        .then((response) => {
          setColumns(response.data.columns);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching columns:", error);
          setLoading(false);
        });
    }
  }, [selectedSystemId]);

  // Function to toggle the selection of a column
  const toggleColumnSelection = (column) => {
    if (selectedColumns.includes(column)) {
      // If already selected, remove it
      setSelectedColumns(selectedColumns.filter((col) => col !== column));
    } else {
      // If not selected, add it
      setSelectedColumns([...selectedColumns, column]);
    }
  };

  return (
    <div className="column-selector">
      <h2>Columns for Selected System</h2>
      {isLoading ? (
        <p>Loading columns...</p>
      ) : (
        <ul>
          {columns.map((column, index) => (
            <li
              key={index}
              onClick={() => toggleColumnSelection(column)}
              className={selectedColumns.includes(column) ? "selected" : ""}
            >
              {column}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ColumnSelector;
