'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const tfoot = table.querySelector('tfoot');
const thElements = document.querySelectorAll('table thead th');
const positionTh = thElements[1];
const tfootThElements = document.querySelectorAll('table tfoot th');
const tfootTh = tfootThElements[1];

const newTh = document.createElement('th');

newTh.textContent = positionTh.textContent;
thead.rows[0].insertBefore(newTh, thead.rows[0].lastElementChild);

for (const row of tbody.rows) {
  const newTd = document.createElement('td');

  newTd.textContent = row.cells[1].textContent;
  row.insertBefore(newTd, row.lastElementChild);
}

const newTfootTh = document.createElement('th');

newTfootTh.textContent = tfootTh.textContent;
tfoot.rows[0].insertBefore(newTfootTh, tfoot.rows[0].lastElementChild);
