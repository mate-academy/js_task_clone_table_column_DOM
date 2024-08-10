'use strict';

// write your code here
const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const newCell = document.createElement(
    i === 0 || i === rows.length - 1 ? 'th' : 'td',
  );

  newCell.innerText = rows[i].cells[1].innerText;
  rows[i].insertBefore(newCell, rows[i].lastElementChild);
}
