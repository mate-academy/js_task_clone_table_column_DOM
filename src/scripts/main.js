'use strict';

const table = document.querySelector('table');
const values = [];

for (const row of table.tBodies[0].rows) {
  const value = row.cells[1].textContent;

  values.push(value);
}

const headerCell = document.createElement('th');

headerCell.textContent = table.tHead.rows[0].cells[1].textContent;

table.tHead.rows[0].insertBefore(
  headerCell,
  table.tHead.rows[0].cells[table.tHead.rows[0].cells.length - 1],
);

for (const row of table.tBodies[0].rows) {
  const newCell = document.createElement('td');

  newCell.textContent = values[row.sectionRowIndex];
  row.insertBefore(newCell, row.cells[row.cells.length - 1]);
}
