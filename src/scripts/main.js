'use strict';

const copyIndexElement = 1;

function cloneAndInsertColumn() {
  const table = document.querySelector('table');
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.querySelectorAll('th, td');

    const copyCell = cells[copyIndexElement].cloneNode(true);

    row.insertBefore(copyCell, cells[cells.length - 1]);
  });
}

cloneAndInsertColumn();
