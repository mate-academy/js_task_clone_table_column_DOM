'use strict';

const duplicateSecondCell = (tableRow) => {
  tableRow.lastElementChild.before(tableRow.cells[1].cloneNode(true));
};

const tableHeader = document.querySelector('thead > tr');

if (tableHeader) {
  duplicateSecondCell(tableHeader);
}

const tableBody = document.querySelectorAll('tbody > tr');

for (const tableRow of tableBody) {
  duplicateSecondCell(tableRow);
}

const tableFooter = document.querySelector('tfoot > tr');

if (tableFooter) {
  duplicateSecondCell(tableFooter);
}
