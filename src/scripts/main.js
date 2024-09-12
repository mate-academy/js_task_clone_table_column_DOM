'use strict';

const table = document.querySelector('table');
const indexCopy = 1;
const indexPaste = 4;

[...table.rows].forEach(cell => {
  cell.children[indexPaste]
    .before(cell.children[indexCopy]
      .cloneNode(true));
});
