'use strict';

// write your code here
const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  if (i === 0 || i === rows.length - 1) {
    const newCell = document.createElement('th');

    newCell.innerText = rows[i].cells[1].innerText;
    rows[i].insertBefore(newCell, rows[i].lastElementChild);
  } else {
    const newCell = document.createElement('td');

    newCell.innerText = rows[i].cells[1].innerText;
    rows[i].insertBefore(newCell, rows[i].lastElementChild);
  }
}
