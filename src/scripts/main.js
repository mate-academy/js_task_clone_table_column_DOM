'use strict';

function insertClonedColumn() {
  const tableBody = document.querySelector('tbody');
  const rows = tableBody.querySelectorAll('tr');

  rows.forEach((row) => {
    const secondCell = row.querySelector('td:nth-child(2)');

    if (secondCell) {
      const clonedCell = secondCell.cloneNode(true); // Clone the cell
      const lastCell = row.querySelector('td:last-child'); // Find the last cell

      if (lastCell) {
        row.insertBefore(clonedCell, lastCell);
      }
    }
  });
}
insertClonedColumn();
