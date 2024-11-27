'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const value = row.cells[1].textContent;
  const th = document.createElement('th');
  const td = document.createElement('td');

  th.textContent = value;
  td.textContent = value;

  if (i === 0 || i === rows.length - 1) {
    const child = row.cells.length - 1;

    row.insertBefore(th, row.cells[child]);
  } else {
    const child = row.cells.length - 1;

    row.insertBefore(td, row.cells[child]);
  }
}
