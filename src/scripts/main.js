'use strict';


function cloneTableColumn(tableElement, sourceIndex) {
  for (const element of tableElement.children) {
    for (const row of element.rows) {
      const sourceCell = row.cells[sourceIndex];

      if (!sourceCell) {
        continue;
      }

      const insertBeforeIndex = row.cells.length - 1;

      row.cells[insertBeforeIndex].before(sourceCell.cloneNode(true));
    }
  }
}

const table = document.querySelector('table');

cloneTableColumn(table, 1);
