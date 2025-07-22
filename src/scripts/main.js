'use strict';

// write your code here

const theadRows = document.querySelectorAll('thead tr');
const tbodyRows = document.querySelectorAll('tbody tr');
const tfootRows = document.querySelectorAll('tfoot tr');

theadRows.forEach((row) => {
  const cells = row.querySelectorAll('th');
  const cloned = cells[1].cloneNode(true);

  row.insertBefore(cloned, cells[cells.length - 1]);
});

tbodyRows.forEach((row) => {
  const cells = row.querySelectorAll('td');
  const cloned = cells[1].cloneNode(true);

  row.insertBefore(cloned, cells[cells.length - 1]);
});

tfootRows.forEach((row) => {
  const cells = row.querySelectorAll('th');
  const cloned = cells[1].cloneNode(true);

  row.insertBefore(cloned, cells[cells.length - 1]);
});
