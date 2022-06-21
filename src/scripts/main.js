'use strict';

const table = document.querySelector('table');
const allTr = table.rows;

for (const tr of allTr) {
  const trTwo = tr.children[1];

  tr.children[4].before(trTwo.cloneNode(true));
}
