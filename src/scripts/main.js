'use strict';

const table = document.querySelector('table');
const headColumn = table.tHead.children[0];
const footColumn = table.tFoot.children[0];

function insertBeforeLast(root) {
  const copyChild = root.children[1].cloneNode(true);

  root.lastElementChild.before(copyChild);
}

insertBeforeLast(headColumn);
insertBeforeLast(footColumn);

for (const tr of table.tBodies[0].children) {
  insertBeforeLast(tr);
}
