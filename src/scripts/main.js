'use strict';

const theadRow = document.querySelector('thead tr');
const thToClone = theadRow.children[1];
const clonedTh = thToClone.cloneNode(true);

theadRow.insertBefore(clonedTh, theadRow.lastElementChild);

const bodyRows = document.querySelectorAll('tbody tr');

bodyRows.forEach((row) => {
  const tdToClone = row.children[1];
  const clonedTd = tdToClone.cloneNode(true);

  row.insertBefore(clonedTd, row.lastElementChild);
});

const tfootRow = document.querySelector('tfoot tr');
const tfootThToClone = tfootRow.children[1];
const clonedTfootTh = tfootThToClone.cloneNode(true);

tfootRow.insertBefore(clonedTfootTh, tfootRow.lastElementChild);
