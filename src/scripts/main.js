'use strict';

const thead = document.querySelector('thead').children;
const tbody = document.querySelector('tbody').children;
const tfoot = document.querySelector('tfoot').children;

function copyRow(column, typeRow) {
  for (const element of column) {
    const item = document.createElement(typeRow);

    item.textContent = element.children[1].textContent;

    element.insertBefore(item, element.children[4]);
  }
}

copyRow(thead, 'th');
copyRow(tbody, 'td');
copyRow(tfoot, 'th');
