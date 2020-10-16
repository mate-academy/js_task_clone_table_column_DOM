'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  const cellCopy = row.cells[1].cloneNode(true);

  row.cells[4].before(cellCopy);
}
