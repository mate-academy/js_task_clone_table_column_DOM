'use strict';

function addedColumnTable(selector, columnIndex) {
  const table = document.querySelector(selector);
  const rows = table.querySelectorAll('tr');

  for (const row of rows) {
    const cell = row.children[1];
    const copy = cell.cloneNode(true);

    row.insertBefore(copy, row.lastElementChild);
  }
}

addedColumnTable('table');
