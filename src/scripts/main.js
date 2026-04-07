'use strict';

const tr = document.querySelectorAll('tr');

tr.forEach((td) => {
  const cells = td.children;

  const secondCell = cells[1];
  const lastCell = cells[cells.length - 1];

  const copySecondCell = secondCell.cloneNode(true);

  lastCell.before(copySecondCell);
});
