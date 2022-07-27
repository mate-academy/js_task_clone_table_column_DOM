'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const tFoot = document.querySelector('tfoot');

function getRightColumn(section) {
  const rowLength = section.rows.length;
  const columnsLength = section.rows[0].cells.length;

  for (let i = 0; i < rowLength; i++) {
    const columnToCopy = section.rows[i].cells[1];
    const clone = columnToCopy.cloneNode(true);
    const lastColumn = section.rows[i].cells[columnsLength - 1];

    lastColumn.insertAdjacentElement('beforebegin', clone);
  }
}

getRightColumn(tHead);
getRightColumn(tBody);
getRightColumn(tFoot);
