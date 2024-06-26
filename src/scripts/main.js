'use strict';

// write your code here

const tableTest = document.querySelector('table');

function getColumn(table, indexOfColumn) {
  const columnElements = [];

  for (let i = 0; i < table.getElementsByTagName('tr').length; i++) {
    columnElements.push(table.rows[i].cells[indexOfColumn].textContent);
  }

  return columnElements;
}

function pasteColumn(table, columnElements, indexToPaste) {
  const rowsCount = table.getElementsByTagName('tr').length;
  const headerCell = table.rows[0].insertCell(indexToPaste);
  const footerCell = table.rows[rowsCount - 1].insertCell(indexToPaste);

  headerCell.outerHTML = `<th>${columnElements[0]}</th>`;
  footerCell.outerHTML = `<th>${columnElements[0]}</th>`;

  for (let i = 1; i < rowsCount - 1; i++) {
    const newRowCell = table.rows[i].insertCell(indexToPaste);

    newRowCell.innerText = columnElements[i];
  }
}

pasteColumn(tableTest, getColumn(tableTest, 1), 4);
