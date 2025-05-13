'use strict';

const theadRows = document.querySelectorAll('thead tr');
const tbodyRows = document.querySelectorAll('tbody tr');
const tfootRows = document.querySelectorAll('tfoot tr');

function cloneAndInsertColumn(rows) {
  rows.forEach((row) => {
    const cells = Array.from(row.children);
    const secondCell = cells[1].cloneNode(true);
    const lastCell = cells[cells.length - 1];

    row.insertBefore(secondCell, lastCell);
  });
}

cloneAndInsertColumn(tbodyRows);
cloneAndInsertColumn(theadRows);
cloneAndInsertColumn(tfootRows);
