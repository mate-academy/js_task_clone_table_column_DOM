/* eslint no-console: [,{ allow: ["warn", "log", "error"] }] */
'use strict';

const cloneAndInsert = (parentElement, childTag) => {
  if (!parentElement) {
    return;
  }

  const cloneCell = parentElement
    .querySelector(`${childTag}:nth-child(2)`)
    .cloneNode(true);
  const lastCell = parentElement.querySelector(`${childTag}:last-child`);

  if (cloneCell && lastCell) {
    lastCell.before(cloneCell);
  }
};

const headRow = document.querySelector('table thead tr');

cloneAndInsert(headRow, 'th');

const rows = document.querySelectorAll('table tbody tr');

rows.forEach((row) => {
  cloneAndInsert(row, 'td');
});

const footRow = document.querySelector('table tfoot tr');

cloneAndInsert(footRow, 'th');
