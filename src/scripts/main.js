'use strict';

// write your code here
const trs = document.querySelectorAll('table tr');

for (const tr of trs) {
  const p = tr.cells[1].cloneNode(true);

  tr.append(p, tr.cells[tr.cells.length - 1]);
}
