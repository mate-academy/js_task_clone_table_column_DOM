'use strict';

const table = document.querySelector('table');
const trHeading = table.querySelector('thead th:nth-child(2)').cloneNode(true);
const trFooter = table.querySelector('tfoot th:nth-child(2)').cloneNode(true);
const rows = table.querySelectorAll('tbody tr');

table.querySelector('thead tr').insertBefore(trHeading, table.querySelector('thead th:last-child'));
table.querySelector('tfoot tr').insertBefore(trFooter, table.querySelector('tfoot th:last-child'));

rows.forEach(row => {
  const secondCol = row.cells[1].cloneNode(true);
  const lastCol = row.cells[row.cells.length - 1];

  row.insertBefore(secondCol.cloneNode(true), lastCol);
});
