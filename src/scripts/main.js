'use strict';

// write your code here
const table = document.querySelector('table');

const header = table.querySelector('thead');
const body = table.querySelector('tbody');
const footer = table.querySelector('tfoot');

const headerTR = header.querySelector('tr');
const bodyTr = body.querySelectorAll('tr');
const footerTR = footer.querySelector('tr');

headerTR.insertAdjacentHTML('beforeend', `
  <th>Position</th>
`);

footerTR.insertAdjacentHTML('beforeend', `
  <th>Position</th>
`);

/*
for (let i = 0; i < bodyTr.length; i++) {
  const td = tableBody.rows[i].cells[1];

  console.log(td);
}
*/

bodyTr.forEach((tr) => {
  const newCell = tr.insertCell(4);

  const bodyId = tr.cells[1].innerHTML;

  newCell.append(bodyId);
});
