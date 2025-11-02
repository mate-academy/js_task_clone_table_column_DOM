'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.querySelectorAll('td, th');
  const secondSell = cells[1];
  const cloned = secondSell.cloneNode(true);

  const lastCell = cells[cells.length - 1];

  row.insertBefore(cloned, lastCell);
});
