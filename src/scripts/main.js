'use strict';

function copyTabCol() {
  const table = document.querySelector('table');
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const cellToCopy = row.querySelector(':nth-child(2)');

    const copiedCell = document.createElement(cellToCopy.tagName);

    copiedCell.textContent = cellToCopy.textContent;

    const cellToPaste = row.lastElementChild;

    cellToPaste.before(copiedCell);
  });
}

copyTabCol();
