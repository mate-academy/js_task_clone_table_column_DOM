'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const cells = row.querySelectorAll('th, td');
  const positionCell = cells[1].cloneNode(true);

  row.insertBefore(positionCell, cells[4]);
});
