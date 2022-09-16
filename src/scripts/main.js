'use strict';

const table = document.querySelector('table');

let copiedCell;

for (let i = 0; i < table.rows.length; i++) {
  if (table.rows[i].cells[0].tagName === 'TH') {
    copiedCell = document.createElement('th');
  } else {
    copiedCell = document.createElement('td');
  }

  copiedCell.textContent = `${table.rows[i].cells[1].textContent}`;
  table.rows[i].insertBefore(copiedCell, table.rows[i].children[4]);
}
