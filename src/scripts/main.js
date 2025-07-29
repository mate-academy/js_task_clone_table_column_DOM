'use strict';

const table = document.querySelector('table');

if (table.tHead) {
  for (const row of table.tHead.rows) {
    const cell = row.cells[1];

    const clone = cell.cloneNode(true);

    clone.classList.add('cloned-column');

    row.insertBefore(clone, row.lastElementChild);
  }
}

for (const tbody of table.tBodies) {
  for (const row of tbody.rows) {
    const cell = row.cells[1];

    const clone = cell.cloneNode(true);

    clone.classList.add('cloned-column');

    row.insertBefore(clone, row.lastElementChild);
  }
}

if (table.tFoot) {
  for (const row of table.tFoot.rows) {
    const cell = row.cells[1];

    const clone = cell.cloneNode(true);

    clone.classList.add('cloned-column');

    row.insertBefore(clone, row.lastElementChild);
  }
}
