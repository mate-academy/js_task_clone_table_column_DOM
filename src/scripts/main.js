'use strict';

const table = document.querySelector('table');
const rows = table.querySelectorAll('tr');

rows.forEach((row) => {
  const secondCell = row.children[1].cloneNode(true);
  const lastCell = row.lastElementChild;

  row.insertBefore(secondCell, lastCell);
});
