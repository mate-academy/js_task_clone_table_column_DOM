'use strict';

// write your code here
const table = document.querySelector('table');

for (const row of table.rows) {
  const position = row.cells[1].innerHTML;

  const newCell = row.insertCell(4);

  newCell.innerHTML = position;
}
