'use strict';

const table = document.querySelector('table');

const clone = (colIndexToClone) => {
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.children;

    const insertIndex = cells.length - 1;

    const cloneCell = cells[colIndexToClone].cloneNode(true);

    row.insertBefore(cloneCell, cells[insertIndex]);
  });
};

clone(1);
