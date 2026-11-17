'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.children;
  const secondColumn = cells[1].cloneNode(true);
  const lastColumn = cells[cells.length - 1];

  row.insertBefore(secondColumn, lastColumn);
});
