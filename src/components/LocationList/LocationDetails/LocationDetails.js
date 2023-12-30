import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LocationDetails.css";

function LocationDetails({ locationId }) {
  const [locationDetails, setLocationDetails] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (locationId) {
      setLoading(true);
      axios
        .get(`http://127.0.0.1:5000/react/locations/details/${locationId}`)
        .then((response) => {
          console.log(response.data);
          setLocationDetails(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching location details:", error);
          setError("Failed to load location details.");
          setLoading(false);
        });
    }
  }, [locationId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!locationDetails) return null;

  // Inside your LocationDetails component JSX
  return (
    <div className="location-details-container">
      <div className="location-details">
        <h2>Location Details</h2>
        <p>
          <strong>Location Name:</strong> {locationDetails.LocationName}
        </p>
        <p>
          <strong>Address:</strong> {locationDetails.Address},
          {locationDetails.City}, {locationDetails.State}{" "}
          {locationDetails.ZipCode}
        </p>
        <p>
          <strong>Phone:</strong> {locationDetails.Phone}
        </p>
      </div>
      <div className="location-map">
        {/* Here you will include your map component or iframe */}
      </div>
    </div>
  );
}

export default LocationDetails;
