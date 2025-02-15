'use strict';

// write your code here
const table = document.querySelector('table');

function cloneColum(tbl, col, targetCol) {
  const columnsForCloning = Array.from(tbl.rows).map((x) => x.cells[col]);
  const targetColumns = Array.from(tbl.rows).map((x) => x.cells[targetCol]);
  const clonedCols = columnsForCloning.map((x) => x.cloneNode(true));

  targetColumns.forEach((x, i) => x.before(clonedCols[i]));
}

cloneColum(table, 1, 4);
