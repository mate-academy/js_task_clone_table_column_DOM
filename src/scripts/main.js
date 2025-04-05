'use strict';

const table = document.querySelector('table');
const title = table.tHead.rows[0].cells[1].textContent;
const rowLength = table.tHead.rows[0].cells.length;

const positions = [...document.querySelector('tbody').rows].map((row) => {
  return row.cells[1].textContent;
});

function addTitleCell(columnName) {
  return `<th>${columnName}</th>`;
}

table.tHead.rows[0].insertCell(rowLength - 1).outerHTML = addTitleCell(title);
table.tFoot.rows[0].insertCell(rowLength - 1).outerHTML = addTitleCell(title);

function addPositionCell(value) {
  return `<th>${value}</th>`;
}

[...table.tBodies[0].rows].forEach((row, i) => {
  row.insertCell(rowLength - 1).innerHTML = addPositionCell(positions[i]);
});
