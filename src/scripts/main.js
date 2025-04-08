'use strict';

function moveRow(row, indexFrom, indexTo) {
  let correctIndexTo = indexTo;

  if (correctIndexTo < 0) {
    correctIndexTo = row.cells.length + indexTo;
  }

  const copiedElement = row.cells[indexFrom].cloneNode(true);
  const pasteTo = row.cells[correctIndexTo];

  if (pasteTo) {
    pasteTo.before(copiedElement);
  } else {
    row.cells[row.cells.length - 1].after(copiedElement);
  }
}

function copyColumn(indexFrom, indexTo) {
  const tableElement = document.querySelector('table');

  for (const row of tableElement.rows) {
    moveRow(row, indexFrom, indexTo);
  }
}

// The first argument is the index of the element to copy,
// and the second is the index before which to paste this element.
// If the paste index is invalid,
// the element will be placed after all other elements.
copyColumn(1, -1);
