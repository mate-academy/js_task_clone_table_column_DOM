'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const thead = table.querySelector('thead');
const tfoot = table.querySelector('tfoot');

function cloneAndInsertColumn(indexToClone, insertBeforeIndex) {
  // Клонування заголовка
  const headerRow = thead.querySelector('tr');
  const clonedHeaderCell = headerRow.children[indexToClone].cloneNode(true);

  headerRow.insertBefore(
    clonedHeaderCell,
    headerRow.children[insertBeforeIndex],
  );

  const bodyRows = tbody.querySelectorAll('tr');

  bodyRows.forEach((row) => {
    const clonedCell = row.children[indexToClone].cloneNode(true);

    row.insertBefore(clonedCell, row.children[insertBeforeIndex]);
  });

  const footerRow = tfoot.querySelector('tr');

  if (footerRow) {
    const clonedFooterCell = footerRow.children[indexToClone].cloneNode(true);

    footerRow.insertBefore(
      clonedFooterCell,
      footerRow.children[insertBeforeIndex],
    );
  }
}

cloneAndInsertColumn(1, table.rows[0].cells.length - 1);
