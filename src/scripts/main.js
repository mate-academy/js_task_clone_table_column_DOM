'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const clone = rows[i].cells[1].cloneNode(true);

  rows[i].insertBefore(clone, rows[i].lastElementChild);
}
