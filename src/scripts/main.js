'use strict';

const table = document.querySelector('table');
const tableRows = [...table.rows];

const secondColumn = tableRows.map(i => i.cells[1]);

for (let i = 0; i < tableRows.length; i++) {
  tableRows[i].innerHTML += `<th> ${tableRows[i].cells[4].innerText} </th>`;
  tableRows[i].cells[4].innerHTML = secondColumn[i].innerText;
}
