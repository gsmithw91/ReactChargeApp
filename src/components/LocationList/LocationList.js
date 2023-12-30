import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationDetails from "./LocationDetails/LocationDetails"; // Import the LocationDetails component
import "./LocationList.css";

function LocationList({ selectedSystem, onLocationSelect }) {
  const [locations, setLocations] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [selectedLocationId, setSelectedLocationId] = useState(null); // State to track the selected location ID

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
    setSelectedLocationId(locationId); // Update the selected location ID
  };

  return (
    <div className="location-container">
      {" "}
      {/* This div wraps the entire content */}
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
          <p>No locations available for the selected system.</p>
        )}
      </div>
      {/* LocationDetails now has a conditional render based on whether a locationId is selected */}
      {selectedLocationId && (
        <LocationDetails locationId={selectedLocationId} />
      )}
    </div>
  );
}

export default LocationList;
