'use strict';

const table = document.querySelector('table');
const positionClone = document.createElement('th');

positionClone.textContent = 'Position';

const lastColumnIndex = table.rows[0].cells.length - 1;

table.rows[0].insertBefore(positionClone, table.rows[0].cells[lastColumnIndex]);

const tbodyRows = document.querySelectorAll('tbody tr');

tbodyRows.forEach(
  function(row) {
    const positionCell = document.createElement('td');

    positionCell.textContent = row.cells[1].textContent;

    row.insertBefore(positionCell, row.cells[lastColumnIndex]);
  },
);
