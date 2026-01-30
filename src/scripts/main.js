'use strict';

const table = document.querySelector('table');

function insertColumnCopyOfSecondBeforeLast(table) {
  ['thead', 'tbody', 'tfoot'].forEach(sectionTag => {
    const section = table.querySelector(sectionTag);
    if (!section) return;

    Array.from(section.rows).forEach(row => {
      const secondCell = row.cells[1];
      if (!secondCell) return;

      const newCell = secondCell.cloneNode(true);

      row.insertBefore(newCell, row.cells[row.cells.length - 1]);
    });
  });
}

insertColumnCopyOfSecondBeforeLast(table);
