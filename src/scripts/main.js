'use strict';

const table = document.querySelector('table');

[...table.rows].forEach((row) => {
  const secondCellCopy = row.cells[1].cloneNode(true);

  row.lastElementChild.before(secondCellCopy);
});
