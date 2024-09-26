'use strict';

// write your code here
function cloneColumn(table) {
  const tableItems = table.querySelectorAll('tbody > tr');
  const tableHead = table.querySelector('thead > tr');
  const tableFoot = table.querySelector('tfoot > tr');

  const newColHead = document.createElement('th');
  const newColFoot = document.createElement('th');

  newColHead.innerText = tableHead.cells[1].innerText;
  newColFoot.innerText = tableFoot.cells[1].innerText;
  tableHead.insertBefore(newColHead, tableHead.cells[4]);
  tableFoot.insertBefore(newColFoot, tableFoot.cells[4]);

  for (const row of tableItems) {
    const newItem = document.createElement('td');

    newItem.innerText = row.cells[1].innerText;
    row.insertBefore(newItem, row.cells[4]);
  }
}

const tableTag = document.querySelector('table');

cloneColumn(tableTag);
