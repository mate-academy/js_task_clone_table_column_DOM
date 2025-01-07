'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  function cloneColumn(section, columnIndex, insertBeforeIndex) {
    const rows = section.rows;

    for (let i = rows.length - 1; i >= 0; i--) {
      const row = rows[i];

      if (row.cells[columnIndex]) {
        const clonedCell = row.cells[columnIndex].cloneNode(true);

        row.insertBefore(clonedCell, row.cells[insertBeforeIndex]);
      }
    }
  }

  [table.tHead, table.tBodies[0], table.tFoot].forEach((section) => {
    if (section) {
      cloneColumn(section, 1, 4);
    }
  });
});
