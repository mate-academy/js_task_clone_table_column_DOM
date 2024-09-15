'use strict';

const table = document.querySelector('table');
const rows = [...table.rows];

rows.forEach((row) => {
  const cells = [...row.cells];
  const cellCopy = cells[1].cloneNode(true);

  cells[cells.length - 1].before(cellCopy);
});
