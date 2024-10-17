'use strict';

function cloneColumn(tableElement, columnIndex) {
  const headRows = tableElement.querySelectorAll('thead tr');
  const bodyRows = tableElement.querySelectorAll('tbody tr');
  const footRows = tableElement.querySelectorAll('tfoot tr');

  function insertClonedCell(rows) {
    rows.forEach((row) => {
      const cells = row.children;
      const clonedCell = cells[columnIndex].cloneNode(true);

      row.insertBefore(clonedCell, cells[cells.length - 1]);
    });
  }

  insertClonedCell(headRows);
  insertClonedCell(bodyRows);
  insertClonedCell(footRows);
}

const employeeTable = document.querySelector('table');

cloneColumn(employeeTable, 1);
