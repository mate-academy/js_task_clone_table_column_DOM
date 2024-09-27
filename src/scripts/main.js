'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const clonedCell = row.cells[1].cloneNode(true);

  row.cells[4].before(clonedCell);
});
