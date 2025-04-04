'use strict';

const table = document.getElementsByTagName('table')[0];
const allRows = table.querySelectorAll('tr');

allRows.forEach((row) => {
  const cells = row.children;

  if (cells.length > 1) {
    const clonedCell = cells[1].cloneNode(true);

    row.insertBefore(clonedCell, cells[cells.length - 1]);
  }
});
