'use strict';

const table = document.querySelector('table');

const headRows = table.tHead.rows;
const bodyRows = table.tBodies[0].rows;
const footRows = table.tFoot.rows;

function cloneColumn(fromIndex) {
  for (const row of headRows) {
    if (!row.cells.length) {
      continue;
    }

    const newCell = row.cells[fromIndex].cloneNode(true);

    row.insertBefore(newCell, row.cells[row.cells.length - 1]);
  }

  for (const row of bodyRows) {
    if (!row.cells.length) {
      continue;
    }

    const newCell = row.cells[fromIndex].cloneNode(true);

    row.insertBefore(newCell, row.cells[row.cells.length - 1]);
  }

  for (const row of footRows) {
    if (!row.cells.length) {
      continue;
    }

    const newCell = row.cells[fromIndex].cloneNode(true);

    row.insertBefore(newCell, row.cells[row.cells.length - 1]);
  }
}

cloneColumn(1);
