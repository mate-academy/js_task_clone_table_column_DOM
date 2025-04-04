'use strict';

const table = document.querySelector('table');
const headerRow = table.querySelector('thead tr');

const newHeaderCell = document.createElement('th');

newHeaderCell.textContent = headerRow.cells[1].textContent;

headerRow.insertBefore(newHeaderCell, headerRow.cells[4]);

const rows = table.querySelectorAll('tbody tr');

rows.forEach((element) => {
  const newCell = document.createElement('td');

  newCell.textContent = element.cells[1].textContent;
  element.insertBefore(newCell, element.cells[4]);
});

const footerRow = document.querySelector('tfoot tr');

const newFoooterCell = document.createElement('th');

newFoooterCell.textContent = newHeaderCell.textContent;

footerRow.insertBefore(newFoooterCell, footerRow.cells[4]);
