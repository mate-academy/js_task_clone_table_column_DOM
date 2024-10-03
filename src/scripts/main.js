'use strict';

function copyPasteTableColumns(copyColumnIndex, pasteColumnIndex) {
  const rows = document.querySelectorAll('table tr');

  rows.forEach((row) => {
    const cells = row.querySelectorAll('td, th');
    const newCell = document.createElement(cells[copyColumnIndex].tagName);

    newCell.textContent = cells[copyColumnIndex].textContent;

    row.insertBefore(newCell, cells[pasteColumnIndex]);
  });
}

copyPasteTableColumns(1, 4);
