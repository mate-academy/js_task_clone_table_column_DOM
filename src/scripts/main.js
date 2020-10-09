'use strict';

const table = document.querySelector('table');
const indexOfCellToClone = 1;
const inxedOfCellToAppenBefore = 4;

for (const row of table.rows) {
  const cellToClone = row.cells[indexOfCellToClone];

  row.cells[inxedOfCellToAppenBefore].before(cellToClone.cloneNode(true));
}
