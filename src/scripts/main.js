'use strict';

const table = document.querySelector('table');
const cells = [...table.rows];

cells.forEach(cell => {
  const clonedColumn = cell.children[1].cloneNode(true);
  const positionToPlace = cell.children[3];

  return positionToPlace.after(clonedColumn);
});
