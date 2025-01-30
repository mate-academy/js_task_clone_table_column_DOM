'use strict';

const table = document.querySelector('table');

function appendColumn() {
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.children;
    const cellCloned = cells[1].cloneNode(true);

    row.lastElementChild.before(cellCloned);
  });
}

appendColumn();
