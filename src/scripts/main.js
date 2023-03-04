'use strict';

// write your code here
const row = document.querySelectorAll('tr');

for (const cell of row) {
  const newCell = cell.children[1].cloneNode(true);

  cell.children[3].after(newCell);
}
