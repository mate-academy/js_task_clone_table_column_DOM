'use strict';

// write your code here
const table = document.querySelector('table');

for (const value of table.rows) {
  value.cells[3].after(value.cells[1].cloneNode(true));
}
