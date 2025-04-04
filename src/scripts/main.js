'use strict';

const replacedCell = document.getElementsByTagName('tr');

for (const cell of replacedCell) {
  const secondElement = cell.querySelector(':nth-child(2)');
  const cloneCell = secondElement.cloneNode(true);
  const lastElement = cell.lastElementChild;

  lastElement.before(cloneCell);
}
