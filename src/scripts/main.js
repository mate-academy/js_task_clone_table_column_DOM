'use strict';

const table = document.querySelector('#table');

Array.from(table.rows).forEach((row) => {
  const secondCell = row.cells[1];
  const clonedCell = secondCell.cloneNode(true);

  row.insertBefore(clonedCell, row.lastElementChild);
});
