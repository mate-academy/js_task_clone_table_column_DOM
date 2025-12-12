'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.children;

  if (cells.length < 2) {
    return;
  }

  const clone = cells[1].cloneNode(true);
  const lastNode = cells[cells.length - 1];

  row.insertBefore(clone, lastNode);
});
