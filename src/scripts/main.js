'use strict';

const table = document.querySelector('table');

const rows = [...table.rows];

rows.forEach((row) => {
  const cellsRow = [...row.cells];

  const clonedCell = cellsRow[1].cloneNode(true);
  const lastCell = cellsRow[cellsRow.length - 1];

  row.insertBefore(clonedCell, lastCell);
});
