'use strict';

const rows = document.querySelectorAll('table tbody tr');

const positionColumn = Array.from(rows).map((row) => {
  const cells = row.querySelectorAll('td');

  return cells[1].textContent;
});

rows.forEach((row, i) => {
  const cells = row.querySelectorAll('td');
  const newTd = document.createElement('td');

  newTd.textContent = positionColumn[i];
  cells[3].after(newTd);
});

const headerRow = document.querySelector('table thead tr');

if (headerRow) {
  const ths = headerRow.querySelectorAll('th');
  const newTh = document.createElement('th');

  newTh.textContent = 'Position';
  ths[3].after(newTh);
}

const footerRow = document.querySelector('table tfoot tr');

if (footerRow) {
  const ths = footerRow.querySelectorAll('th');
  const newTh = document.createElement('th');

  newTh.textContent = 'Position';
  ths[3].after(newTh);
}
