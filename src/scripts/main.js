'use strict';

const copyColumn = (table, sourceColumnIndex, targetColumnIndex) => {
  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    const sourceCell = rows[i].cells[sourceColumnIndex];
    const newCell = sourceCell.cloneNode(true);

    rows[i].insertBefore(newCell, rows[i].cells[targetColumnIndex]);
  }
};

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot');

copyColumn(thead, 1, 4);
copyColumn(tbody, 1, 4);
copyColumn(tfoot, 1, 4);
