'use strict';

const tableRows = [...document.querySelector('table').rows];
const columnIndexCopy = 1;
const columnIndexPaste = 4;

tableRows.forEach((row) => {
  if (
    row.cells.length <= columnIndexCopy ||
    row.cells.length < columnIndexPaste
  ) {
    throw new Error('Table does not have enough cells');
  }

  const copyText = row.cells[columnIndexCopy].textContent;
  const newCell = row.insertCell(columnIndexPaste);

  newCell.textContent = copyText;
});
