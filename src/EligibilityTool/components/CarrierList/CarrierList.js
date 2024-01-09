import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CarrierList.css";

function CarrierList() {
  const [carriers, setCarriers] = useState([]);
  const [insurancePlans, setInsurancePlans] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://smithtech.io/react/eligibility/carriers")
      .then((response) => {
        setCarriers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching carriers:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleCarrierClick = (carrierId) => {
    if (!insurancePlans[carrierId]) {
      axios
        .get(`smithtech.io/react/eligibility/insurance-plans/${carrierId}`)
        .then((response) => {
          setInsurancePlans((prevPlans) => ({
            ...prevPlans,
            [carrierId]: response.data,
          }));
        })
        .catch((error) => {
          console.error("Error fetching insurance plans for carrier:", error);
        });
    }
  };

  if (isLoading) return <div>Loading carriers...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="carrier-list">
      <h2>Carriers</h2>
      {carriers.map((carrier) => (
        <div key={carrier.CarrierID} className="carrier-row">
          <button
            onClick={() => handleCarrierClick(carrier.CarrierID)}
            className="carrier-button"
          >
            {carrier.CarrierName}
          </button>
          <div className="insurance-plan-buttons">
            {insurancePlans[carrier.CarrierID] &&
              insurancePlans[carrier.CarrierID].map((plan) => (
                <button key={plan.PlanID} className="insurance-plan-button">
                  {plan.PlanName}
                </button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarrierList;
