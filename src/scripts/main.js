'use strict';

const table = document.querySelector('table');
const rows = table.rows;

for (let i = 0; i < rows.length; i++) {
  const textRow = rows[i].cells[1].textContent;
  const position = rows[i].cells[rows[i].cells.length - 1];

  if (i === 0 || i === rows.length - 1) {
    const newTh = document.createElement('th');

    newTh.textContent = textRow;

    position.before(newTh);
    continue;
  }

  const newTd = document.createElement('td');

  newTd.textContent = textRow;

  position.before(newTd);
}
