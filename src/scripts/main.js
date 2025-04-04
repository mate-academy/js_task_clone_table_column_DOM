'use strict';

function copyTableColumn(tableId, colIndex) {
  const table = document.getElementById(tableId);
  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    const cell = rows[i].cells[colIndex];
    const clone = cell.cloneNode(true);

    const lastCellIndex = rows[i].cells.length - 1;

    rows[i].insertBefore(clone, rows[i].cells[lastCellIndex]);
  }
}

copyTableColumn('myTable', 1);
