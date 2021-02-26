'use strict';

const [...tableRows] = document.querySelectorAll('tr');

const clonedFrom = 1;
const clonedTo = 3;

for (const row of tableRows) {
  const cloneCell = row.children[clonedFrom].cloneNode(true);
  const newCell = row.children[clonedTo];

  newCell.after(cloneCell);
}
