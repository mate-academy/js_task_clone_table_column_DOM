'use strict';

const table = document.querySelector('table');

// cloning header

const header = table.tHead.rows[0];
const headerCells = [...header.cells];
const headerCellToCopy = headerCells.find(
  (cell) => cell.textContent === 'Position',
);
const position = headerCellToCopy.cellIndex;
const clonedHeaderCell = headerCellToCopy.cloneNode(true);
const lastHeaderCell = headerCells[headerCells.length - 1];

lastHeaderCell.before(clonedHeaderCell);

// cloning rows
const bodyRows = [...table.tBodies][0].children;

[...bodyRows].forEach((row) => {
  const cellToCopy = row.cells[position];
  const clonedCell = cellToCopy.cloneNode(true);
  const lastCell = row.cells[row.cells.length - 1];

  lastCell.before(clonedCell);
});

// cloning footer
const footer = table.tFoot.rows[0];
const footerCells = [...footer.cells];
const footerCellToCopy = footerCells.find(
  (cell) => cell.textContent === 'Position',
);
const clonedFooterCell = footerCellToCopy.cloneNode(true);
const lastFooterCell = footerCells[footerCells.length - 1];

lastFooterCell.before(clonedFooterCell);
