'use strict';

const table = document.querySelector('table');

function cloneAndInsertColumn(colIndexToClone, insertBeforeColIndex) {
  function cloneCell(cell) {
    const cloned = cell.cloneNode(true);

    return cloned;
  }

  ['thead', 'tbody', 'tfoot'].forEach((section) => {
    const sec = table.querySelector(section);

    if (!sec) {
      return;
    }

    sec.querySelectorAll('tr').forEach((row) => {
      const cells = Array.from(row.children);

      if (cells.length <= colIndexToClone) {
        return;
      }

      const clonedCell = cloneCell(cells[colIndexToClone]);

      row.insertBefore(clonedCell, cells[insertBeforeColIndex]);
    });
  });
}

const colCount = table.querySelector('thead tr').children.length;

cloneAndInsertColumn(1, colCount - 1);
