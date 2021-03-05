'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

for (const row of rows) {
  row.children[row.children.length - 1].before(row.children[1].cloneNode(true));
}
