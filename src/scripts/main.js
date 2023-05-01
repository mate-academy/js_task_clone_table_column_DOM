'use strict';

const columnNum = 2;

const table = document.querySelector('table');
const tableChildren = [ ...table.children ];

function copyAndPasteTable(column, tableChild) {
  const rowCollection = [ ...tableChild.rows ];

  rowCollection.forEach(row => {
    const rowChildren = [ ...row.children ];

    for (let i = 0; i < rowChildren.length; i++) {
      if (i === column - 1) {
        const cellClone = rowChildren[i].cloneNode(true);

        rowChildren[rowChildren.length - 1].before(cellClone);
      }
    }
  });
}

tableChildren.forEach(child => {
  copyAndPasteTable(columnNum, child);
});
