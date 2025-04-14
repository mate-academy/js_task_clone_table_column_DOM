'use strict';

function copyColumn(tableId, columnIndex) {
  const table = document.getElementById(tableId);

  for (const row of table.rows) {
    const cells = row.cells;
    const cellToCopy = cells[columnIndex];

    if (cellToCopy) {
      const newCell = cellToCopy.cloneNode(true);
      const insertPosition = cells.length - 1;

      row.insertBefore(newCell, cells[insertPosition]);
    }
  }
}

copyColumn('myTable', 1);
