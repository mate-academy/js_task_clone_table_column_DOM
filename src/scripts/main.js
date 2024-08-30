'use strict';

// write your code here
const tb = document.querySelector('table');
const rows = tb.querySelectorAll('tr');

rows.forEach((row) => {
  const cell = row.children;

  const clonedCell = cell[1].cloneNode(true);

  row.insertBefore(clonedCell, cell[cell.length - 1]);
});
