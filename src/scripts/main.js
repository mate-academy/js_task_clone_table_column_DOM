'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const secondCell = row.cells[1];
  const clone = secondCell.cloneNode(true);

  row.insertBefore(clone, row.lastElementChild);
});
