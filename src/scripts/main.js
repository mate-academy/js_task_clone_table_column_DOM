'use strict';

const table = document.querySelector('table');
const tableRows = [...table.rows];

tableRows.forEach((row) => {
  const secondColumn = row.cells[1];
  const lastColumn = row.cells[row.cells.length - 1];

  row.insertBefore(secondColumn.cloneNode(true), lastColumn);
});
