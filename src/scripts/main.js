'use strict';

const table = document.querySelector('table');
const thead = 0;
const tbody = 1;
const tfoot = 2;

function copyTableColumn(columnIndex) {
  const columnTitle = table.children[thead].children[0].innerText
    .split('\t')[columnIndex];
  const columnContent = [...table.children[tbody].children]
    .map(child => child.innerText.split('\t')[columnIndex]);
  const columnFooter = table.children[tfoot].children[0]
    .innerText.split('\t')[columnIndex];

  return {
    columnTitle,
    columnContent,
    columnFooter,
  };
}

// column is added after specified Position starting from 0

function addColumnToTable(columnToAdd, columnPosition) {
  const headerTh = document.createElement('th');

  headerTh.innerText = columnToAdd.columnTitle;

  table.children[thead].children[0]
    .children[columnPosition].after(headerTh);

  columnToAdd.columnContent.forEach(
    (contentValue, contentIndex) => {
      const td = document.createElement('td');

      td.innerText = contentValue;

      table.children[tbody].children[contentIndex]
        .children[columnPosition].after(td);
    });

  const footerTh = document.createElement('th');

  footerTh.innerHTML = columnToAdd.columnFooter;

  table.children[tfoot].children[0]
    .children[columnPosition].after(footerTh);
}

const copiedColumn = copyTableColumn(1);

addColumnToTable(copiedColumn, 3);
