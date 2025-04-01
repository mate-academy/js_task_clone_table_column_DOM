'use strict';

const headRow = document.querySelector('thead tr');
const bodyRow = document.querySelectorAll('tbody tr');
const footRow = document.querySelector('tfoot tr');

const headCell = headRow.children[1];
const headClone = headCell.cloneNode(true);

const footCell = footRow.children[1];
const footClone = footCell.cloneNode(true);

headRow.insertBefore(headClone, headRow.children[headRow.children.length - 1]);

bodyRow.forEach((row) => {
  const cell = row.children[1];
  const clone = cell.cloneNode(true);

  row.insertBefore(clone, row.children[row.children.length - 1]);
});

footRow.insertBefore(footClone, footRow.children[footRow.children.length - 1]);
