'use strict';

const table = document.querySelector('table');

if (table) {
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const secondColumn = row.children[1];

    if (secondColumn) {
      const clonedColumn = secondColumn.cloneNode(true);
      const lastColumn = row.children[row.children.length - 1];

      row.insertBefore(clonedColumn, lastColumn);
    }
  });
}
