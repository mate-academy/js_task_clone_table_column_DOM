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
  for (let i = 0; i < cellsArray.length; i++) {
    const tableHead = document.createElement('th');
    const tableData = document.createElement('td');

    const tableRowCollection = tableRows[i].children;

    if (i === 0 || i === cellsArray.length - 1) {
      tableHead.innerHTML = cellsArray[i];

      tableRowCollection[columnNumber - 1].after(tableHead);
    } else {
      tableData.innerHTML = cellsArray[i];

      tableRowCollection[columnNumber - 1].after(tableData);
    }
  }
}

const secondColumn = getTableColumn(2);

copyPasteColumnAfter(4, secondColumn);
