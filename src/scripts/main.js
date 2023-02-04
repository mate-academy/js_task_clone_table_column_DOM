'use strict';

const table = document.querySelector('table');

for (const section of table.children) {
  getClone(section, 1, 4);
}

function getClone(tableSection, cloneIndex, insertIndex) {
  for (const row of tableSection.rows) {
    const clone = row.cells[cloneIndex].cloneNode(true);

    row.insertBefore(clone, row.cells[insertIndex]);
  }
}
