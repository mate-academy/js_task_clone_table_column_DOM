'use strict';

// write your code here
const tableRows = document.querySelectorAll('tr');

function getTableColumn(columnNumber) {
  const cellsArray = [];

  tableRows.forEach((row) => {
    const rowCell = row.children[columnNumber - 1];

    cellsArray.push(rowCell.innerHTML);
  });

  return cellsArray;
}

function copyPasteColumnAfter(columnNumber, cellsArray) {
  const tableHeadData = document.createElement('th');

  tableHeadData.innerHTML = cellsArray[0];

  const tableFootData = document.createElement('th');

  tableFootData.innerHTML = cellsArray[cellsArray.length - 1];

  const tableHead = tableRows[0].children;
  const tableFoot = tableRows[tableRows.length - 1].children;

  tableHead[columnNumber - 1].after(tableHeadData);
  tableFoot[columnNumber - 1].after(tableFootData);

  for (let i = 1; i < cellsArray.length - 1; i++) {
    const tableData = document.createElement('td');
    const tableRowCollection = tableRows[i].children;

    tableData.innerHTML = cellsArray[i];
    tableRowCollection[columnNumber - 1].after(tableData);
  }
}

const secondColumn = getTableColumn(2);

copyPasteColumnAfter(4, secondColumn);
