'use strict';

const table = document.getElementsByTagName('table')[0];

for (const row of table.rows) {
  const cloneCell = row.cells[1].cloneNode(true);

  row.appendChild(cloneCell);
}
