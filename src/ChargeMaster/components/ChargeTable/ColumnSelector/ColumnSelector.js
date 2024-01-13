import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import "./ColumnSelector.css";

function ColumnSelector({ systemId, selectedColumns, setSelectedColumns }) {
  const [availableColumns, setAvailableColumns] = useState([]);

  useEffect(() => {
    if (systemId) {
      axios
        .get(`https://smithtech.io/react/columns/${systemId}`)
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
    const selectedColumnNames = selectedOptions.map((option) => option.value);
    setSelectedColumns(selectedColumnNames);
  };

  const selectedValues = selectedColumns.map((column) => ({
    value: column,
    label: column,
  }));

  // Define custom styles for the Select component
  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: "100%",
    }),
    control: (provided) => ({
      ...provided,
      border: "1px solid #ddd",
      borderRadius: "4px",
      backgroundColor: "#000000" /* Changed background color */,
      color: "white" /* Set text color to white for better contrast */,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#45a049"
        : "#000000" /* Changed background color */,
      color: state.isSelected ? "white" : "white" /* Option text color */,
      cursor: "pointer",
    }),
  };

  return (
    <div className="column-selector">
      <Select
        isMulti
        name="columns"
        options={availableColumns}
        value={selectedValues}
        onChange={handleChange}
        styles={customStyles} // Apply custom styles
      />
    </div>
  );
}

export default ColumnSelector;
