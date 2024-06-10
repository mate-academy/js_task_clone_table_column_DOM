'use strict';

const columnIndexToClone = 1;

const table = document.querySelector('table');
const tableHead = table.querySelector('thead');
const tableBody = table.querySelector('tbody');
const tableFoot = table.querySelector('tfoot');

function cloneColumn(element, columnToClone) {
  const tagName = element.firstElementChild.tagName;
  const newTableHeadColumn = document.createElement(tagName);

  newTableHeadColumn.textContent = element.children[columnToClone].textContent;

  element.children[element.children.length - 1].before(newTableHeadColumn);
}

cloneColumn(tableHead.firstElementChild, columnIndexToClone);
cloneColumn(tableFoot.firstElementChild, columnIndexToClone);

for (const child of tableBody.children) {
  cloneColumn(child, columnIndexToClone);
}
