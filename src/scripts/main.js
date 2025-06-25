'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const row = table.rows[i];
  const rowCells = row.cells;
  const td = document.createElement(rowCells[1].tagName);
  const lastEl = rowCells[rowCells.length - 1];

  lastEl.className = 'lastEl';
  td.textContent = rowCells[1].innerHTML;
  row.querySelector('.lastEl').insertAdjacentElement('beforebegin', td);
  lastEl.removeAttribute('class');
}
