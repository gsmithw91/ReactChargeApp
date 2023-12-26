import React, { useState } from "react";
import SystemList from "./components/SystemList/SystemList";
import LocationList from "./components/LocationList/LocationList";
import ChargeTable from "./components/ChargeTable/ChargeTable";

function App() {
  const [selectedSystem, setSelectedSystem] = useState({
    id: null,
    color: null,
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSystemSelect = (systemId, systemColor) => {
    setSelectedSystem({ id: systemId, color: systemColor });
  };

  const handleLocationSelect = (locationId) => {
    setSelectedLocation(locationId); // Update selectedLocation
  };

  return (
    <div className="App">
      <h1>Hospital Systems</h1>
      <SystemList onSystemSelect={handleSystemSelect} />
      <LocationList
        selectedSystem={selectedSystem}
        onLocationSelect={handleLocationSelect}
      />{" "}
      {/* Pass onLocationSelect */}
      <ChargeTable
        systemId={selectedSystem.id}
        locationId={selectedLocation}
      />{" "}
      {/* Pass selectedLocation */}
    </div>
  );
}

export default App;
