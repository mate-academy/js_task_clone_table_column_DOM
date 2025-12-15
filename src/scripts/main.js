'use strict';

const rowsOfTableEl = document.querySelectorAll('table tr');

rowsOfTableEl.forEach((row) => {
  const cell = row.children[1];

  const newCell = cell.cloneNode(true);

  row.insertBefore(newCell, row.lastElementChild);
});
