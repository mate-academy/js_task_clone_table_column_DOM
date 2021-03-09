'use strict';

const table = document.querySelector('table');
const rows = [...table.rows];
const cloneTarget = 1;
const clonedDestination = 3;

rows.forEach(row => {
  const clonedColumn = row.children[cloneTarget].cloneNode(true);
  const positionToPlace = row.children[clonedDestination];

  return positionToPlace.after(clonedColumn);
});
