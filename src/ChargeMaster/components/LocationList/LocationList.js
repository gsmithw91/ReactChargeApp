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
        .get(`https://smithtech.io/react/locations/${selectedSystem.id}`)
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
      <h2 className="systems-label">Select a Location</h2>{" "}
      {/* This div wraps the entire content */}
      <div className="locations-list">
        {isLoading ? (
          <p>Loading locations...</p>
        ) : locations.length > 0 ? (
          locations.map((location) => (
            <button
              key={location.LocationID}
              onClick={() => handleLocationClick(location.LocationID)}
              className={
                selectedLocationId === location.LocationID ? "selected" : ""
              } /* Apply "selected" class conditionally */
              style={{
                backgroundColor:
                  selectedLocationId === location.LocationID
                    ? "#45a049" /* Background color for selected button */
                    : selectedSystem.color || "#defaultColor",
                border:
                  selectedLocationId === location.LocationID
                    ? "2px solid #45a049" /* Add border to selected button */
                    : "none" /* Remove border from unselected buttons */,
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
