'use strict';

const table = document.querySelector('table');

function cloneSecondColumn(section) {
  if (!section) {
    return;
  }

  const rows = section.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.children;
    const clonedCell = cells[1].cloneNode(true);

    row.insertBefore(clonedCell, cells[cells.length - 1]);
  });
}

cloneSecondColumn(table.tHead);
cloneSecondColumn(table.tBodies[0]);
cloneSecondColumn(table.tFoot);
