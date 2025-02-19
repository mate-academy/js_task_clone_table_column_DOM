'use strict';

function cloneAndAppendColumn(tbl) {
  const tableSections = ['thead', 'tbody', 'tfoot'];

  tableSections.forEach((section) => {
    const sec = tbl[section];

    if (sec) {
      sec.rows.forEach((row) => {
        const secondCell = row.cells[1];

        if (secondCell) {
          const newCell = secondCell.cloneNode(true);

          row.insertBefore(newCell, row.cells[row.cells.length - 1]);
        }
      });
    }
  });
}

const table = document.querySelector('table');

cloneAndAppendColumn(table);
