'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach(row => {
  const cell = row.cells[1].cloneNode(true);

  row.insertBefore(cell, row.children[4]);
});
