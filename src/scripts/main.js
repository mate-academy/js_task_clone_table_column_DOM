'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const tfoot = table.querySelector('tfoot');
const rows = [...tbody.rows];

rows.forEach((row) => {
  const column = row.cells[1];
  const clone = column.cloneNode(true);

  row.insertBefore(clone, row.cells[row.cells.length - 1]);
});

const headerCells = thead.querySelectorAll('th');
const clonedHeader = headerCells[1].cloneNode(true);

thead
  .querySelector('tr')
  .insertBefore(clonedHeader, headerCells[headerCells.length - 1]);

const footerCells = tfoot.querySelectorAll('th');
const clonedFooter = footerCells[1].cloneNode(true);

tfoot
  .querySelector('tr')
  .insertBefore(clonedFooter, footerCells[footerCells.length - 1]);
