'use strict';

const tableSrc = document.querySelector('table');

const cloneColumn = (table, columnIndex) => {
  for (const el of [...table.children]) {
    const rows = [...el.children];

    for (const row of rows) {
      const cellClone = row.children[columnIndex].cloneNode(true);

      row.children[row.children.length - 1].before(cellClone);
    }
  }
};

cloneColumn(tableSrc, 1);
