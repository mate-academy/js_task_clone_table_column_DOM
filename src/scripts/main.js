'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const tHead = table.querySelector('thead');
const tFoot = table.querySelector('tfoot');

const positionHeader = tHead.querySelector('th:nth-child(2)');
const salaryHeader = tHead.querySelector('th:nth-child(5)');
const positionFooter = tFoot.querySelector('th:nth-child(2)');
const salaryFooter = tFoot.querySelector('th:nth-child(5)');

const positionColumnCells = Array.from(tbody.querySelectorAll('tr')).map(
  (row) => row.cells[1],
);

const newHeaderCell = document.createElement('th');
const newFooterCell = document.createElement('th');

newHeaderCell.textContent = positionHeader.textContent;
tHead.querySelector('tr').insertBefore(newHeaderCell, salaryHeader);

newFooterCell.textContent = positionFooter.textContent;
tFoot.querySelector('tr').insertBefore(newFooterCell, salaryFooter);

Array.from(tbody.querySelectorAll('tr')).forEach((row, index) => {
  const newCell = document.createElement('td');

  newCell.textContent = positionColumnCells[index].textContent;
  row.insertBefore(newCell, row.cells[4]);
});
