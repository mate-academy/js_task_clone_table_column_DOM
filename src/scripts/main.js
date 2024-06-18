'use strict';

function cloneAndAppendColumn() {
  const table = document.querySelector('table');
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');
  const tfoot = table.querySelector('tfoot');

  const headerCells = thead.querySelectorAll('th');
  const clonedHeaderCell = headerCells[1].cloneNode(true);

  thead
    .querySelector('tr')
    .insertBefore(clonedHeaderCell, headerCells[headerCells.length - 1]);

  const bodyRows = tbody.querySelectorAll('tr');

  bodyRows.forEach((row) => {
    const cells = row.querySelectorAll('td');
    const clonedCell = cells[1].cloneNode(true);

    row.insertBefore(clonedCell, cells[cells.length - 1]);
  });

  const footerCells = tfoot.querySelectorAll('th');
  const clonedFooterCell = footerCells[1].cloneNode(true);

  tfoot
    .querySelector('tr')
    .insertBefore(clonedFooterCell, footerCells[footerCells.length - 1]);
}

cloneAndAppendColumn();
