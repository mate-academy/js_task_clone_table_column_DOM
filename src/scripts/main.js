'use strict';

const element = document.querySelector('table');
const theRows = element.rows;

[...theRows].forEach(row => {
  const theCells = row.cells;

  theCells[theCells.length - 1].before(theCells[1].cloneNode(true));
});
