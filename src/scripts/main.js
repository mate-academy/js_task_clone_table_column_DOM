'use strict';

// write your code here

const currentTable = document.querySelector('table');

for (let i = 0; i < currentTable.rows.length; i++) {
  let text = currentTable.rows[i].cells[1].innerHTML;
  let newCell;

  if (currentTable.rows[i].cells[1].innerHTML === 'TH') {
    newCell = document.createElement('th');
  } else {
    newCell = document.createElement('td');
  }

  newCell.innerHTML = text;

  currentTable.rows[i].append(newCell);
}
