'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  row.insertBefore(row.children[1].cloneNode(true), row.children[4]);
}
