import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select"; // Import react-select
import "./InsurancePlanList.css";
import EligibleLocationList from "./EligibleLocationList/EligibleLocationList";

function InsurancePlanList({ carrierId }) {
  const [insurancePlans, setInsurancePlans] = useState([]);
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (carrierId) {
      setLoading(true);
      axios
        .get(
          `https://smithtech.io/react/eligibility/insurance-plans/${carrierId}`
        )
        .then((response) => {
          const transformedPlans = response.data.map((plan) => ({
            value: plan.PlanID,
            label: plan.PlanName,
          }));
          setInsurancePlans(transformedPlans);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching insurance plans:", error);
          setError(error.message);
          setLoading(false);
        });
    }
  }, [carrierId]);

  const handlePlanSelect = (selectedOptions) => {
    setSelectedPlans(selectedOptions || []);
  };

  if (isLoading) {
    return <div>Loading insurance plans...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="insurance-plan-list">
      <Select
        isMulti
        name="plans"
        options={insurancePlans}
        value={selectedPlans}
        onChange={handlePlanSelect}
        className="plan-selector-dropdown"
      />
      {selectedPlans.map((plan) => (
        <div key={plan.value} className="plan-container">
          <h4 className="plan-title">{plan.label}</h4>
          <EligibleLocationList planId={plan.value} />
        </div>
      ))}
    </div>
  );
}

export default InsurancePlanList;
