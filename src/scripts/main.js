'use strict';

const table = document.querySelector('table');
const tableRows = table.querySelectorAll('tr');

Array.from(tableRows).forEach((row) => {
  const rowCells = [...row.cells];
  const clonedCell = rowCells[1].cloneNode(true);
  const lastCell = rowCells[rowCells.length - 1];

  row.insertBefore(clonedCell, lastCell);
});
