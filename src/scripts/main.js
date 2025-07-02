'use strict';

// write your code here
function cloneTableColumn(fromIndex, beforeIndex) {
  const thead = document.querySelector('thead');
  const tbody = document.querySelector('tbody');
  const tfoot = document.querySelector('tfoot');

  const headTh = thead.rows[0].cells[fromIndex];
  const newHeadTh = headTh.cloneNode(true);

  thead.rows[0].insertBefore(newHeadTh, thead.rows[0].cells[beforeIndex]);

  Array.from(tbody.rows).forEach((row) => {
    const cell = row.cells[fromIndex];
    const newCell = cell.cloneNode(true);

    row.insertBefore(newCell, row.cells[beforeIndex]);
  });

  if (tfoot) {
    const footTh = tfoot.rows[0].cells[fromIndex];
    const newFootTh = footTh.cloneNode(true);

    tfoot.rows[0].insertBefore(newFootTh, tfoot.rows[0].cells[beforeIndex]);
  }
}

cloneTableColumn(1, 4);

// eslint-disable-next-line no-console
