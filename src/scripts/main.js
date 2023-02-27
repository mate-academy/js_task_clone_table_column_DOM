'use strict';

const rows = document.querySelectorAll('tr');
const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const secondRow = table.rows[i].cells[1];
  const copy = secondRow.cloneNode(true);

  rows[i].insertBefore(copy, rows[i].children[4]);
}
