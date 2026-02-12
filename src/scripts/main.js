'use strict';

const rows = document.querySelectorAll('table tr');

rows.forEach((item) => {
  const cells = item.children;

  if (cells.length > 1) {
    const cellCopy = cells[1].cloneNode(true);
    const position = cells[cells.length - 1];

    item.insertBefore(cellCopy, position);
  }
});
