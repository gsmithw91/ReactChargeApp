import React, { useState, useEffect } from "react";
import axios from "axios";
function LocationDetails({ locationId }) {
  const [locationDetails, setLocationDetails] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch location details data when the component mounts
    axios
      .get(`https://smithtech.io/react/locations/details/${locationId}`)
      .then((response) => {
        // Successful response
        setLocationDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Error occurred
        setError("Error fetching location details.");
        setLoading(false);
      });
  }, [locationId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!locationDetails) {
    return <p>Location details not found.</p>;
  }

  // Render the location details
  return (
    <div>
      <h2>Location Details</h2>
      <p>
        <strong>Location Name:</strong> {locationDetails.LocationName}
      </p>
      <p>
        <strong>Address:</strong> {locationDetails.Address},{" "}
        {locationDetails.City}, {locationDetails.State}{" "}
        {locationDetails.ZipCode}
      </p>
      <p>
        <strong>Phone:</strong> {locationDetails.Phone}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a
          href={locationDetails.BaseURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {locationDetails.BaseURL}
        </a>
      </p>
    </div>
  );
}

export default LocationDetails;
