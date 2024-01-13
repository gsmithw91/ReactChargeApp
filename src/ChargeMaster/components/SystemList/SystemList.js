import React, { useState, useEffect } from "react";
import axios from "axios";
import { colorMapping } from "../../constants";
import "./SystemList.css";

function SystemList({ onSystemSelect }) {
  const [systems, setSystems] = useState([]);
  const [selectedSystem, setSelectedSystem] = useState({
    id: null,
    color: null,
  });

  // Fetch all systems on component mount
  useEffect(() => {
    axios
      .get("https://smithtech.io/react/systems")
      .then((response) => {
        setSystems(response.data);
      })
      .catch((error) => console.error("Error fetching systems:", error));
  }, []);

  // Handle system selection
  const handleSystemSelect = (systemId) => {
    setSelectedSystem({ id: systemId, color: colorMapping[systemId] });
    onSystemSelect(systemId, colorMapping[systemId]);
    // Additional logic if needed
  };

  return (
    <div className="systems-list">
      <h2 className="systems-label">Hospital Systems</h2>{" "}
      {/* Label for the list */}
      {systems.map((system) => (
        <button
          key={system.SystemID}
          onClick={() => handleSystemSelect(system.SystemID)}
          className={
            selectedSystem.id === system.SystemID ? "selected" : ""
          } /* Apply "selected" class conditionally */
          style={{
            backgroundColor: colorMapping[system.SystemID] || "#defaultColor",
            border:
              selectedSystem.id === system.SystemID
                ? "2px solid #45a049"
                : "none" /* Add border to selected button */,
          }}
        >
          {system.SystemName}
        </button>
      ))}
    </div>
  );
}

export default SystemList;
