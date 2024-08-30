'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const positionCell = row.cells[1];
  const newPositionCell = positionCell.cloneNode(true);

  row.insertBefore(newPositionCell, row.lastChild.previousSibling);
});
