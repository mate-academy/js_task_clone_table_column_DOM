'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];
  const section = row.parentElement.tagName.toLowerCase();

  let newCell;

  switch (section) {
    case 'thead':
    case 'tfoot':
      newCell = document.createElement('th');
      break;
    default:
      newCell = document.createElement('td');
      break;
  }

  newCell.textContent = row.cells[1].textContent;
  row.insertBefore(newCell, row.lastElementChild);
}
