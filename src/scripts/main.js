'use strict';

const allRows = document.querySelectorAll('tr');

for (const tr of allRows) {
  const secondTd = tr.cells[1].cloneNode(true);

  tr.insertBefore(secondTd, tr.children[4]);
}
