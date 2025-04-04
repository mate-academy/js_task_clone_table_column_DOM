'use strict';

const tableRows = document.querySelectorAll('tr');

for (let i = 0; i < tableRows.length; i++) {
  const row = tableRows[i];
  const cells = row.querySelectorAll('td, th');
  const secondColumnCell = cells[1].cloneNode(true);
  const lastCell = cells[cells.length - 1];

  row.insertBefore(secondColumnCell, lastCell);
}
