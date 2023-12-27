import React, { useState, useEffect } from "react";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./ChargeTable.css";

function ChargeTable({ systemId, locationId, setSelectedRows }) {
  const [charges, setCharges] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [originalColumnOrder, setOriginalColumnOrder] = useState([
    "ServiceDescription",
    "BillingCode",
  ]);

  useEffect(() => {
    if (systemId && locationId) {
      setLoading(true);
      axios
        .get(
          `http://127.0.0.1:5000/react/charges/system/${systemId}/location/${locationId}`
        )
        .then((response) => {
          setCharges(response.data);
          setLoading(false);

          if (response.data.length > 0) {
            const columns = Object.keys(response.data[0]).filter(
              (col) => col !== "SystemID" && col !== "LocationID"
            );
            setOriginalColumnOrder([
              "ServiceDescription",
              "BillingCode",
              ...columns,
            ]);
          }
        })
        .catch((error) => {
          console.error("Error fetching charges data:", error);
          setLoading(false);
        });
    }
  }, [systemId, locationId]);

  const handleAddToChargeSheet = (charge) => {
    setSelectedRows((prevSelectedRows) => {
      if (!prevSelectedRows.includes(charge)) {
        return [...prevSelectedRows, charge];
      } else {
        return prevSelectedRows;
      }
    });
  };

  const filteredCharges = searchTerm
    ? charges.filter((charge) =>
        Object.values(charge).some((value) => {
          if (typeof value === "string") {
            return (
              value != null &&
              value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            );
          }
          return false;
        })
      )
    : charges;

  const indexOfLastCharge = currentPage * rowsPerPage;
  const indexOfFirstCharge = indexOfLastCharge - rowsPerPage;
  const currentCharges = filteredCharges.slice(
    indexOfFirstCharge,
    indexOfLastCharge
  );

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(originalColumnOrder);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setOriginalColumnOrder(items); // Update the column order
  };

  return (
    <div className="charge-table">
      <h2>Charges for Selected System and Location</h2>
      <input
        type="text"
        placeholder="Search charges..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="charge-table-search"
      />
      {isLoading ? (
        <p>Loading charges data...</p>
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <table>
                  <thead>
                    <tr>
                      <th>Action</th>
                      {originalColumnOrder.map((column, index) => (
                        <Draggable
                          key={`column-${column}`} // Ensure a unique key
                          draggableId={`column-${column}`} // Ensure a unique key
                          index={index}
                        >
                          {(provided) => (
                            <th
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              {column}
                            </th>
                          )}
                        </Draggable>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentCharges.map((charge, rowIndex) => (
                      <tr key={`row-${rowIndex}`}>
                        <td>
                          <button
                            onClick={() => handleAddToChargeSheet(charge)}
                          >
                            Add to ChargeSheet
                          </button>
                        </td>
                        {originalColumnOrder.map((column, columnIndex) => (
                          <td
                            key={`row-${rowIndex}-${column}-${
                              charge.id || rowIndex
                            }`}
                          >
                            {charge[column]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
}

export default ChargeTable;
