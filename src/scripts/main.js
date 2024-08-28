'use strict';

// write your code here
const table = document.querySelector('table');

const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const tfoot = table.querySelector('tfoot');

const ths = thead.querySelectorAll('th');
const secondColumnHeader = ths[1].cloneNode(true);

thead.querySelector('tr').insertBefore(secondColumnHeader, ths[ths.length - 1]);

const rows = tbody.querySelectorAll('tr');

rows.forEach((row) => {
  const tds = row.querySelectorAll('td');
  const secondColumnCell = tds[1].cloneNode(true);

  row.insertBefore(secondColumnCell, tds[tds.length - 1]);
});

const footers = tfoot.querySelectorAll('th');
const secondColumnFooter = footers[1].cloneNode(true);

tfoot
  .querySelector('tr')
  .insertBefore(secondColumnFooter, footers[footers.length - 1]);
