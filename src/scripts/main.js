'use strict';

const table = document.querySelector('table');

const head = [ ...table.tHead.children ][0];

addThCell(head);

const foot = [ ...table.tFoot.children ][0];

addThCell(foot);

const body = { ...table.tBodies }['0'].children;
const childrens = [ ...body ];

for (let i = 0; i < childrens.length; i++) {
  addCell(childrens, i);
}

function addThCell(row) {
  const addElement = document.createElement('th');

  addElement.textContent = row.children[1].textContent;
  row.lastElementChild.before(addElement);
}

function addCell(row, index) {
  const addElement = document.createElement('td');

  addElement.textContent = row[index].children[1].textContent;
  row[index].lastElementChild.before(addElement);
}
