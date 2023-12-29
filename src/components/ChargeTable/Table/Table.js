// Table.js
import React from "react";
import TableRow from "../TableRow/TableRow";

function Table({ charges, initialColumns, handleAddToChargeSheet }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Action</th>
          {initialColumns.map((column, index) => (
            <th key={`column-${column}-${index}`}>{column}</th>
          ))}
          {Object.keys(charges[0] || {}).map((column, index) => {
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
            rowIndex={rowIndex} // Pass rowIndex as a prop
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
