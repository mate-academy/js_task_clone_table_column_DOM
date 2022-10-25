'use strict';

function cloneColumn(table, colNo) {
  for (const tablePart of table.children) {
    for (const row of tablePart.rows) {
      const cellClone = row.cells[colNo].cloneNode(true);

      row.lastElementChild.before(cellClone);
    }
  }
}

const dashboard = document.querySelector('table');

cloneColumn(dashboard, 1);
