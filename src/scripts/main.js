'use strict';

const table = document.querySelector('table');
const arrRow = table.rows;

for (let i = 0; i < arrRow.length; i++) {
  const cellPosition = arrRow[i].cells[1];
  const cellSalary = arrRow[i].cells[4];
  const cloneCellPosition = cellPosition.cloneNode(true);
  const cloneCellSalary = cellSalary.cloneNode(true);

  cellSalary.remove();
  arrRow[i].append(cloneCellPosition);
  arrRow[i].append(cloneCellSalary);
}
