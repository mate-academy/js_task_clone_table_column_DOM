'use strict';

// write your code here
const rows = [...document.querySelectorAll('tr')];

for (const row of rows) {
  const cells = [...row.querySelectorAll('td, th')];

  const secondCell = cells[1].cloneNode(true);
  const lastCell = cells[cells.length - 1];

  lastCell.before(secondCell);
}
