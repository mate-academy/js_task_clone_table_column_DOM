'use strict';

const table = document.querySelector('table');

if (table) {
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');
  const tfoot = table.querySelector('tfoot');

  if (thead && tbody) {
    cloneAndAppendSecondColumn(thead, tbody, tfoot);
  }
}

function cloneAndAppendSecondColumn(thead, tbody, tfoot) {
  const headerCells = thead.querySelectorAll('th');

  if (headerCells.length >= 2) {
    const secondHeader = headerCells[1];
    const clonedHeader = secondHeader.cloneNode(true);
    const lastHeader = headerCells[headerCells.length - 1];

    lastHeader.before(clonedHeader);
  }

  tbody.querySelectorAll('tr').forEach((row) => {
    const cells = row.children;

    if (cells.length >= 2) {
      const secondCell = cells[1];
      const clonedCell = secondCell.cloneNode(true);
      const lastCell = cells[cells.length - 1];

      lastCell.before(clonedCell);
    }
  });

  if (tfoot) {
    const footerCells = tfoot.querySelectorAll('th');

    if (footerCells.length >= 2) {
      const secondFooter = footerCells[1];
      const clonedFooter = secondFooter.cloneNode(true);
      const lastFooter = footerCells[footerCells.length - 1];

      lastFooter.before(clonedFooter);
    }
  }
}
