'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];
  const rowLast = row.cells.length - 1;
  const newRow = row.insertCell(rowLast);

  newRow.textContent = row.cells[1]?.textContent || '';
}
