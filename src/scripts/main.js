'use strict';

const table = document.querySelector('table');
const rows = document.querySelectorAll('tr');

for (let i = 0; i < table.rows.length; i++) {
  const secondRow = table.rows[i].cells[1];
  const copy = secondRow.cloneNode(true);

  rows[i].insertBefore(copy, rows[i].children[4]);
}
