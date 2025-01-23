'use strict';

const table = document.querySelector('table');

const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.children;
  const secondSell = cells[1];
  const clone = secondSell.cloneNode(true);

  const lastCell = cells[cells.length - 1];

  lastCell.insertAdjacentElement('beforebegin', clone);
});
