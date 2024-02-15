'use strict';

const createTh = text => {
  const th = document.createElement('th');

  th.textContent = text;

  return th;
};

const headRow = document.querySelector('thead tr');
const bodyRows = document.querySelectorAll('tbody tr');
const footRow = document.querySelector('tfoot tr');

const newPositionTh = createTh('Position');

headRow.insertBefore(newPositionTh.cloneNode(true), headRow.children[4]);
footRow.insertBefore(newPositionTh.cloneNode(true), footRow.children[4]);

const secondColumnTds = document.querySelectorAll('tbody tr td:nth-child(2)');

bodyRows.forEach((row, i) => {
  const newTd = document.createElement('td');

  newTd.textContent = secondColumnTds[i].textContent;
  row.insertBefore(newTd, row.children[4]);
});
