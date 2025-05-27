'use strict';

const table = document.querySelector('table');

const headerFooterRows = table.querySelectorAll('thead tr, tfoot tr');

headerFooterRows.forEach((row) => {
  const th = document.createElement('th');

  th.textContent = 'Position';

  const referenceNode = row.children[4] || null;

  row.insertBefore(th, referenceNode);
});

const rows = table.querySelectorAll('tbody tr');

rows.forEach((row) => {
  const position = row.cells[1].textContent;

  const td = document.createElement('td');

  td.textContent = position;

  const referenceNode = row.children[4] || null;

  row.insertBefore(td, referenceNode);
});
