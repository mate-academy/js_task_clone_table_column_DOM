'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const tr = thead.querySelector('tr');
const tfoot = table.querySelector('tfoot');
const trF = tfoot.querySelector('tr');

const footers = tfoot.querySelector('tr').children;
const newThFooter = footers[1].cloneNode(true);

trF.insertBefore(newThFooter, footers[4]);

const headers = thead.querySelector('tr').children;
const newTh = headers[1].cloneNode(true);

tr.insertBefore(newTh, headers[4]);

const rows = tbody.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.children; //
  const positionCell = cells[1].cloneNode(true);

  row.insertBefore(positionCell, cells[4]);
});
