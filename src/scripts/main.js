'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const cellCopy = row.cells[1].cloneNode(true);

  const lastCell = row.cells[row.children.length - 1];

  row.insertBefore(cellCopy, lastCell);
});
