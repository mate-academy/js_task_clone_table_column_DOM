'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = [...row.children];

  const copy = cells[1].cloneNode(true);
  const lastCell = cells[cells.length - 1];

  row.insertBefore(copy, lastCell);
});
