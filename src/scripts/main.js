'use strict';

const rowsTable = document.querySelectorAll('tr');

for (let i = 0; i < rowsTable.length; i++) {
  rowsTable[i].cells[4].before(rowsTable[i].cells[1].cloneNode(true));
}
