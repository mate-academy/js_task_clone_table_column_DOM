'use strict';

// write your code here
(function () {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  function cloneColumnBeforeLast(section, columnIndex) {
    if (!section) {
      return;
    }

    const rows = Array.from(section.querySelectorAll('tr'));

    for (const row of rows) {
      const cells = Array.from(row.children);

      if (cells.length < 2) {
        continue;
      }

      const sourceCell = cells[columnIndex];

      if (!sourceCell) {
        continue;
      }

      const lastCell = cells[cells.length - 1];

      if (!lastCell) {
        continue;
      }

      const cloned = sourceCell.cloneNode(true);

      row.insertBefore(cloned, lastCell);
    }
  }

  cloneColumnBeforeLast(table.tHead, 1);
  cloneColumnBeforeLast(table.tBodies[0], 1);
  cloneColumnBeforeLast(table.tFoot, 1);
})();
