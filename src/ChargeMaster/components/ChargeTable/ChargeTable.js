import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ChargeTable.css";
import Header from "./Header/Header";
import Table from "./Table/Table";
import ColumnSelector from "./ColumnSelector/ColumnSelector";

function ChargeTable({ systemId, locationId, setSelectedRows }) {
  const [charges, setCharges] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedColumns, setSelectedColumns] = useState([
    "ServiceDescription",
    "BillingCode",
    "GrossCharge",
    "DiscountedCashPrice",
  ]);
  const rowsPerPage = 10;

  useEffect(() => {
    if (systemId && locationId) {
      setLoading(true);
      axios
        .get(
          `https://smithtech.io/react/charges/system/${systemId}/location/${locationId}`
        )
        .then((response) => {
          setCharges(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching charges data:", error);
          setLoading(false);
        });
    }
  }, [systemId, locationId]);

  const handleSearchTermChange = (column, value) => {
    setSearchTerm({ ...searchTerm, [column]: value });
  };

  const handleAddToChargeSheet = (charge) => {
    setSelectedRows((prevSelectedRows) => {
      if (!prevSelectedRows.find((row) => row.ChargeID === charge.ChargeID)) {
        return [...prevSelectedRows, charge];
      } else {
        return prevSelectedRows;
      }
    });
  };

  const filteredCharges = searchTerm
    ? charges.filter((charge) =>
        Object.values(charge).some(
          (value) =>
            value !== null &&
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    : charges;

  const indexOfLastCharge = currentPage * rowsPerPage;
  const indexOfFirstCharge = indexOfLastCharge - rowsPerPage;
  const currentCharges = filteredCharges.slice(
    indexOfFirstCharge,
    indexOfLastCharge
  );

  return (
    <div className="charge-table">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedColumns={selectedColumns}
      />
      <ColumnSelector
        systemId={systemId}
        selectedColumns={selectedColumns}
        setSelectedColumns={setSelectedColumns}
      />
      {isLoading ? (
        <p>Loading charges data...</p>
      ) : (
        <Table
          charges={currentCharges}
          selectedColumns={selectedColumns}
          handleAddToChargeSheet={handleAddToChargeSheet}
        />
      )}
    </div>
  );
}

export default ChargeTable;
