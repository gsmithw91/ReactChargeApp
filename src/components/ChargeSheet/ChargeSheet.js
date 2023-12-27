import React from "react";
import "./ChargeSheet.css";

function ChargeSheet({ selectedRows }) {
  const renderChargeDetails = (row) => {
    // Extract LocationName, BillingCode, and ServiceDescription first, if they exist
    const { LocationName, BillingCode, ServiceDescription, ...otherDetails } =
      row;
    const sortedDetails = [];

    // Add LocationName, BillingCode, and ServiceDescription to the sorted details if they exist
    if (LocationName) {
      sortedDetails.push(
        <p key="LocationName">LocationName: {LocationName}</p>
      );
    }
    if (BillingCode) {
      sortedDetails.push(<p key="BillingCode">BillingCode: {BillingCode}</p>);
    }
    if (ServiceDescription) {
      sortedDetails.push(
        <p key="ServiceDescription">ServiceDescription: {ServiceDescription}</p>
      );
    }

    // Add the rest of the details
    sortedDetails.push(
      ...Object.entries(otherDetails).map(([key, value]) => (
        <p key={key}>
          {key}: {value}
        </p>
      ))
    );

    return sortedDetails;
  };

  return (
    <div className="charge-sheet">
      <h2>Selected Charges</h2>
      {selectedRows.length > 0 ? (
        <ul>
          {selectedRows.map((row, index) => (
            <li key={index} className="charge-details">
              {renderChargeDetails(row)}
            </li>
          ))}
        </ul>
      ) : (
        <p>No charges selected.</p>
      )}
    </div>
  );
}

export default ChargeSheet;
