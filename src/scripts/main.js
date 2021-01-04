'use strict';

const table = document.querySelector('table');

[...table.rows].forEach(item => {
  item.insertCell(4).innerHTML = item.cells[1].innerText;
});

const header = document.createElement('th');
const footer = document.createElement('th');

header.innerText = table.tHead.rows[0].cells[1].innerText;
footer.innerText = table.tFoot.rows[0].cells[1].innerText;

table.tHead.rows[0].cells[4].replaceWith(header);
table.tFoot.rows[0].cells[4].replaceWith(footer);
