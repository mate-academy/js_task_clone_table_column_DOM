'use strict';

const table = document.querySelector('table');

const rows = table.querySelectorAll('tbody tr');

rows.forEach(row => {
  const secondCell = row.cells[1].cloneNode(true);

  row.insertBefore(secondCell, row.cells[row.cells.length - 1]);
});

const headerRow = table.querySelector('thead tr');
const footerRow = table.querySelector('tfoot tr');

const headerCell = headerRow.cells[1].cloneNode(true);
const footerCell = footerRow.cells[1].cloneNode(true);

headerRow.insertBefore(headerCell, headerRow.cells[headerRow.cells.length - 1]);

footerRow.insertBefore(footerCell, footerRow.cells[footerRow.cells.length - 1]);
