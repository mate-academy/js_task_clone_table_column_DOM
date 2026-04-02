'use strict';

/**
 *
 * @param {HTMLTableElement} elementTable
 * @param {Number} fromIndex
 * @param {Number} toIndex
 */
function cloneInsertColumn(elementTable, fromIndex, toIndex) {
  /**
   * @type {NodeListOf<HTMLTableCellElement>}
   */
  const elementTr = elementTable.querySelectorAll('tr');

  const normalizedFrom = normalizeIndex(fromIndex, elementTr[0].cells.length);
  const normalizedTo = normalizeIndex(toIndex, elementTr[0].cells.length);

  elementTr.forEach((tr) => {
    const copy = tr.children[normalizedFrom].cloneNode(true);

    tr.children[normalizedTo - 1].after(copy);
  });
}

function normalizeIndex(index, max) {
  if (index > max) {
    return max;
  }

  let normalizedIndex = index;

  if (normalizedIndex < 0) {
    normalizedIndex += max;
  }

  if (normalizedIndex < 0) {
    normalizedIndex = 0;
  }

  return normalizedIndex;
}

const table = document.querySelector('table');

cloneInsertColumn(table, 1, -1);
