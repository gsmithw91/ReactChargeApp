import React, { useState } from "react";
import axios from "axios";
import "./DescriptionSearch.css";

function DescriptionSearch({ onResults }) {
  // Add the onResults prop
  const [description, setDescription] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (!description.trim()) return; // Prevent search if input is empty
    setLoading(true);
    axios
      .get(`https://smithtech.io/react/charges/description/${description}`)
      .then((response) => {
        onResults(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="description-search-container">
      <input
        className="description-search-input"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter Description"
      />
      <button
        className="description-search-button"
        onClick={handleSearch}
        disabled={!description.trim()} // Disable button if input is empty
      >
        Search Description
      </button>
      {isLoading && <div className="loading-message">Loading...</div>}
      {error && <div className="error-message">Error: {error}</div>}
    </div>
  );
}

export default DescriptionSearch;
