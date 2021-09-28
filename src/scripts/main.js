'use strict';

// write your code here

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];
  const second = row.cells[1];
  const last = row.lastElementChild;

  last.before(second.cloneNode(true));
}
