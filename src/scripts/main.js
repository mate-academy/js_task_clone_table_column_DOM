'use strict';

const table = document.querySelector('table');

[...table.rows].forEach((row) => {
  const secondElem = row.children[1];
  const lastElem = row.lastElementChild;

  const copyCell = secondElem.cloneNode(true);

  row.insertBefore(copyCell, lastElem);
});
