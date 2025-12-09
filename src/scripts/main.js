'use strict';

const table = document.querySelector('table');

for (let row of table.rows) {
  let newCell = row.cells[1].cloneNode(true);
  row.lastElementChild.insertAdjacentElement('beforebegin', newCell);
}

