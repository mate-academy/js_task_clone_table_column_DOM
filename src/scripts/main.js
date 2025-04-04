'use strict';

const COLUMN_TO_COPY = 1;

const table = document.querySelector('table');

const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const cellsAmount = rows[i].cells.length;
  const cellOfLastCol = rows[i].cells[cellsAmount - 1];

  const cellToCopy = rows[i].cells[COLUMN_TO_COPY];
  const copyCell = cellToCopy.cloneNode(true);

  rows[i].insertBefore(copyCell, cellOfLastCol);
}
