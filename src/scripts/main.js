'use strict';

const tableEl = document.querySelector('table');
// console.dir(tableEl.tBodies[0].children);

function cloneTableColumn(table) {
  [...table.children].forEach(node => {
    [...node.rows].forEach(tr => {
      const cellCopy = tr.cells[1].cloneNode(true);

      tr.cells[tr.cells.length - 1].before(cellCopy);
    });
  });
}

cloneTableColumn(tableEl);
