'use strict';

const table = document.querySelector('table');
const body = table.querySelector('tbody');
const rows = body.querySelectorAll('tr');

rows.forEach((row) => {
  const cell = row.querySelectorAll('td');
  const clonnedCell = cell[1].cloneNode(true);

  row.insertBefore(clonnedCell, cell[cell.length - 1]);
});

const headerRow = table.querySelector('thead tr');
const headers = headerRow.querySelectorAll('th');
const clonnedHeader = headers[1].cloneNode(true);

headerRow.insertBefore(clonnedHeader, headers[headers.length - 1]);

const footerRow = table.querySelector('tfoot tr');
const footers = footerRow.querySelectorAll('th');
const clonnedFooter = footers[1].cloneNode(true);

footerRow.insertBefore(clonnedFooter, footers[footers.length - 1]);
