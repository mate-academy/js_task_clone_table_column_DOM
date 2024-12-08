'use strict';

const table = document.querySelector('table');
const rows = [...table.querySelectorAll('tr')];

for (const row of rows) {
  const newFootTh = document.createElement('th');
  const tfoot = document.querySelector('tfoot');
  const newTh = document.createElement('th');
  const thead = document.querySelector('thead');
  const newTd = document.createElement('td');
  const secondCell = row.cells[1];
  const lastCell = row.lastElementChild;

  if (row.parentElement === thead) {
    newTh.textContent = table.rows[0].cells[1].textContent;

    row.insertBefore(newTh, lastCell);

    continue;
  }

  if (row.parentElement === tfoot) {
    newFootTh.textContent = table.rows[rows.length - 1].cells[1].textContent;

    row.insertBefore(newFootTh, lastCell);

    continue;
  }

  if (secondCell) {
    newTd.textContent = secondCell.textContent;
  } else {
    newTd.textContent = '';
  }
  row.insertBefore(newTd, lastCell);
}
