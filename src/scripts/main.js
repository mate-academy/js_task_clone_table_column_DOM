'use strict';

const pageTable = document.querySelector('table');

function cloneTableColumn(table, columnIndex, insertingIndex = 0) {
  const tableHeadRow = table.querySelector('thead tr');
  const tableHeadColumn = tableHeadRow.cells[columnIndex];
  const clonedTableHeadColumn = tableHeadColumn.cloneNode(true);

  const tableFooterRow = table.querySelector('tfoot tr');
  const tableFooterColumn = tableFooterRow.cells[columnIndex];
  const clonedTableFooterColumn = tableFooterColumn.cloneNode(true);

  tableHeadRow.insertBefore(
    clonedTableHeadColumn,
    tableHeadRow.children[insertingIndex],
  );

  tableFooterRow.insertBefore(
    clonedTableFooterColumn,
    tableFooterRow.children[insertingIndex],
  );

  const tableBody = table.querySelector('tbody');
  const tableBodyRows = tableBody.querySelectorAll('tr');

  for (const tableBodyRow of tableBodyRows) {
    const tableBodyColumn = tableBodyRow.cells[columnIndex];
    const clonedTableBodyColumn = tableBodyColumn.cloneNode(true);

    tableBodyRow.insertBefore(
      clonedTableBodyColumn,
      tableBodyRow.children[insertingIndex],
    );
  }
}

cloneTableColumn(pageTable, 1, 4);
