'use strict';

const tableRows = document.querySelectorAll('tr');

tableRows.forEach((tableRow) => {
  const secondCellClone = tableRow.children.item(1).cloneNode(true);

  tableRow.lastElementChild.before(secondCellClone);
});
