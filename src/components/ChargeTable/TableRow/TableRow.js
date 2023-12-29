// TableRow.js
import React from "react";

function TableRow({
  charge,
  initialColumns,
  handleAddToChargeSheet,
  rowIndex,
}) {
  return (
    <tr key={`charge-${charge.ChargeID || rowIndex}`}>
      <td>
        <button onClick={() => handleAddToChargeSheet(charge)}>
          Add to ChargeSheet
        </button>
      </td>
      {initialColumns.map((column, columnIndex) => (
        <td
          key={`charge-${charge.ChargeID || rowIndex}-${column}-${columnIndex}`}
        >
          {charge[column]}
        </td>
      ))}
      {Object.keys(charge).map((column, columnIndex) => {
        if (!initialColumns.includes(column)) {
          return (
            <td
              key={`charge-${
                charge.ChargeID || rowIndex
              }-${column}-${columnIndex}`}
            >
              {charge[column]}
            </td>
          );
        }
        return null;
      })}
    </tr>
  );
}

export default TableRow;
