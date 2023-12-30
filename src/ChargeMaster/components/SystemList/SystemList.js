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
      .get("http://127.0.0.1:5000/react/systems")
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
          style={{
            backgroundColor:
              selectedSystem.id === system.SystemID
                ? selectedSystem.color
                : colorMapping[system.SystemID] || "#defaultColor",
          }}
        >
          {system.SystemName}
        </button>
      ))}
    </div>
  );
}

export default SystemList;
