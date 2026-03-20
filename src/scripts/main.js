'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.cells;

  const target = cells[1];

  const clone = target.cloneNode(true);

  const last = cells[cells.length - 1];

  row.insertBefore(clone, last);
});
