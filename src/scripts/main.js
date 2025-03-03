'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');

rows.forEach((row) => {
  const secondColumn = row.cells[1];
  const clonedCell = secondColumn.cloneNode(true);

  row.insertBefore(clonedCell, row.cells[row.cells.length - 1]);
});
