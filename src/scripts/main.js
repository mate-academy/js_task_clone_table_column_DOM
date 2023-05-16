'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const columnToCopy = 2;

  const rowsData = document.querySelectorAll('tr');

  for (const row of rowsData) {
    const copyCell = row.children[columnToCopy - 1];
    const columnToInsertNumber = row.children[row.children.length - 1];

    copyAndInsertCell(copyCell, columnToInsertNumber);
  }

  function copyAndInsertCell(cellToCopy, cellToInsertBefore) {
    const htmlToInsert = `<${cellToCopy.tagName.toLowerCase()}>`
        + `${cellToCopy.textContent}`
        + `</${cellToCopy.tagName.toLowerCase()}>`;

    cellToInsertBefore.insertAdjacentHTML('beforebegin', htmlToInsert);
  }
});
