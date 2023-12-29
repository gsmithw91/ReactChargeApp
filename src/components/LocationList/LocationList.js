import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LocationList.css";

function LocationList({ selectedSystem, onLocationSelect }) {
  const [locations, setLocations] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedSystem.id !== null) {
      setLoading(true);
      axios
        .get(`http://127.0.0.1:5000/react/locations/${selectedSystem.id}`)
        .then((response) => {
          setLocations(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching locations:", error);
          setLoading(false);
        });
    } else {
      setLocations([]); // Reset locations when no system is selected
    }
  }, [selectedSystem.id]);

  const handleLocationClick = (locationId) => {
    onLocationSelect(locationId);
  };

  return (
    <div className="locations-list">
      {isLoading ? (
        <p>Loading locations...</p>
      ) : locations.length > 0 ? (
        locations.map((location) => (
          <button
            key={location.LocationID}
            onClick={() => handleLocationClick(location.LocationID)}
            style={{
              backgroundColor: selectedSystem.color || "#defaultColor",
            }}
          >
            {location.LocationName}
          </button>
        ))
      ) : (
        // Display this message when there are no locations
        <p>No locations available for the selected system.</p>
      )}
    </div>
  );
}

export default LocationList;
