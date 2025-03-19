'use strict';

const rows = document.querySelectorAll('table tr');

for (const row of rows) {
  const totalCells = row.cells.length;

  const insertPosition = totalCells - 1;

  const isHeaderRow = row.querySelector('th') !== null;

  if (isHeaderRow) {
    const newCell = document.createElement('th');

    newCell.textContent = row.cells[1].textContent;

    row.insertBefore(newCell, row.cells[insertPosition]);
  } else {
    const newCell = row.insertCell(insertPosition);

    newCell.textContent = row.cells[1].textContent;
  }
}
