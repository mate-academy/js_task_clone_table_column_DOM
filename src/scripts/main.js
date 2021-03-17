'use strict';

const table = document.querySelector('table');
const rows = [...table.rows];

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const cells = [...row.cells];
  const copy = cells[1].cloneNode(true);
  const position = cells[cells.length - 1];

  row.insertBefore(copy, position);
}
