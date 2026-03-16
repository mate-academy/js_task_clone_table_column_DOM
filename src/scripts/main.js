'use strict';

const table = document.getElementsByTagName('table')[0];

const headerRow = table.tHead.rows[0];

const newHeader = document.createElement('th');

headerRow.insertBefore(newHeader, headerRow.cells[headerRow.cells.length - 1]);

newHeader.innerHTML = headerRow.cells[1].innerHTML;

const tBody = document.getElementsByTagName('tbody')[0];

const bodyTrs = tBody.getElementsByTagName('tr');

Array.from(bodyTrs).forEach((tr) => {
  const newTd = document.createElement('td');

  tr.lastElementChild.before(newTd);
  newTd.innerHTML = tr.cells[1].innerHTML;
});

const tFoot = table.getElementsByTagName('tfoot')[0];

const foorHeader = document.createElement('th');

tFoot.rows[0].lastElementChild.before(foorHeader);

foorHeader.innerHTML = tFoot.rows[0].cells[1].innerHTML;
