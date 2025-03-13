'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');
  const tfoot = table.querySelector('tfoot');

  const colIndex = 1;
  const insertBeforeIndex = 4;

  function cloneAndInsertColumn(section) {
    section.querySelectorAll('tr').forEach((row) => {
      const cells = row.children;

      if (cells.length > colIndex) {
        const clonedCell = cells[colIndex].cloneNode(true);

        if (insertBeforeIndex >= cells.length) {
          row.appendChild(clonedCell);
        } else {
          row.insertBefore(clonedCell, cells[insertBeforeIndex]);
        }
      }
    });
  }

  cloneAndInsertColumn(thead);
  cloneAndInsertColumn(tbody);
  cloneAndInsertColumn(tfoot);
});
