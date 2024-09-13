'use strict';

const table = document.querySelector('table');

const headerRows = table.querySelectorAll('thead tr');
const bodyRows = table.querySelectorAll('tbody tr');
const footerRows = table.querySelectorAll('tfoot tr');

headerRows.forEach((row) => {
  const cells = row.querySelectorAll('th');
  const cloneCell = cells[1].cloneNode(true);

  row.insertBefore(cloneCell, cells[cells.length - 1]);
});

bodyRows.forEach((row) => {
  const cells = row.querySelectorAll('td');
  const cloneCell = cells[1].cloneNode(true);

  row.insertBefore(cloneCell, cells[cells.length - 1]);
});

footerRows.forEach((row) => {
  const cells = row.querySelectorAll('th');
  const cloneCell = cells[1].cloneNode(true);

  row.insertBefore(cloneCell, cells[cells.length - 1]);
});
