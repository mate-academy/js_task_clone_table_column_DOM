'use strict';

const table = document.querySelector('table');
const tableHead = table.tHead;
const tableFooter = table.tFoot;

const colHead = tableHead.querySelectorAll('th');

colHead[colHead.length - 1].before(colHead[1].cloneNode(true));

const rowsBody = table.querySelectorAll('tr');

for (let i = 1; i < rowsBody.length - 1; i++) {
  const colBody = rowsBody[i].querySelectorAll(`td`);

  colBody[colBody.length - 1].before(colBody[1].cloneNode(true));
}

const colFooter = tableFooter.querySelectorAll('th');

colFooter[colFooter.length - 1].before(colFooter[1].cloneNode(true));
