'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');

rows.forEach(row => {
  const cells = row.querySelectorAll('td');
  const secondCell = cells[1];
  const cloneCell = secondCell.cloneNode(true);

  row.appendChild(cloneCell);
});

const theadRow = table.querySelector('thead tr');
const lastCell = theadRow.lastElementChild;
const cloneLastCell = lastCell.cloneNode(true);

theadRow.insertBefore(cloneLastCell, lastCell);
