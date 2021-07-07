'use strict';

function cloneTableColumn(columnToClone, insertBeforeColumn) {
  const tr = document.querySelectorAll('tr');

  for (const row of tr) {
    row.insertBefore(
      row.cells[columnToClone].cloneNode(true),
      row.cells[insertBeforeColumn]
    );
  }
}

cloneTableColumn(1, 4);
