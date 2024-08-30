'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');
const thead = document.querySelector('thead');
const theadRow = thead.firstElementChild;
const secondPositionTh = document.createElement('th');
const secondPositionThFoot = document.createElement('th');

secondPositionTh.textContent = 'Position';
secondPositionThFoot.textContent = 'Position';
theadRow.insertBefore(secondPositionTh, theadRow.lastChild.previousSibling);

const tfoot = document.querySelector('tfoot');
const tfootRow = tfoot.firstElementChild;

tfootRow.insertBefore(secondPositionThFoot, tfootRow.lastChild.previousSibling);

rows.forEach((row) => {
  const positionCell = row.querySelector('td:nth-child(2)');
  const newPositionCell = positionCell.cloneNode(true);

  row.insertBefore(newPositionCell, row.lastChild.previousSibling);
});
