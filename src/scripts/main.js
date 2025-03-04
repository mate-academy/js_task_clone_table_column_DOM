'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');

  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');
  const tfoot = table.querySelector('tfoot');

  const cloneColumn = (section) => {
    for (const row of section.rows) {
      const cloneCell = row.cells[1].cloneNode(true);

      row.insertBefore(cloneCell, row.cells[row.cells.length - 1]);
    }
  };

  cloneColumn(thead);
  cloneColumn(tbody);
  cloneColumn(tfoot);
});
