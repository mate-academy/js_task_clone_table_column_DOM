'use strict';

const table = document.querySelector('table');
const allRows = table.rows;
const targetColumnIndex = 1;

for (let i = 0; i < allRows.length; i++) {
  const currentRow = allRows[i];
  const rowCells = currentRow.cells;

  if (rowCells.length > targetColumnIndex) {
    const cellToCopy = rowCells[targetColumnIndex];
    const clonedCell = cellToCopy.cloneNode(true);
    const lastCellIndex = rowCells.length - 1;
    const lastCell = rowCells[lastCellIndex];

    currentRow.insertBefore(clonedCell, lastCell);
  }
}
