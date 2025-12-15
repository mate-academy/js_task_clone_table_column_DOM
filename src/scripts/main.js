'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  if (row.children.length < 2) {
    return;
  }

  const clonedCell = row.children[1].cloneNode(true);

  row.insertBefore(clonedCell, row.lastElementChild);
});
