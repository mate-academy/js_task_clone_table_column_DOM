'use strict';

const table = document.querySelector('table');
const tableRows = table.rows;

for (const row of tableRows) {
  row.children[3].after(row.children[1].cloneNode(true));
}
