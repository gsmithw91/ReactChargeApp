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

  const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return "";
    const phoneString = phoneNumber.toString();
    return `(${phoneString.substring(0, 3)})-${phoneString.substring(
      3,
      6
    )}-${phoneString.substring(6)}`;
  };

  const createGoogleMapsUrl = (details) => {
    if (!details) return "";
    const addressString = `${details.Address}, ${details.City}, ${details.State} ${details.ZipCode}`;
    return `https://www.google.com/maps/place/${encodeURIComponent(
      addressString
    )}`;
  };

  if (isLoading) return <div>Loading location details...</div>;
  if (error) return <div>Error: {error}</div>;

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
              {locationDetails.Phone && (
                <p>
                  Phone:{" "}
                  <a href={`tel:${locationDetails.Phone}`}>
                    {formatPhoneNumber(locationDetails.Phone)}
                  </a>
                </p>
              )}
              {locationDetails.BaseURL && (
                <button
                  onClick={() => window.open(locationDetails.BaseURL, "_blank")}
                  className="website-button"
                >
                  Home Page
                </button>
              )}
              {locationDetails.EligURL && (
                <button
                  onClick={() => window.open(locationDetails.EligURL, "_blank")}
                  className="pricing-info-button"
                >
                  Pricing and Insurance Information
                </button>
              )}
              <button
                onClick={() =>
                  window.open(createGoogleMapsUrl(locationDetails), "_blank")
                }
                className="google-maps-button"
              >
                View on Google Maps
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default LocationCard;
