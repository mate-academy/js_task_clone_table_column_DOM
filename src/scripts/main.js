'use strict';

const table = document.querySelector('table');

const POSITION_CELL = 1;

const array = [];

for (const row of table.rows) {
  array.push(row.cells[POSITION_CELL]);
}

for (const el of array) {
  const row = el.parentElement;

  const newEl = document.createElement(el.tagName.toLowerCase());

  newEl.innerHTML = el.innerHTML;

  row.insertBefore(newEl, row.cells[row.cells.length - 1]);
}
