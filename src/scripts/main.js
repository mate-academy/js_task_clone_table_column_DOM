'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.children;

  const clone = cells[1].cloneNode(true);

  row.insertBefore(clone, cells[cells.length - 1]);
});
