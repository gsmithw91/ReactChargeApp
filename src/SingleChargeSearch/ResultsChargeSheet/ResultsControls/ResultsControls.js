import React, { useState } from "react";

function ResultsControls({
  systems,
  locations,
  onSystemSelect,
  onLocationSelect,
}) {
  const [selectedSystem, setSelectedSystem] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleSystemChange = (e) => {
    const newSystemId = e.target.value;
    setSelectedSystem(newSystemId);
    onSystemSelect(newSystemId);
  };

  const handleLocationChange = (e) => {
    const newLocationId = e.target.value;
    setSelectedLocation(newLocationId);
    onLocationSelect(newLocationId);
  };

  return (
    <div className="results-controls">
      <div className="system-select">
        <label htmlFor="system-select">System:</label>
        <select
          id="system-select"
          value={selectedSystem}
          onChange={handleSystemChange}
        >
          <option value="">Select a System</option>
          {systems.map((system) => (
            <option key={system.id} value={system.id}>
              {system.name}
            </option>
          ))}
        </select>
      </div>

      <div className="location-select">
        <label htmlFor="location-select">Location:</label>
        <select
          id="location-select"
          value={selectedLocation}
          onChange={handleLocationChange}
        >
          <option value="">Select a Location</option>
          {locations.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ResultsControls;
