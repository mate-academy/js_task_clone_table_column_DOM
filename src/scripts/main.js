'use strict';

// write your code here

const table = document.querySelector('table');

const tableThead = table.querySelectorAll('thead tr');
const tableTbody = table.querySelectorAll('tbody tr');
const tableTfoot = table.querySelectorAll('tfoot tr');

tableThead.forEach((row) => {
  const cells = row.children;

  const rowTwo = cells[1];

  const copy = rowTwo.cloneNode(true);

  row.insertBefore(copy, cells[cells.length - 1]);
});

tableTbody.forEach((row) => {
  const cells = row.children;

  const rowTwo = cells[1];

  const copy = rowTwo.cloneNode(true);

  row.insertBefore(copy, cells[cells.length - 1]);
});

tableTfoot.forEach((row) => {
  const cells = row.children;

  const rowTwo = cells[1];

  const copy = rowTwo.cloneNode(true);

  row.insertBefore(copy, cells[cells.length - 1]);
});
