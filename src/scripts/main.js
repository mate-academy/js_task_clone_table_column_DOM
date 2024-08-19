'use strict';

const table = document.querySelector('table');

function copyPasteColumn(tableElement, indexCopy, indexPaste) {
  const rows = [...tableElement.rows];

  rows.forEach((row) => {
    const cells = [...row.cells];
    const copyCell = cells[indexCopy].cloneNode(true);

    cells[indexPaste].after(copyCell);
  });
}

copyPasteColumn(table, 1, 3);
