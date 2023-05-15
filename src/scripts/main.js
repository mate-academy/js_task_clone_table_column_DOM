'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const cell = row.cells[1].cloneNode(true);

  row.insertBefore(cell, row.children[4]);
}
