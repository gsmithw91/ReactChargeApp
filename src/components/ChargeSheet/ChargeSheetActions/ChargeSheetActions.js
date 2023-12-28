import React, { useState } from "react";
import { useReactToPrint } from "react-to-print";
import "./ChargeSheetActions.css";

const ChargeSheetActions = ({ chargeSheetRef }) => {
  const [message, setMessage] = useState("");

  const handlePrint = useReactToPrint({
    content: () => chargeSheetRef.current,
  });

  const handleCopyToClipboard = async () => {
    try {
      // Select all list items inside the chargeSheetRef.current
      const items = chargeSheetRef.current.querySelectorAll("ul > li");
      // Join the text content of each item into a single string, separated by double new lines
      const textToCopy = Array.from(items)
        .map((li) => li.innerText.trim())
        .join("\n\n");
      await navigator.clipboard.writeText(textToCopy);
      setMessage("ChargeSheet items copied to clipboard!");
      setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
    } catch (err) {
      console.error("Failed to copy ChargeSheet items:", err);
      setMessage("Failed to copy ChargeSheet items to clipboard.");
      setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
    }
  };

  return (
    <div className="charge-sheet-actions">
      <button onClick={handlePrint} aria-label="Print ChargeSheet">
        Save as PDF
      </button>
      <button
        onClick={handleCopyToClipboard}
        aria-label="Copy ChargeSheet to Clipboard"
      >
        Copy to Clipboard
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ChargeSheetActions;
