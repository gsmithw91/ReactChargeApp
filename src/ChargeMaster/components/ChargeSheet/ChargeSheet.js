import React, { useRef } from "react";
import { colorMapping } from "../../constants"; // Adjust the path as needed
import "./ChargeSheet.css";
import ChargeSheetActions from "./ChargeSheetActions/ChargeSheetActions";
import SummaryBox from "./SummaryBox/SummaryBox"; // Correct import statement

function ChargeSheet({ selectedRows }) {
  const chargeSheetRef = useRef();

  const renderChargeDetails = (row) => {
    const {
      LocationName,
      BillingCode,
      ServiceDescription,
      SystemID,
      ...otherDetails
    } = row;
    const sortedDetails = [];

    // Updated isValidDetail function
    const isValidDetail = (key, value) => {
      // Check if the value is not null, undefined, or an ID field
      // and also check that it's not exactly 0 or a string formatted as "0", "0.00", "0.0", etc.
      return (
        value !== null &&
        value !== undefined &&
        !key.includes("ID") &&
        value !== 0 &&
        value.toString().match(/^-?0+(\.0+)?$/) === null
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
    <div className="container">
      <div className="charge-sheet" ref={chargeSheetRef}>
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
        <ChargeSheetActions chargeSheetRef={chargeSheetRef} />
      </div>
      <SummaryBox selectedRows={selectedRows} /> {/* Render the SummaryBox */}
    </div>
  );
}

export default ChargeSheet;
