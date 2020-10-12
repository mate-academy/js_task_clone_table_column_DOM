'use strict';

// write your code here
const table = document.querySelector('table').rows;

for (const key of table) {
  key.cells[3].after(key.cells[1].cloneNode(true));
}
