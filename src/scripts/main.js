'use strict';

const table = document.querySelector('table');

function copyAndPasteNode(from, to) {
  const tableRows = table.rows;

  for (const row of tableRows) {
    const td = row.cells[from];

    row.cells[to - 1].after(td.cloneNode(true));
  }
}

copyAndPasteNode(1, 4);
