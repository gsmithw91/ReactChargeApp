import React from "react";
import { colorMapping } from "../../constants"; // Adjust the path as needed
import "./ChargeSheet.css";

function ChargeSheet({ selectedRows }) {
  const renderChargeDetails = (row) => {
    const {
      LocationName,
      BillingCode,
      ServiceDescription,
      SystemID,
      ...otherDetails
    } = row;
    const sortedDetails = [];

    const isValidDetail = (key, value) => {
      return (
        value !== null &&
        value !== undefined &&
        value !== 0 &&
        !key.includes("ID")
      );
    };

    if (isValidDetail("LocationName", LocationName)) {
      sortedDetails.push(
        <p key="LocationName">LocationName: {LocationName}</p>
      );
    }
    if (isValidDetail("BillingCode", BillingCode)) {
      sortedDetails.push(<p key="BillingCode">BillingCode: {BillingCode}</p>);
    }
    if (isValidDetail("ServiceDescription", ServiceDescription)) {
      sortedDetails.push(
        <p key="ServiceDescription">ServiceDescription: {ServiceDescription}</p>
      );
    }

    Object.entries(otherDetails).forEach(([key, value]) => {
      if (isValidDetail(key, value)) {
        sortedDetails.push(
          <p key={key}>
            {key}: {value}
          </p>
        );
      }
    });

    return (
      <div className="charge-item">
        <div className="charge-details">{sortedDetails}</div>
        <div
          className="system-color-box"
          style={{ backgroundColor: colorMapping[SystemID] || "#defaultColor" }} // Apply background color based on SystemID
        />
      </div>
    );
  };

  return (
    <div className="charge-sheet">
      <h2>Selected Charges</h2>
      {selectedRows.length > 0 ? (
        <ul>
          {selectedRows.map((row, index) => (
            <li key={index} className="charge-item-wrapper">
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
