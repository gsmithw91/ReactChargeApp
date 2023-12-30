import TableRow from "../TableRow/TableRow";
import React, { useEffect, useState } from "react";

function Table({ charges, selectedColumns, handleAddToChargeSheet }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Action</th>
          {selectedColumns.map((column, index) => (
            <th key={`column-${column}-${index}`}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {charges.map((charge, rowIndex) => (
          <TableRow
            key={`charge-${charge.ChargeID || rowIndex}`}
            charge={charge}
            selectedColumns={selectedColumns}
            handleAddToChargeSheet={handleAddToChargeSheet}
            rowIndex={rowIndex}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
