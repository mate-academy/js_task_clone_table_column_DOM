'use strict';

/**
 * Handle negative column index for row
 *
 * @param {Element} row
 * @param {integer} index
 * @return {integer}
 */
function handleNegativeColIndex(row, index) {
  return index >= 0 ? index : row.cells.length + index;
}

/**
 * Clone column that has sourceIndex of table
 * and insert it before the column with targetIndex
 *
 * @param {string} tableQuery
 * @param {integer} sourceIndex
 * @param {integer} targetIndex
 *
 * @return void
 */
function formTable(tableQuery, sourceIndex, targetIndex) {
  const rows = document.querySelectorAll(tableQuery + ' tr');

  rows.forEach((row) => {
    // handle negative indexes
    const srcIdx = handleNegativeColIndex(row, sourceIndex);
    const trgIdx = handleNegativeColIndex(row, targetIndex);

    if (srcIdx === trgIdx) {
      return;
    }

    if (srcIdx >= row.cells.length) {
      return;
    }

    // deep clone
    const clonedCell = row.cells[srcIdx].cloneNode(true);

    // safe link to target cell
    const targetCell = row.cells[trgIdx] || null;

    // insert clone cell before target one
    row.insertBefore(clonedCell, targetCell);
  });
}

const query = 'table';

/**
 * example: copy column "Position" (index: 1)
 * before column "Salary" (index: 4)
 */
formTable(query, 1, 4);
