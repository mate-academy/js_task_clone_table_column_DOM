'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const secondColumn = rows[i].cells[1].textContent;
  const tableElement = rows[i].insertCell(4);

  tableElement.textContent = secondColumn;

  if (i === 0 || i === rows.length - 1) {
    const toReplace = document.createElement('th');

    toReplace.textContent = secondColumn;
    tableElement.replaceWith(toReplace);
  }
}
