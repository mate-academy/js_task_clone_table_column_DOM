'use strict';

// Find the table in the document
const table = document.querySelector('table');

if (table) {
  // Get all rows across the entire table
  const rows = table.querySelectorAll('tr');

  // Loop through each row to clone and insert the column
  rows.forEach((row) => {
    const cells = row.children;

    // Make sure the row has enough cells to work with
    if (cells.length >= 2) {
      // The second column is at index 1
      const sourceCell = cells[1];

      // The last column is at the last inedex
      const lastCell = cells[cells.length - 1];

      // Clone the second cell
      const clonedCell = sourceCell.cloneNode(true);

      // Insert the cloned cell right before the last table column
      row.insertBefore(clonedCell, lastCell);
    }
  });
}
