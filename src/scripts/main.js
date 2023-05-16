'use strict';

const rows = document.querySelectorAll('tr');

for (let i = 0; i < rows.length; i++) {
  const row = rows[i];

  cloneSecondCell(row);
}

function cloneSecondCell(column) {
  const copyColumn = column.children[1].cloneNode(true);

  return column.children[4].before(copyColumn);
}
