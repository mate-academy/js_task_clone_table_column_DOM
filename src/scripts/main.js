'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  row.children[4].before(row.children[1].cloneNode(true));
};
