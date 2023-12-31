import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InsurancePlanList.css'; // Make sure this CSS file exists and has the necessary styles

function InsurancePlanList({ carrierId }) {
    const [insurancePlans, setInsurancePlans] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (carrierId) {
            setLoading(true);
            axios.get(`http://127.0.0.1:5000/react/eligibility/insurance-plans/${carrierId}`)
                .then(response => {
                    setInsurancePlans(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching insurance plans:', error);
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, [carrierId]);

    const handlePlanClick = (planId) => {
        console.log('Selected Plan ID:', planId);
        // Implement additional logic for when an insurance plan is clicked
    };

    if (isLoading) return <div>Loading insurance plans...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="insurance-plan-list">
            {insurancePlans.map(plan => (
                <button 
                    key={plan.PlanID} 
                    onClick={() => handlePlanClick(plan.PlanID)}
                    className="insurance-plan-button"
                >
                    {plan.PlanName}
                </button>
            ))}
        </div>
    );
}

export default InsurancePlanList;
