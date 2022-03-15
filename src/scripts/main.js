'use strict';

const table = document.querySelector('table');
const tHeadCell = document.createElement('th');
const tFootCell = document.createElement('th');
const countCells = table.rows[0].cells.length;

table.tHead.children[0].appendChild(tHeadCell);
table.tFoot.children[0].appendChild(tFootCell);

const rows = table.rows;

for (let i = 1; i < rows.length - 1; i++) {
  rows[i].insertCell(countCells);
}

for (let i = 0; i < rows.length; i++) {
  rows[i].children[countCells].innerText
    = rows[i].children[countCells - 1].innerText;

  rows[i].children[countCells - 1].innerText = rows[i].children[1].innerText;
}
