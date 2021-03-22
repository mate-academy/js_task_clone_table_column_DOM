'use strict';

// write your code here

const table = document.querySelector('table');

const rows = table.rows;

for (const row of rows) {
  const cells = [...row.cells];

  row.insertAdjacentHTML('beforeend', `${cells[1].outerHTML}`);
  row.append(cells[cells.length - 1]);
}
