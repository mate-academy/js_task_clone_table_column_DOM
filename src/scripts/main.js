'use strict';

const table = Array.from(document.querySelectorAll('table tr'));

table.forEach((row) => {
  const secondColumn = row.cells[1];

  const clonedCell = secondColumn.cloneNode(true);

  row.appendChild(clonedCell);

  const lastCell = row.cells[row.cells.length - 1];

  row.insertBefore(lastCell, row.cells[row.cells.length - 2]);
});
