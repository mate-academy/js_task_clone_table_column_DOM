'use strict';

const thead = document.querySelector('thead').children;
const tbody = document.querySelector('tbody').children;
const tfoot = document.querySelector('tfoot').children;
const copiedColumn = 1;
const columnInsertBefore = 4;

function copyRow(column, typeRow) {
  for (const element of column) {
    const item = document.createElement(typeRow);

    item.textContent = element.children[copiedColumn].textContent;

    element.insertBefore(item, element.children[columnInsertBefore]);
  }
}

copyRow(thead, 'th');
copyRow(tbody, 'td');
copyRow(tfoot, 'th');
