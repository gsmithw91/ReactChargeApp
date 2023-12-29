import React from "react";
import axios from "axios";

function ColumnSelector({ systemId, selectedColumns, setSelectedColumns }) {
  const [availableColumns, setAvailableColumns] = React.useState([]);

  React.useEffect(() => {
    if (systemId) {
      axios
        .get(`http://127.0.0.1:5000/react/columns/${systemId}`)
        .then((response) => {
          setAvailableColumns(response.data.columns);
          // Optionally set all columns by default
          // setSelectedColumns(response.data.columns);
        })
        .catch((error) => console.error(`Error fetching columns: ${error}`));
    }
  }, [systemId, setSelectedColumns]);

  const handleColumnChange = (column) => {
    setSelectedColumns((prevSelectedColumns) => {
      if (prevSelectedColumns.includes(column)) {
        // If column is already selected, remove it
        return prevSelectedColumns.filter((col) => col !== column);
      } else {
        // If column is not selected, add it
        return [...prevSelectedColumns, column];
      }
    });
  };

  return (
    <div className="column-selector">
      {availableColumns.map((column) => (
        <div key={column}>
          <input
            type="checkbox"
            checked={selectedColumns.includes(column)}
            onChange={() => handleColumnChange(column)}
          />
          {column}
        </div>
      ))}
    </div>
  );
}

export default ColumnSelector;
