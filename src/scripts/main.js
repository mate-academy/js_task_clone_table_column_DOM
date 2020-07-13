'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const copy = row.children[1].cloneNode(true);

  row.insertBefore(copy, row.children[4]);
}
