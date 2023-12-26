import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ChargeTable.css"; // Create a CSS file for styling if needed

function ChargeTable({ systemId, locationId }) {
  // Receive systemId and locationId as props
  const [charges, setCharges] = useState([]);
  const [columns, setColumns] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // Fetch charges data and column names for the selected system and location
  useEffect(() => {
    if (systemId !== null && locationId !== null) {
      setLoading(true);
      axios
        .get(
          `http://127.0.0.1:5000/react/charges/system/${systemId}/location/${locationId}`
        )
        .then((response) => {
          setCharges(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching charges data:", error);
          setLoading(false);
        });

      axios
        .get(`http://127.0.0.1:5000/react/columns/${systemId}`)
        .then((response) => {
          setColumns(response.data.columns);
        })
        .catch((error) => {
          console.error("Error fetching column names:", error);
        });
    }
  }, [systemId, locationId]);

  return (
    <div className="charge-table">
      <h2>Charges for Selected System and Location</h2>
      {isLoading ? (
        <p>Loading charges data...</p>
      ) : (
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {charges.map((charge, index) => (
              <tr key={index}>
                {columns.map((column, columnIndex) => (
                  <td key={columnIndex}>{charge[column]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ChargeTable;
