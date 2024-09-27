'use strict';

const table = document.querySelector('table');

[...table.rows].forEach(item => {
  const cellCopy = item.cells[1].cloneNode(true);

  item.insertBefore(cellCopy, item.cells[item.cells.length - 1]);
});
