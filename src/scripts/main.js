'use strict';

const [...tableRows] = document.querySelectorAll('tr');

const oldColumnIndex = 1;
const newColumnIndex = 3;

for (const row of tableRows) {
  const cloneCell = row.children[oldColumnIndex].cloneNode(true);
  const newCell = row.children[newColumnIndex];

  newCell.after(cloneCell);
}
