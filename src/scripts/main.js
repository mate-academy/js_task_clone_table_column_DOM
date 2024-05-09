'use strict';

const rows = document.querySelectorAll('table tr');

rows.forEach((row, index) => {
  const positionCell = row.children[1];
  const copiedValue = positionCell.textContent;

  let newCell;

  if (index === 0 || index === rows.length - 1) {
    newCell = document.createElement('th');
  } else {
    newCell = document.createElement('td');
  }

  newCell.textContent = copiedValue;

  row.insertBefore(newCell, row.children[4]);
});
