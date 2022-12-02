'use strict';

const tableElement = document.querySelector('table');
const cellsCount = tableElement.rows[0].children.length;
for(let i = 0; i < tableElement.rows.length; i++){
   let row = tableElement.rows[i];
   let str =  row.cells[1].innerHTML;
   let newCell = row.insertCell(cellsCount - 1);
   newCell.innerHTML = str;
}
