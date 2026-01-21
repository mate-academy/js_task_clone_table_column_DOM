'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.querySelectorAll('th, td');
  const targetCell = cells[1].cloneNode(true);
  const lastCell = cells[cells.length - 1];

  row.insertBefore(targetCell, lastCell);
});
