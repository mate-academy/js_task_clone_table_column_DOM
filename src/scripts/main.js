'use strict';
  const rowList = document.querySelector('table').rows;

  for (const row of rowList) {
    const cells = row.cells;
    cells[cells.length - 1].before(cells[1].cloneNode(true));
  }
