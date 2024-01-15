import React from "react";
import "./TableRow.css";
function TableRow({
  charge,
  selectedColumns, // Use selectedColumns instead of initialColumns
  handleAddToChargeSheet,
  rowIndex,
}) {
  return (
    <tr>
      <td>
        <button onClick={() => handleAddToChargeSheet(charge)}>
          Add to ChargeSheet
        </button>
      </td>
      {selectedColumns.map((column, columnIndex) => (
        <td
          key={`charge-${charge.ChargeID || rowIndex}-${column}-${columnIndex}`}
        >
          {charge[column]}
        </td>
      ))}
    </tr>
  );
}

export default TableRow;
