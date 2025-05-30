'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.querySelectorAll('td, th');

  if (cells.length < 3) {
    return;
  }

  const secondCell = cells[1].cloneNode(true);
  const lastCell = cells[cells.length - 1];

  row.insertBefore(secondCell, lastCell);
});
