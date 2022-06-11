'use strict';

function cloneTableCol(colToClone, insertBeforeCol) {
  const tr = document.querySelectorAll('tr');

  for (const row of tr) {
    row.insertBefore(
      row.cells[colToClone].cloneNode(true),
      row.cells[insertBeforeCol]
    );
  }
}

cloneTableCol(1, 4);
