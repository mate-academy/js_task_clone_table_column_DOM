'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tbody tr');
const headers = table.querySelectorAll('thead th');
const footers = table.querySelectorAll('tfoot th');
const newHeaderElement = document.createElement('th');
const newFooterElement = document.createElement('th');

newHeaderElement.textContent = headers[1].textContent;
newFooterElement.textContent = footers[1].textContent;

headers[3].insertAdjacentElement('afterend', newHeaderElement);
footers[3].insertAdjacentElement('afterend', newFooterElement);

rows.forEach((row) => {
  const cells = row.querySelectorAll('td');
  const secondCellContent = cells[1].innerHTML;
  const newCell = document.createElement('td');

  newCell.innerHTML = secondCellContent;
  row.insertBefore(newCell, cells[cells.length - 1]);
});
