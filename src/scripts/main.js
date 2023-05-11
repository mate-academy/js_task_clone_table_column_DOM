'use strict';

const tableEl = document.querySelector('table');
const columnToCopy = 1;

copyColumn(tableEl, columnToCopy);

function copyColumn(table, toCopy = 1) {
  [...table.children].forEach((child) => {
    [...child.rows].forEach((row) => {
      const additionalNode = row.cells[toCopy].cloneNode(true);

      row.lastElementChild
        .insertAdjacentHTML('beforebegin', additionalNode.outerHTML);
    });
  });
}
