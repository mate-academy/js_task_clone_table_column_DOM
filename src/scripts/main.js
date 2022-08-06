'use strict';

function pasteBeforeLastColumn(clonedColumn) {
  document.querySelectorAll('tr')
    .forEach(row => row.lastElementChild
      .before(row.cells[clonedColumn].cloneNode(true)));
}

pasteBeforeLastColumn(1);
