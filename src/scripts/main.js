'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  row.lastElementChild.before(row.children[1].cloneNode(true));
}
