'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  if (!table) return; // Guard if no table exists

  const cloneIndex = 1; // Column to clone

  // Helper function to clone cells in a given row
  function cloneRowCells(row) {
    if (!row || row.children.length <= cloneIndex) return; // Guard for short rows
    const newCell = row.children[cloneIndex].cloneNode(true);
    const insertPos = row.children.length - 1; // Insert before last cell
    row.insertBefore(newCell, row.children[insertPos]);
  }

  // Handle THEAD
  if (table.tHead) {
    Array.from(table.tHead.rows).forEach(cloneRowCells);
  }

  // Handle each TBODY
  Array.from(table.tBodies).forEach((tbody) => {
    Array.from(tbody.rows).forEach(cloneRowCells);
  });

  // Handle TFOOT
  if (table.tFoot) {
    Array.from(table.tFoot.rows).forEach(cloneRowCells);
  }
});
