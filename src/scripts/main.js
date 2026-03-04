/* eslint-disable max-len */

'use strict';

function createCell(tag, text) {
  const cell = document.createElement(tag);

  cell.textContent = text;

  return cell;
}

function doubleUpColumn(columnIndex, pasteIndex) {
  const header = document.querySelector('thead tr');
  const footer = document.querySelector('tfoot tr');
  const body = document.querySelectorAll('tbody tr');

  const columnName = header.children[columnIndex].textContent;

  header.insertBefore(
    createCell('th', columnName),
    header.children[pasteIndex],
  );

  footer.insertBefore(
    createCell('th', columnName),
    footer.children[pasteIndex],
  );

  body.forEach((row) => {
    const cellContent = row.children[columnIndex].textContent;

    row.insertBefore(createCell('td', cellContent), row.children[pasteIndex]);
  });
}

doubleUpColumn(1, 4);
