'use strict';

const table = document.querySelector('table');
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const firstRow = thead.rows[0];

const newTh = table.appendChild(document.createElement('th'));

newTh.textContent = 'Position';
firstRow.insertBefore(newTh, firstRow.cells[4]);

const rows = tbody.rows;

for (const row of rows) {
  const newTd = document.createElement('td');

  newTd.textContent = row.cells[1].textContent;
  row.insertBefore(newTd, row.cells[4]);
}

// write your code here
