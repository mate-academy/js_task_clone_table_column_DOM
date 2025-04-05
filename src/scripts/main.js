'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const secondCell = row.cells[1].cloneNode(true);

  row.cells[4].before(secondCell);
});
