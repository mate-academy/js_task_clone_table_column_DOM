'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot');

const rowsHead = Array.from(thead.querySelectorAll('tr'));
const rows = Array.from(tbody.querySelectorAll('tr'));
const rowsFoot = Array.from(tfoot.querySelectorAll('tr'));

rowsHead.forEach((row) => {
  const cells = Array.from(row.querySelectorAll('th'));

  const secondCell = cells[1].cloneNode(true);

  const lastCell = cells[cells.length - 1];

  row.insertBefore(secondCell, lastCell);
});

rows.forEach((row) => {
  const cells = Array.from(row.querySelectorAll('td'));

  const secondCell = cells[1].cloneNode(true);

  const lastCell = cells[cells.length - 1];

  row.insertBefore(secondCell, lastCell);
});

rowsFoot.forEach((row) => {
  const cells = Array.from(row.querySelectorAll('th'));

  const secondCell = cells[1].cloneNode(true);

  const lastCell = cells[cells.length - 1];

  row.insertBefore(secondCell, lastCell);
});
