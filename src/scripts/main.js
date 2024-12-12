'use strict';

// write your code here
const table = document.querySelector('table');
const rows = table.rows;

for (const row of rows) {
  const cells = row.cells;
  let secondColCopy = null;

  if (cells[0].nodeName === 'TH') {
    secondColCopy = document.createElement('th');
  } else {
    secondColCopy = document.createElement('td');
  }

  secondColCopy.textContent = cells[1].textContent;

  row.insertBefore(secondColCopy, cells[4]);
}
