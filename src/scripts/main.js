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

function cloneFirstCell(row) {
  if (row.cells.length === 0) {
    return null;
  }

  return row.cells[0].cloneNode(true);
}

selections.forEach((selection) => {
  const rows = [...selection.rows];

  rows.forEach((row) => {
    const firstClone = cloneFirstCell(row);
    const secondClone = cloneSecondCell(row);
    const lastCell = row.cells[row.cells.length - 1];

    if (firstClone) {
      row.appendChild(firstClone);
    }

    if (!secondClone) {
      return;
    }

    row.insertBefore(secondClone, lastCell);
  });
});
