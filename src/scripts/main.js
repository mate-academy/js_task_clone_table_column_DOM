'use strict';

const tableRows = document.querySelectorAll('tr');

for (const tableRow of tableRows) {
  const newCell = tableRow.children[1].cloneNode(true);

  tableRow.insertBefore(newCell, tableRow.children[4]);
}
