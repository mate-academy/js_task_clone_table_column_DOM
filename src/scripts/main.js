'use strict';

// write your code here

const th = [...document.querySelectorAll('th')]
  .filter(item => item.cellIndex === 1);
const td = [...document.querySelectorAll('td')]
  .filter(item => item.cellIndex === 1);

function cloneColumn(column, place) {
  for (const cell of column) {
    cell.parentElement.children[place].before(cell.cloneNode(true));
  }
}

cloneColumn(th, 4);
cloneColumn(td, 4);
