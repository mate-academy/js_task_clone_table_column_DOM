'use strict';

const tbodyRows = document.querySelectorAll('table tbody tr');
const thead = document.querySelector('table thead tr');
const theadPosition = document.querySelectorAll('table thead th')[1];
const theadSalary = document.querySelectorAll('table thead th')[4];
const theadPositionCopy = theadPosition.cloneNode(true);
const tfoot = document.querySelector('table tfoot tr');
const tfootPosition = document.querySelectorAll('table tfoot th')[1];
const tfootSalary = document.querySelectorAll('table tfoot th')[4];
const tfootPositionCopy = tfootPosition.cloneNode(true);

thead.insertBefore(theadPositionCopy, theadSalary);
tfoot.insertBefore(tfootPositionCopy, tfootSalary);

for (const row of tbodyRows) {
  const rowCells = row.querySelectorAll('td');
  const tdPosition = rowCells[1];
  const tdSalary = rowCells[4];
  const tdPositionCopy = tdPosition.cloneNode(true);

  row.insertBefore(tdPositionCopy, tdSalary);
}
