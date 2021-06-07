'use strict';

// write your code here
const table = document.querySelector('table');

for (const row of table.rows) {
  const newCell = row.cells[1].cloneNode(false);

  newCell.innerHTML = row.cells[1].innerHTML;

  const posElem = row.lastElementChild;

  posElem.before(newCell);
}
