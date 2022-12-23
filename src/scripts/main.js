'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const thHead = document.createElement('th');
const thFoot = document.createElement('th');
const tableBodyArray = [...tbody.rows];
const headCell = table.tHead.rows[0].cells[4];
const footCell = table.tFoot.rows[0].cells[4];

thHead.innerText = table.rows[0].cells[1].innerText;
thFoot.innerText = table.tFoot.rows[0].cells[1].innerText;

table.tHead.rows[0].insertBefore(thHead, headCell);
table.tFoot.rows[0].insertBefore(thFoot, footCell);

function copyColumn(arg) {
  for (let i = 0; i < arg.length; i++) {
    const cell = document.createElement('td');
    const bodyCell = tbody.rows[i].cells[4];

    cell.innerText = arg[i].cells[1].innerText;
    tbody.rows[i].insertBefore(cell, bodyCell);
  }
}

copyColumn(tableBodyArray);
