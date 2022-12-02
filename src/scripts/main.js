'use strict';

const tableElement = document.querySelector('table');
const cellsCount = tableElement.rows[0].children.length;

for (let i = 0; i < tableElement.rows.length; i++) {
  const row = tableElement.rows[i];
  const str = row.cells[1].innerHTML;
  const newCell = row.insertCell(cellsCount - 1);
  newCell.innerHTML = str;
  if(i === 0 || i === tableElement.rows.length - 1){
    newCell.style.fontWeight = 'bold';
   }
}
