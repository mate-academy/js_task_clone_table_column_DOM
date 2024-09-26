'use strict';

function copyAndPasteNode(from, to) {
  const tableRows = document.querySelector('table').rows;

  for (const row of tableRows) {
    const td = row.cells[from];

    row.cells[to - 1].after(td.cloneNode(true));
  }
}

copyAndPasteNode(1, 4);
