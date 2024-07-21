'use strict';

const table = document.querySelector('table');

function cloneAndInsertColumn(section) {
  for (const row of section.rows) {
    const cloneCell = row.cells[1].cloneNode(true);

    row.insertBefore(cloneCell, row.cells[row.cells.length - 1]);
  }
}

if (table.tHead) {
  cloneAndInsertColumn(table.tHead);
}

if (table.tBodies.length > 0) {
  for (const tbody of table.tBodies) {
    cloneAndInsertColumn(tbody);
  }
}

if (table.tFoot) {
  cloneAndInsertColumn(table.tFoot);
}
