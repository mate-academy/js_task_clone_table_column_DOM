'use strict';

const table = document.querySelector('table');
const theadRows = table.querySelectorAll('thead tr');
const tbodyRows = table.querySelectorAll('tbody tr');
const tfootRows = table.querySelectorAll('tfoot tr');
const cloneColumn = (rows) => {
  rows.forEach((row) => {
    const cells = row.children;
    const secondCell = cells[1];
    const clonedCell = secondCell.cloneNode(true);

    row.insertBefore(clonedCell, cells[cells.length - 1]);
  });
};

cloneColumn(theadRows);
cloneColumn(tbodyRows);
cloneColumn(tfootRows);
