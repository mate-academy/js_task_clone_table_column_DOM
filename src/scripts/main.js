'use strict';

const table = document.querySelector('table');

const rows = table.rows;

const positionHeader = document.createElement('th');

positionHeader.textContent = 'Position';

table.tHead.rows[0].cells[3].insertAdjacentElement('afterend', positionHeader);

const positionFooter = document.createElement('th');

positionFooter.textContent = 'Position';

table.tFoot.rows[0].cells[3].insertAdjacentElement('afterend', positionFooter);

for (let i = 1; i < rows.length - 1; i++) {
  const row = rows[i];
  const newPositionRow = document.createElement('td');

  newPositionRow.textContent = row.cells[1].textContent;
  row.cells[3].insertAdjacentElement('afterend', newPositionRow);
}
