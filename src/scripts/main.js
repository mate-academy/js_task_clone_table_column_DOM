'use strict';

const table = document.querySelector('table');
const tableHead = table.querySelector('thead');
const tableBody = table.querySelector('tbody');
const tableFoot = table.querySelector('tfoot');

const rowsTableHead = tableHead.querySelector('tr').querySelectorAll('th');
const rowsTableBody = tableBody.querySelectorAll('tr');
const rowsTableFoot = tableFoot.querySelector('tr').querySelectorAll('th');

const clonedHeader = rowsTableHead[1].cloneNode(true);

tableHead
  .querySelector('tr')
  .insertBefore(clonedHeader, rowsTableHead[rowsTableHead.length - 1]);

rowsTableBody.forEach((row) => {
  const cellToClone = row.querySelectorAll('td')[1].cloneNode(true);

  row.insertBefore(
    cellToClone,
    row.querySelectorAll('td')[row.querySelectorAll('td').length - 1],
  );
});

const clonedFooter = rowsTableFoot[1].cloneNode(true);

tableFoot
  .querySelector('tr')
  .insertBefore(clonedFooter, rowsTableFoot[rowsTableFoot.length - 1]);
