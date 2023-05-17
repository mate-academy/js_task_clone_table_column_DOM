'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const columnToCopy = 2;

  const rowsData = document.querySelectorAll('tr');

  for (const row of rowsData) {
    const copyCell
      = row.children[columnToCopy - 1].cloneNode(true);
    const columnToInsert
      = row.children[row.children.length - 1];

    columnToInsert.parentNode.insertBefore(copyCell, columnToInsert);
  }
});
