'use strict';

const thead = document.querySelector('thead tr');
const tfoot = document.querySelector('tfoot tr');
const table = document.querySelector('table');
const rows = table.querySelectorAll('tbody tr');
const sourceHeadTh = thead.querySelectorAll('th')[1];
const sourceFootTh = tfoot.querySelectorAll('th')[1];

const newThHead = document.createElement('th');

newThHead.textContent = sourceHeadTh.textContent;

const newThFoot = document.createElement('th');

newThFoot.textContent = sourceFootTh.textContent;
thead.insertBefore(newThHead, thead.lastElementChild);
tfoot.insertBefore(newThFoot, tfoot.lastElementChild);

rows.forEach((row) => {
  const cells = row.querySelectorAll('td');
  const secondCell = cells[1];
  const newCell = document.createElement('td');

  newCell.textContent = secondCell.textContent;
  row.insertBefore(newCell, row.lastElementChild);
});
