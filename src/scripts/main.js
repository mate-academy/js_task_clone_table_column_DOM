'use strict';

// write your code here
const table = document.querySelector('table');

const header = table.querySelector('thead');
const body = table.querySelector('tbody');
const footer = table.querySelector('tfoot');

const headerTR = header.querySelector('tr');
const bodyTr = body.querySelectorAll('tr');
const footerTR = footer.querySelector('tr');

const headerTH = headerTR.querySelectorAll('th');
const footerTH = footerTR.querySelectorAll('th');

footerTR.deleteCell(footerTH[4]);
headerTR.deleteCell(headerTH[4]);

headerTR.insertAdjacentHTML('beforeend', `
  <th>Position</th>
  <th>Salary</th>
`);

footerTR.insertAdjacentHTML('beforeend', `
  <th>Position</th>
  <th>Salary</th>
`);

bodyTr.forEach((tr) => {
  const newCell = tr.insertCell(4);

  const bodyId = tr.cells[1].innerHTML;

  newCell.append(bodyId);
});

/*
for (let i = 0; i < bodyTr.length; i++) {
  const td = tableBody.rows[i].cells[1];

  console.log(td);
}
*/
