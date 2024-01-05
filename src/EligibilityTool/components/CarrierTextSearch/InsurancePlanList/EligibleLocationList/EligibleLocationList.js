import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard/LocationCard'; // Adjust the import path as needed
import './EligibleLocationList.css'; // Ensure you have this CSS file for styling

function EligibleLocationList({ planId }) {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (planId) {
      setIsLoading(true);
      axios.get(`http://127.0.0.1:5000/react/eligibility/network-info/${planId}`)
        .then(response => {
          const uniqueLocations = Array.from(new Set(response.data.map(loc => loc.LocationID)))
            .map(id => {
              return response.data.find(loc => loc.LocationID === id);
            });
          setLocations(uniqueLocations);
          setIsLoading(false);
        })
        .catch(error => {
          console.error("Error fetching location details:", error);
          setError(error.message);
          setIsLoading(false);
        });
    }
  }, [planId]);

  if (isLoading) return <div>Loading locations...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="eligible-location-list">
      {locations.map(location => (
        <LocationCard key={location.LocationID} locationId={location.LocationID} />
      ))}
    </div>
  );
}

export default EligibleLocationList;
