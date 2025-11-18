'use strict';

const thead = document.querySelector('thead tr');
const tbodyRows = document.querySelectorAll('tbody tr');
const tfoot = document.querySelector('tfoot tr');

const secondTh = thead.children[1];
const clonedTh = secondTh.cloneNode(true);

thead.insertBefore(clonedTh, thead.children[4]);

tbodyRows.forEach((row) => {
  const secondTd = row.children[1];
  const clonedTd = secondTd.cloneNode(true);

  row.insertBefore(clonedTd, row.children[4]);
});

const secondTf = tfoot.children[1];
const clonedTf = secondTf.cloneNode(true);

tfoot.insertBefore(clonedTf, tfoot.children[4]);
