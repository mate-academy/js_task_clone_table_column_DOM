'use strict';

const table = document.querySelector('table');

const secondCell = 1;
const lastCell = 4;

for (let i = 0; i < table.rows.length; i++) {
  const cellToCopy = table.rows[i].children[secondCell];

  table.rows[i].children[lastCell].before(cellToCopy.cloneNode(true));
}
