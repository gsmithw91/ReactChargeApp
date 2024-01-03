import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import InsurancePlanList from "./InsurancePlanList/InsurancePlanList";
import "./CarrierTextSearch.css";

function CarrierTextSearch() {
  const [carriers, setCarriers] = useState([]);
  const [selectedCarriers, setSelectedCarriers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:5000/react/eligibility/carriers")
      .then((response) => {
        const transformedCarriers = response.data.map((carrier) => ({
          value: carrier.CarrierID,
          label: carrier.CarrierName,
        }));
        setCarriers(transformedCarriers);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching carriers:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleCarrierSelect = (selectedOptions) => {
    setSelectedCarriers(selectedOptions || []);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="carrier-text-search-container">
      <Select
        isMulti
        name="carriers"
        options={carriers}
        value={selectedCarriers}
        onChange={handleCarrierSelect}
        className="carrier-selector-dropdown"
      />
      <div className="selected-carriers">
        <h3>Selected Carriers</h3>
        {selectedCarriers.map((selectedCarrier) => (
          <div key={selectedCarrier.value} className="selected-carrier-item">
            {selectedCarrier.label}
            <InsurancePlanList carrierId={selectedCarrier.value} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarrierTextSearch;
