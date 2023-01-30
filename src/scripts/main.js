'use strict';

const table = document.querySelector('table');
const tableRows = table.rows;

for (const row of tableRows) {
  const columnPosition = row.cells[1];

  const columnPositionCopy = columnPosition.cloneNode(true);

  const columnSalary = row.cells[4];

  columnSalary.remove();

  row.append(columnPositionCopy);

  row.append(columnSalary);
}
