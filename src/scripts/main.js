'use strict';

const copyColumn = (tab, columnIndex, insertIndex, rowIndex = 0) => {
  const rows = tab.querySelectorAll('tr');

  if (rowIndex >= rows.length) {
    return null;
  } else {
    const row = rows[rowIndex];
    const newCell = row.children[columnIndex].cloneNode(true);

    if (insertIndex >= row.children.length) {
      row.appendChild(newCell);
    } else {
      row.insertBefore(newCell, row.children[insertIndex]);
    }

    copyColumn(tab, columnIndex, insertIndex, rowIndex + 1);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  copyColumn(document.querySelector('table'), 1, 4);
});
