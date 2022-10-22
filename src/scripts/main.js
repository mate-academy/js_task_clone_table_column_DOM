'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const cell = table.rows[i].cells[1].cloneNode(true);

  table.rows[i].insertBefore(cell, table.rows[i].cells[4]);
}
