'use strict';

const table = document.getElementsByTagName('table')[0];

const tableHeader = table.querySelector('thead tr');
const tableHeaderPosition = tableHeader.cells[1].cloneNode(true);

tableHeader.insertBefore(tableHeaderPosition, tableHeader.cells[4]);

const tableFoot = table.querySelector('tfoot tr');
const tableFootPosition = tableHeader.cells[1].cloneNode(true);

tableFoot.insertBefore(tableFootPosition, tableFoot.cells[4]);

const tableBody = table.querySelectorAll('tbody tr');

tableBody.forEach((row) => {
  const cell = row.cells[1].cloneNode(true);

  row.insertBefore(cell, row.cells[4]);
});

// console.log(table[0]);
