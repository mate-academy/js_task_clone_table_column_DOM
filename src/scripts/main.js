'use strict';

const tableRows = [...document.querySelector('table').rows];

for (const row of tableRows) {
  const tag = row.cells[1].tagName;

  const newCell = document.createElement(`${tag}`);

  newCell.innerHTML = row.cells[1].innerHTML;

  row.insertBefore(newCell, row.children[4]);
}
