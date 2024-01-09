import React, { useState } from "react";
import axios from "axios";
import "./BillingSearch.css";

function BillingSearch({ onResults }) {
  // Accept a callback function as a prop
  const [billingCode, setBillingCode] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = () => {
    if (!billingCode.trim()) return; // Prevent search if input is empty
    setLoading(true);
    axios
      .get(`https://smithtech.io/react/charges/billingcode/${billingCode}`)
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
    <div className="billing-search-container">
      <input
        className="billing-search-input"
        type="text"
        value={billingCode}
        onChange={(e) => setBillingCode(e.target.value)}
        placeholder="Enter Billing Code"
      />
      <button
        className="billing-search-button"
        onClick={handleSearch}
        disabled={!billingCode.trim()}
      >
        Search Billing Code
      </button>
      {isLoading && <div className="loading-message">Loading...</div>}
      {error && <div className="error-message">Error: {error}</div>}
    </div>
  );
}

export default BillingSearch;
