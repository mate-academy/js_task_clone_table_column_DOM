'use strict';

const tableRow = document.querySelectorAll('tr');

tableRow.forEach((row) => {
  const cells = row.children;
  const secondCell = cells[1];
  const clone = secondCell.cloneNode(true);
  const lastCell = cells[cells.length - 1];

  lastCell.insertAdjacentElement('beforebegin', clone);
});
