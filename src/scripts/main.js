'use strict';

const [...tableRows] = document.querySelectorAll('tr');

for (const row of tableRows) {
  const cloneCell = row.children[1].cloneNode(true);
  const newCell = row.children[3];

  newCell.after(cloneCell);
}
