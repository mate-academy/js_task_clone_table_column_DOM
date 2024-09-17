'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const copyCell = row.children[1].cloneNode(true);

  row.children[3].after(copyCell);
}
