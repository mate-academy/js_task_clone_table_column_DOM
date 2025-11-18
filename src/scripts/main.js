'use strict';

const thead = document.querySelector('thead tr');
const secondTh = thead.children[1];
const clonedTh = secondTh.cloneNode(true);

thead.insertBefore(clonedTh, thead.lastElementChild);

const tbodyRows = document.querySelectorAll('tbody tr');

tbodyRows.forEach((row) => {
  const secondTd = row.children[1];
  const clonedTd = secondTd.cloneNode(true);

  row.insertBefore(clonedTd, row.lastElementChild);
});

const tfoot = document.querySelector('tfoot tr');
const secondTf = tfoot.children[1];
const clonedTf = secondTf.cloneNode(true);

tfoot.insertBefore(clonedTf, tfoot.lastElementChild);
