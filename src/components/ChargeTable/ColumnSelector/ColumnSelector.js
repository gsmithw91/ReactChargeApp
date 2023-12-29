import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select"; // Import react-select
import "./ColumnSelector.css";

function ColumnSelector({ systemId, selectedColumns, setSelectedColumns }) {
  const [availableColumns, setAvailableColumns] = useState([]);

  useEffect(() => {
    if (systemId) {
      axios
        .get(`http://127.0.0.1:5000/react/columns/${systemId}`)
        .then((response) => {
          const columns = response.data.columns.map((column) => ({
            value: column,
            label: column,
          }));
          setAvailableColumns(columns);
        })
        .catch((error) => console.error(`Error fetching columns: ${error}`));
    }
  }, [systemId]);

  const handleChange = (selectedOptions) => {
    // Transform selected options back into an array of column names
    const selectedColumnNames = selectedOptions.map((option) => option.value);
    setSelectedColumns(selectedColumnNames);
  };

  // Transform selectedColumns for react-select
  const selectedValues = selectedColumns.map((column) => ({
    value: column,
    label: column,
  }));

  return (
    <div className="column-selector">
      <Select
        isMulti
        name="columns"
        options={availableColumns}
        value={selectedValues}
        onChange={handleChange}
        className="column-selector-dropdown"
      />
    </div>
  );
}

export default ColumnSelector;
