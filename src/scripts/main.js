'use strict';

const table = document.querySelector('table');

const tableHead = table.tHead.rows[0];
const tableBody = table.tBodies[0];
const tableFooter = table.tFoot.rows[0];

const thLastElement = document.createElement('th');

thLastElement.innerText = tableHead.cells[4].innerHTML;

tableHead.cells[4].innerHTML = tableHead.cells[1].innerHTML;

tableHead.append(thLastElement);

for (let i = 0; i < tableBody.rows.length; i++) {
  const tdLastElement = document.createElement('td');

  tdLastElement.innerHTML = tableBody.rows[i].cells[4].innerHTML;

  tableBody.rows[i].append(tdLastElement);

  tableBody.rows[i].cells[4].innerHTML = tableBody.rows[i].cells[1].innerHTML;
};

const tfLastElement = document.createElement('th');

tfLastElement.innerText = tableFooter.cells[4].innerHTML;

tableFooter.cells[4].innerHTML = tableFooter.cells[1].innerHTML;

tableFooter.append(tfLastElement);
