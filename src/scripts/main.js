'use strict';

// write your code here
const allRows = document.querySelector('table').rows;

[...allRows].forEach(tr => {
  const cloneCell = tr.cells[1].cloneNode(true);

  tr.cells[tr.cells.length - 1].before(cloneCell);
});
