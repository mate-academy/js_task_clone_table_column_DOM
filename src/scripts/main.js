'use strict';

const rows = document.querySelectorAll('table tr');

rows.forEach((row) => {
  const cells = row.children;

  if (cells.lenght < 2) {
    return;
  } // check: had "Position" or not

  const positionCell = cells[1]; // second column - 'Position'
  const cloned = positionCell.cloneNode(true); // clone her

  row.insertBefore(cloned, cells[cells.length - 1]); // paste before salary
});
