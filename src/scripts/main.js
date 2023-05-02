'use strict';

const rows = document.querySelector('table').rows;

for (const row of rows) {
  const secondCell = row.children[1].cloneNode(true);
  const lastCell = row.lastElementChild;

  lastCell.insertAdjacentHTML('beforebegin', secondCell.outerHTML);
};
