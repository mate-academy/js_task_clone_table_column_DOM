'use strict';

function cloneSecondColumn() {
  const table = document.querySelector('table');
  const headerRow = table.querySelector('thead tr');
  const footerRow = table.querySelector('tfoot tr');
  const bodyRows = table.querySelectorAll('tbody tr');

  const secondColumnHeader = headerRow.children[1].cloneNode(true);

  headerRow.insertBefore(secondColumnHeader, headerRow.children[4]);

  const secondColumnFooter = footerRow.children[1].cloneNode(true);

  footerRow.insertBefore(secondColumnFooter, footerRow.children[4]);

  bodyRows.forEach((row) => {
    const secondColumnCell = row.children[1].cloneNode(true);

    row.insertBefore(secondColumnCell, row.children[4]);
  });
}

cloneSecondColumn();
