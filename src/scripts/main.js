'use strict';

// write your code here

const table = document.getElementsByTagName('table')[0];

const secondCellHead = table.tHead.rows[0].cells[1];

table.tHead.rows[0].children[4].before(secondCellHead.cloneNode(true));

for (let i = 0; i < table.tBodies[0].rows.length; i++) {
  const secondCellBody = table.tBodies[0].rows[i].cells[1];

  table.tBodies[0].rows[i].children[4].before(secondCellBody.cloneNode(true));
}

const secondCellFoot = table.tFoot.rows[0].cells[1];

table.tFoot.rows[0].children[4].before(secondCellFoot.cloneNode(true));
