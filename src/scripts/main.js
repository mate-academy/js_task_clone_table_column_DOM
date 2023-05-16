'use strict';

const rows = document.querySelectorAll('tr');

for (let i = 0; i < rows.length; i++) {
  const row = document.querySelectorAll('tr')[i];

  cloneColumn(row);
}

function cloneColumn(column) {
  const copyColumn = column.children[1].cloneNode(true);

  return column.children[4].before(copyColumn);
}
