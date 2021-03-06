'use strict';

const dashboard = document.body.querySelector('table');

cloneColumn(dashboard, 1, 4);

function cloneColumn(targetTable, fromIndex, toIndex) {
  for (const row of targetTable.rows) {
    row.children[toIndex].before(row.children[fromIndex].cloneNode(true));
  }
}
