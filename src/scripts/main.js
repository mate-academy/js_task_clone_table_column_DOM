'use strict';

const theadRows = document.querySelectorAll('thead tr');
const tbodyRows = document.querySelectorAll('tbody tr');
const tfootRows = document.querySelectorAll('tfoot tr');

function cloneAndInsertColumn(rows) {
  rows.forEach((row) => {
    const cells = Array.from(row.children);
    const secondCell = cells[1].cloneNode(true);

    row.insertBefore(secondCell, cells[2]);
  });
}

cloneAndInsertColumn(tbodyRows);
cloneAndInsertColumn(theadRows);
cloneAndInsertColumn(tfootRows);
