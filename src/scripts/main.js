'use strict';

// write your code here
const headRow = document.querySelector('thead tr');
const footRow = document.querySelector('tfoot tr');
const bodyRows = [...document.querySelectorAll('tbody tr')];

const cloneIndex = 1;
const newColIndex = 4;

const clonedHeader = document.createElement('th');

clonedHeader.innerText = headRow.children[cloneIndex].innerText;

const clonedFooter = document.createElement('th');

clonedFooter.innerText = footRow.children[cloneIndex].innerText;

headRow.children[newColIndex].insertAdjacentElement(
  'beforebegin',
  clonedHeader,
);

footRow.children[newColIndex].insertAdjacentElement(
  'beforebegin',
  clonedFooter,
);

bodyRows.forEach((row) => {
  const newCell = document.createElement('td');

  newCell.innerText = row.children[cloneIndex].innerText;

  row.children[newColIndex].insertAdjacentElement('beforebegin', newCell);
});
