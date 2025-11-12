'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.querySelectorAll('td, th');
  const secondCell = cells[1];
  const clone = secondCell.cloneNode(true);
  const lastCell = cells[cells.length - 1];

  row.insertBefore(clone, lastCell);
});
