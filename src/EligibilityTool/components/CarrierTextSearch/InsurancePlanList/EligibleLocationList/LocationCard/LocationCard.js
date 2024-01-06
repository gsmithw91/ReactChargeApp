import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LocationCard.css";

function LocationCard({ locationId }) {
  const [locationDetails, setLocationDetails] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (locationId) {
      setIsLoading(true);
      axios
        .get(
          `http://127.0.0.1:5000/react/eligibility/location-details/${locationId}`
        )
        .then((response) => {
          setLocationDetails(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching location details:", error);
          setError(error.message);
          setIsLoading(false);
        });
    }
  }, [locationId]);

  const formatFullAddress = (details) => {
    if (!details) return "";

    const { Address, City, State, ZipCode } = details;
    return `${Address}, ${City}, ${State} ${ZipCode}`;
  };

  if (isLoading) return <div>Loading location details...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="location-card">
      {locationDetails && (
        <>
          <h4>{locationDetails.LocationName}</h4>
          <button onClick={() => setIsExpanded(!isExpanded)}>Details</button>
          {isExpanded && (
            <div className="location-details">
              <p>{locationDetails.LocationName}</p>
              <p>Address: {formatFullAddress(locationDetails)}</p>
              <p>Phone: {locationDetails.Phone}</p>
              {/* Add more details as per your data structure */}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default LocationCard;
