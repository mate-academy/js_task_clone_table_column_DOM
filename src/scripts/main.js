'use strict';

const dashboard = document.body.querySelector('table');

cloneColumn(dashboard, 1, 4);

function cloneColumn(targetTable, fromIndex, toIndex) {
  for (const row of targetTable.rows) {
    const clone = row.children[fromIndex].cloneNode(true);

    row.children[toIndex].before(clone);
  }
}
