'use strict';

const table = document.querySelector('table');
const rows = [...table.rows];

rows.forEach(row => {
  const clonedColumn = row.children[1].cloneNode(true);
  const positionToPlace = row.children[3];

  return positionToPlace.after(clonedColumn);
});
