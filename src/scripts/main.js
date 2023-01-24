'use strict';

// write your code here
const table = document.querySelectorAll('tr');

table.forEach((tr) => {
  const newCell = tr.insertCell(4);

  const cellElement = tr.cells[1].innerHTML;

  newCell.append(cellElement);
});
