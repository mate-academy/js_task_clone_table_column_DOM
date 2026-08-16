'use strict';

function copyPastTableColumn(domElement, positionFromColumn, positionToColumn) {
  const LENGTH_TBODY = domElement.rows.length;

  const LENGTH_ROW = domElement.rows[0].cells.length;

  for (let i = 0; i < LENGTH_TBODY; i++) {
    const cell = domElement.rows[i].cells[positionFromColumn].cloneNode(true);

    domElement.rows[i].cells[LENGTH_ROW - positionToColumn].before(cell);
  }
}

const thead = document.querySelector('thead');

const tbody = document.querySelector('tbody');

const tfoot = document.querySelector('tfoot');

copyPastTableColumn(thead, 1, 1);
copyPastTableColumn(tbody, 1, 1);
copyPastTableColumn(tfoot, 1, 1);

// console.log(LENGTH_TBODY_ELEMENTS);
