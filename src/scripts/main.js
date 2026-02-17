'use strict';

// write your code here

const table = document.querySelector('table');

const selections = [
  table.querySelector('thead'),
  table.querySelector('tbody'),
  table.querySelector('tfoot'),
].filter(Boolean);

function cloneSecondCell(row) {
  if (row.cells.length < 2) {
    return null;
  }

  const secondCell = row.cells[1];
  const cloned = secondCell.cloneNode(true);

  return cloned;
}

selections.forEach((selection) => {
  const rows = [...selection.rows];

  rows.forEach((row) => {
    const newCell = cloneSecondCell(row);

    if (!newCell) {
      return true;
    }

    const lastCell = row.cells[row.cells.length - 1];

    row.insertBefore(newCell, lastCell);
  });
});
