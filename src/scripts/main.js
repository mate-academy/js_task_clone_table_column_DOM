'use strict';

const rows = document.querySelector('table').rows;

[...rows].forEach(({ cells }) => {
  const cloneCell = cells[1].cloneNode(true);
  const lastCell = cells[cells.length - 1];

  lastCell.before(cloneCell);
});
