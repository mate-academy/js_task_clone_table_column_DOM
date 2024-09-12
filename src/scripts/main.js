'use strict';

function copyInHeader(element) {
  const headerRow = element.children[0];
  const headerCells = headerRow.children;
  const newHeader = headerCells[1].cloneNode(true);

  headerCells[headerCells.length - 2].insertAdjacentElement('afterend',
    newHeader);
}

const body = document.querySelector('tbody');
const header = document.querySelector('thead');
const footer = document.querySelector('tfoot');

copyInHeader(header);
copyInHeader(footer);

for (let i = 0; i < body.children.length; i++) {
  const row = body.children[i];
  const newCell = row.children[1].cloneNode(true);

  row.children[row.children.length - 2].insertAdjacentElement('afterend',
    newCell);
}
