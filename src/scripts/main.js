'use strict';

const tableRows = document.querySelector('table').rows;
const copyIndex = 1;
const insertIndex = 4;

for (const row of tableRows) {
  row.children[insertIndex].before(row.children[copyIndex].cloneNode(true));
}
