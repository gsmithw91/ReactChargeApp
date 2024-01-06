import React, { useState } from "react";
import SystemList from "./components/SystemList/SystemList";
import LocationList from "./components/LocationList/LocationList";
import ChargeTable from "./components/ChargeTable/ChargeTable";
import ChargeSheet from "./components/ChargeSheet/ChargeSheet";
import "./App.css";

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
  const [selectedRows, setSelectedRows] = useState([]);

  return (
    <div className="App">
      <header className="App-header">ChargeMaster</header>
      <SystemList onSystemSelect={handleSystemSelect} />
      <LocationList
        selectedSystem={selectedSystem}
        onLocationSelect={handleLocationSelect}
      />{" "}
      {/* Pass onLocationSelect */}
      <ChargeTable
        systemId={selectedSystem.id}
        locationId={selectedLocation}
        setSelectedRows={setSelectedRows}
      />{" "}
      {/* Pass selectedLocation */}
      <ChargeSheet selectedRows={selectedRows} />
    </div>
  );
}

export default App;
