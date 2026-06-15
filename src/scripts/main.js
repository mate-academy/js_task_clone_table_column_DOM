'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    const cell = row.cells[1];
    const clone = cell.cloneNode(true);

    row.insertBefore(clone, row.lastElementChild);
  }
});
