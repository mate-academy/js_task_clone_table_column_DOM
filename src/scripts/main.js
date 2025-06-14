'use strict';

const thead = document.querySelector('thead tr');
const tfoot = document.querySelector('tfoot tr');
const table = document.querySelector('table');
const rows = table.querySelectorAll('tbody tr');

const newThHead = document.createElement('th');
const newThFoot = document.createElement('th');

newThHead.textContent = 'Position';
newThFoot.textContent = 'Position';

thead.insertBefore(newThHead, thead.lastElementChild);
tfoot.insertBefore(newThFoot, tfoot.lastElementChild);

rows.forEach((row) => {
  const cells = row.querySelectorAll('td');
  const secondCell = cells[1];
  const newCell = document.createElement('td');

  newCell.textContent = secondCell.textContent;

  row.insertBefore(newCell, row.lastElementChild);
});
