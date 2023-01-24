'use strict';

// write your code here
const table = document.querySelectorAll('tr');

/*
for (let i = 0; i < table.length; i++) {
  const td = tableBody.rows[i].cells[1];

  console.log(td);
}
*/

table.forEach((tr) => {
  const newCell = tr.insertCell(4);

  const bodyId = tr.cells[1].innerHTML;

  newCell.append(bodyId);
});
