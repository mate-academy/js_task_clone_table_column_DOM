'use strict';

// write your code here

const table = document.querySelector('table');
const headTable = document.querySelector('thead');
const bodyTable = table.querySelector('tbody');
const footTable = table.querySelector('tfoot');
const position = table.children[0].children[0].children[1];

headTable.children[0].insertBefore(
  position.cloneNode(true), headTable.children[0].children[4]
);

footTable.children[0].insertBefore(
  position.cloneNode(true), footTable.children[0].children[4]
);

const count = document.querySelectorAll('tr').length;

for (let i = 0; i < count - 2; i++) {
  bodyTable.children[i].insertBefore(
    bodyTable.children[i].children[1].cloneNode(true),
    bodyTable.children[i].children[4]
  );
}
