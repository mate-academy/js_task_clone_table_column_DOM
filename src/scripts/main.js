'use strict';

const table = document.querySelector('table');

for (const sections of table.children) {
  for (const row of sections.children) {
    const cloneSecondBLock = row.children[1].cloneNode(true);

    row.children[row.children.length - 1].before(cloneSecondBLock);
  }
}
