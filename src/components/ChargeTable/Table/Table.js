import React from "react";
import TableRow from "../TableRow/TableRow";

function Table({ charges = [], initialColumns = [], handleAddToChargeSheet }) {
  console.log("Charges:", charges); // Debugging
  console.log("Initial Columns:", initialColumns); // Debugging

  return (
    <table>
      <thead>
        <tr>
          <th>Action</th>
          {initialColumns.map((column, index) => (
            <th key={`column-${column}-${index}`}>{column}</th>
          ))}
          {charges.length > 0 &&
            Object.keys(charges[0]).map((column, index) => {
              if (!initialColumns.includes(column)) {
                return <th key={`column-${column}-${index}`}>{column}</th>;
              }
              return null;
            })}
        </tr>
      </thead>
      <tbody>
        {charges.map((charge, rowIndex) => (
          <TableRow
            key={`charge-${charge.ChargeID || rowIndex}`}
            charge={charge}
            initialColumns={initialColumns}
            handleAddToChargeSheet={handleAddToChargeSheet}
            rowIndex={rowIndex}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
