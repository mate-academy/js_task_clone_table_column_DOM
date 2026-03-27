'use strict';

const tHeaders = document.querySelector('thead tr');
const theaderPositionClone = tHeaders.cells[1].cloneNode(true);
const tFooters = document.querySelector('tfoot tr');
const tfooterPositionClone = tFooters.cells[1].cloneNode(true);

tFooters.cells[4].before(tfooterPositionClone);
tHeaders.cells[4].before(theaderPositionClone);

const tbRows = document.querySelectorAll('tbody tr');

tbRows.forEach((row) => {
  const positionClone = row.cells[1].cloneNode(true);
  const indexToAppend = row.cells[4];

  indexToAppend.before(positionClone);
});
