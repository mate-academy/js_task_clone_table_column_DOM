'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const theadRow = document.querySelector('table thead tr');
  const theadCells = theadRow.querySelectorAll('th');
  const clonedTheadCell = theadCells[1].cloneNode(true);

  theadRow.insertBefore(clonedTheadCell, theadCells[4]);

  const tableBody = document.querySelector('table tbody');

  tableBody.querySelectorAll('tr').forEach((row) => {
    const cells = row.querySelectorAll('td');
    const clonedCell = cells[1].cloneNode(true);

    row.insertBefore(clonedCell, cells[4]);
  });

  const tfootRow = document.querySelector('table tfoot tr');
  const tfootCells = tfootRow.querySelectorAll('th');
  const clonedTfootCell = tfootCells[1].cloneNode(true);

  tfootRow.insertBefore(clonedTfootCell, tfootCells[4]);
});
