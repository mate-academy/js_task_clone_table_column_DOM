'use strict';

const thead = document.querySelector('thead');

const headRow = thead.querySelector('tr');

const headCells = headRow.cells;

headRow.insertBefore(headCells[1].cloneNode(true), headRow.children[4]);

const body = document.querySelector('tbody');

const bodyItems = body.querySelectorAll('tr');

for (let i = 0; i < bodyItems.length; i++) {
  const bodyRow = bodyItems[i];
  const rowCells = bodyRow.cells;

  bodyRow.insertBefore(rowCells[1].cloneNode(true), bodyRow.children[4]);
}

const foot = document.querySelector('tfoot');

const footRow = foot.querySelector('tr');

const footCells = footRow.cells;

footRow.insertBefore(footCells[1].cloneNode(true), footRow.children[4]);
