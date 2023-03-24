'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  row.children[4].before(row.children[1].cloneNode(true));
}
