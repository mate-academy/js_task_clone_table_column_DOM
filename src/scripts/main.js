'use strict';

const rows = document.querySelectorAll('table tr');

const colHead = document.querySelectorAll('thead th');

const colFooter = document.querySelectorAll('tfoot th');

const rowBody = document.querySelectorAll('tbody tr');

const secondColumn = [];

rows.forEach((row) => {
  const cells = row.querySelectorAll('td, th');

  secondColumn.push(cells[1]);
});

colHead[colHead.length - 1].insertAdjacentHTML(
  'beforebegin',
  `<th>${secondColumn[0].textContent}</th>`,
);

colFooter[colFooter.length - 1].insertAdjacentHTML(
  'beforebegin',
  `<th>${secondColumn[secondColumn.length - 1].textContent}</th>`,
);

rowBody.forEach((row) => {
  const newCell = document.createElement('td');

  newCell.textContent = row.cells[1].textContent;

  row.cells[row.cells.length - 1].insertAdjacentElement('beforebegin', newCell);
});
