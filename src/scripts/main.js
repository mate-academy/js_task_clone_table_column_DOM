'use strict';

// write your code here
const table = document.querySelector('table');

const array = [];

for (const row of table.rows) {
  array.push(row.cells[1]);
}

for (const el of array) {
  const row = el.parentElement;

  const newEl = document.createElement(el.tagName.toLowerCase());

  newEl.innerHTML = el.innerHTML;

  row.insertBefore(newEl, row.cells[row.cells.length - 1]);
}
