'use strict';

const table = document.querySelector('table');

function cloneAndAppendColumn() {
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = Array.from(row.children);

    const clonedCell = cells[1].cloneNode(true);

    row.insertBefore(clonedCell, cells[cells.length - 1]);
  });
}

cloneAndAppendColumn();
