'use strict';

const table = document.querySelector('table');

for (const node of table.rows) {
  node.cells[3].after(node.cells[1].cloneNode(true));
}
