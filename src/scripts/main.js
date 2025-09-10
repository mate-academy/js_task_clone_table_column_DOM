'use strict';

function insertClone(row) {
  const cells = row.cells;

  if (cells.length < 2) {
    return;
  }

  const potentialClone = cells[cells.length - 2];

  if (
    potentialClone &&
    potentialClone.dataset &&
    potentialClone.dataset.cloned === 'true'
  ) {
    return;
  }

  const lastCell = cells[cells.length - 1];
  const cellClone = cells[1].cloneNode(true);

  cellClone.dataset.cloned = 'true';

  row.insertBefore(cellClone, lastCell);
}

const table = document.querySelector('table');

if (!table) {
  throw new Error('Table element not found');
}

const allRows = table.querySelectorAll('thead tr, tbody tr, tfoot tr');

if (!allRows.length) {
  throw new Error('No rows found in thead, tbody, or tfoot');
}

allRows.forEach((row) => {
  insertClone(row);
});
