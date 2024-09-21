'use strict';

const columnIndex = 1;

function copyColumn(section, index) {
  const rows = section.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.querySelectorAll('th, td');
    const targetCell = cells[index];
    const clonedCell = targetCell.cloneNode(true);

    row.insertBefore(clonedCell, cells[cells.length - 1]);
  });
}

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot');

copyColumn(thead, columnIndex);
copyColumn(tbody, columnIndex);
copyColumn(tfoot, columnIndex);
