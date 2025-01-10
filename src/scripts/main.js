'use strict';

const table = document.querySelector('table');

const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.querySelectorAll('th, td');

  const secondCloneColumn = cells[1].cloneNode(true);

  row.insertBefore(secondCloneColumn, cells[cells.length - 1]);
});
