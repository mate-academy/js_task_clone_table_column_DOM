'use strict';

const tablee = document.querySelector('table');
const rows = tablee.rows;

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const secondColumnCopy = row.cells[1].cloneNode(true);

  row.insertBefore(secondColumnCopy, row.cells[4]);
}
