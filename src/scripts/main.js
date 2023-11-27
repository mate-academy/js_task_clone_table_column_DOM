'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];
  const clone = row.cells[1].cloneNode(true);

  row.cells[3].after(clone);
}
