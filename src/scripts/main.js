'use strict';

const table = document.querySelector('table');

const cellsHead = table.tHead.rows[0].cells;
const thHead = cellsHead[1];

const cellsFooter = table.tFoot.rows[0].cells;
const thFooter = cellsFooter[1];

const trsBody = table.tBodies[0].rows;

table.tHead.rows[0].children[4].before(thHead.cloneNode(true));
table.tFoot.rows[0].children[4].before(thFooter.cloneNode(true));

for (const elem of trsBody) {
  const item = elem.children[1];

  elem.children[4].before(item.cloneNode(true));
}
