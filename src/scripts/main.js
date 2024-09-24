'use strict';

const table = document.querySelector('table');

function cloneColumn() {
  const headerRow = table.tHead.rows[0];

  const cloneColumnPosition = headerRow.cells[1].cloneNode(true);

  headerRow.insertBefore(
    cloneColumnPosition,
    headerRow.cells[headerRow.cells.length - 1],
  );

  const contentRows = table.tBodies[0].rows;

  for (const row of contentRows) {
    const cloneCell = row.cells[1].cloneNode(true);

    row.insertBefore(cloneCell, row.cells[row.cells.length - 1]);
  }
}

const footerRow = table.tFoot?.rows[0];

if (footerRow) {
  const cloneFooterCell = footerRow.cells[1].cloneNode(true);

  footerRow.insertBefore(
    cloneFooterCell,
    footerRow.cells[footerRow.cells.length - 1],
  );
}

cloneColumn();
