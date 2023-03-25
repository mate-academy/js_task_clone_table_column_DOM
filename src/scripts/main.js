'use strict';

const tableRowsList = document.querySelectorAll('tr');
const tableRows = [...tableRowsList];

for (const tableRow of tableRows) {
  const copiedCell = tableRow.children[1];
  const tagName = copiedCell.tagName.toLowerCase();
  const newCell = document.createElement(tagName);

  newCell.textContent = copiedCell.textContent;

  const lastChildIndex = tableRow.children.length - 1;

  tableRow.insertBefore(newCell, tableRow.children[lastChildIndex]);
}
