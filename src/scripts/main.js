'use strict';

const table = document.querySelector('table');
const rows = [...table.rows];

rows.forEach((row) => {
  const { cells } = row;
  const clonedCell = cells[1].cloneNode(true);

  row.insertBefore(clonedCell, cells[cells.length - 1]);
});
