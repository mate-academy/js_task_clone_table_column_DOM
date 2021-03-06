'use strict';

// write your code here

const table = document.querySelector('table');
const headTable = document.querySelector('thead');
const bodyTable = table.querySelector('tbody');
const footTable = table.querySelector('tfoot');
const position = table.rows[0].cells[1];

headTable.children[0].insertBefore(
  position.cloneNode(true), headTable.rows[0].cells[4]
);

footTable.children[0].insertBefore(
  position.cloneNode(true), footTable.rows[0].cells[4]
);

const count = document.querySelectorAll('tr').length;

for (let i = 0; i < count - 2; i++) {
  bodyTable.children[i].insertBefore(
    bodyTable.rows[i].cells[1].cloneNode(true),
    bodyTable.rows[i].cells[4]
  );
}
