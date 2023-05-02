'use strict';

const rows = document.querySelector('table').rows;

for (const row of rows) {
  const secondColumn = row.children[1].cloneNode(true);
  const lastColumn = row.lastElementChild;

  lastColumn.insertAdjacentHTML('beforebegin', secondColumn.outerHTML);
};
