'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');

  const moveColumn = (row, fromIndex, beforeIndex) => {
    const cells = row.querySelectorAll('th, td');

    if (cells.length > Math.max(fromIndex, beforeIndex)) {
      const cloned = cells[fromIndex].cloneNode(true);

      row.insertBefore(cloned, cells[beforeIndex]);
    }
  };

  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');
  const tfoot = table.querySelector('tfoot');

  // Move headers
  moveColumn(thead.rows[0], 1, thead.rows[0].cells.length - 1);

  // Move body cells
  for (const row of tbody.rows) {
    moveColumn(row, 1, row.cells.length - 1);
  }

  // Move footer cells
  if (tfoot) {
    for (const row of tfoot.rows) {
      moveColumn(row, 1, row.cells.length - 1);
    }
  }
});
