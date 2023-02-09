'use strict';

const table = document.querySelector('table');
const currentH = table.tHead.children[0].cells[1].cloneNode(true);
const currentF = table.tFoot.children[0].cells[1].cloneNode(true);
const nextH = table.tHead.children[0].lastElementChild;
const nextF = table.tFoot.children[0].lastElementChild;
const rowsB = [...table.tBodies[0].children];

nextH.before(currentH);
nextF.before(currentF);

rowsB.map(row => {
  const currentB = row.cells[1].cloneNode(true);
  const nextB = row.lastElementChild;

  nextB.before(currentB);
});
