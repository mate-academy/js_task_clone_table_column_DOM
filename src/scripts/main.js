'use strict';

['thead', 'tbody', 'tfoot'].forEach((section) => {
  const rows = document.querySelectorAll(`${section} tr`);

  rows.forEach((row) => {
    const cells = row.cells;

    if (cells.length < 2) {
      return;
    }

    const secondCell = cells[1];
    const clonedCell = secondCell.cloneNode(true);

    row.insertBefore(clonedCell, cells[cells.length - 1]);
  });
});
