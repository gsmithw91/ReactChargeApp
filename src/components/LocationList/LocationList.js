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
    }
  }, [selectedSystem.id]);

  // Function to handle location selection and fetch charges data
  const handleLocationClick = (locationId) => {
    onLocationSelect(locationId); // Pass the locationId to the parent component (App.js)
  };

  return (
    <div className="locations-list">
      {isLoading ? (
        <p>Loading locations...</p>
      ) : (
        locations.map((location) => (
          // Inside LocationList.js
          <button
            key={location.LocationID}
            onClick={() => handleLocationClick(location.LocationID)} // Pass locationId to the parent component
            style={{
              backgroundColor: selectedSystem.color || "#defaultColor",
            }}
          >
            {location.LocationName}
          </button>
        ))
      )}
    </div>
  );
}

export default LocationList;
