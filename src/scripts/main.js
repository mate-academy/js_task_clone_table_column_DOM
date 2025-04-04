'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const tfoot = table.querySelector('tfoot');
const thead = table.querySelector('thead');

const secondColumn = Array.from(tbody.rows).map((row) => row.cells[1]);

const newColumnHeader = document.createElement('th');

newColumnHeader.textContent = 'Position';

thead.rows[0].insertBefore(newColumnHeader, thead.rows[0].lastElementChild);

[...tbody.rows].forEach((row, index) => {
  const newCell = document.createElement('td');

  newCell.textContent = secondColumn[index].textContent;
  row.insertBefore(newCell, row.lastElementChild);
});

tfoot.rows[0].insertBefore(
  newColumnHeader.cloneNode(true),
  tfoot.rows[0].lastElementChild,
);
