'use strict';

// write your code here

const table = document.querySelector('table');

const rows = table.rows;

for (const row of rows) {
  const td2 = row.children[1];

  row.insertBefore(td2.cloneNode(true), row.children[4]);
}
