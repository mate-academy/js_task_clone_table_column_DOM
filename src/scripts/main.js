'use strict';

const tbodyRows = document.querySelectorAll('tbody tr');

const theadRow = document.querySelector('thead tr');

const tfootRow = document.querySelector('tfoot tr');

const cloneRow = (row) => {
  const cells = row.querySelectorAll('td, th');
  const secondCollumn = cells[1].cloneNode(true);
  const lastCollumn = cells.length - 1;

  row.insertBefore(secondCollumn, cells[lastCollumn]);
};

tbodyRows.forEach((row) => cloneRow(row));

cloneRow(theadRow);
cloneRow(tfootRow);
