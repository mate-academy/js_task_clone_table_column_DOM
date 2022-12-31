'use strict';

const rows = document.querySelector('table').rows;

[...rows].forEach(({ cells }) => {
  const cloneCeil = cells[1].cloneNode(true);
  const lastCeil = cells[cells.length - 1];

  lastCeil.before(cloneCeil);
});
