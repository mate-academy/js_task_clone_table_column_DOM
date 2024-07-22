'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const copyCell = row.cells[1].cloneNode(true);

  row.cells[3].after(copyCell);
});
