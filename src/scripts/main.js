'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');
  const tfoot = table.querySelector('tfoot');

  function cloneAndInsertColumn(indexToClone) {
    // Handle thead (table header)
    const headerRow = thead.querySelector('tr');
    const clonedHeaderCell = headerRow.children[indexToClone].cloneNode(true);

    headerRow.insertBefore(clonedHeaderCell, headerRow.lastElementChild);

    // Handle tbody (table body)
    const rows = tbody.querySelectorAll('tr');

    rows.forEach((row) => {
      const cellToClone = row.children[indexToClone];
      const clonedCell = cellToClone.cloneNode(true);

      row.insertBefore(clonedCell, row.lastElementChild);
    });

    // Handle tfoot (table footer)
    const footerRow = tfoot.querySelector('tr');
    const clonedFooterCell = footerRow.children[indexToClone].cloneNode(true);

    footerRow.insertBefore(clonedFooterCell, footerRow.lastElementChild);
  }

  cloneAndInsertColumn(1);
});
