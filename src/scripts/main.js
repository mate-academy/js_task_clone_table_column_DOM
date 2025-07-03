'use strict';

const table = document.querySelector('table');
const rows = Array.from(table.rows);

const positionColumn = [];

rows.forEach((element) => {
  const secondCell = element.children[1];

  if (secondCell) {
    positionColumn.push(secondCell.cloneNode(true));
  } else {
    positionColumn.push(null);
  }
});

for (let i = 0; i < positionColumn.length; i++) {
  const cellToInsert = positionColumn[i];

  if (cellToInsert) {
    rows[i].lastElementChild.insertAdjacentElement('beforebegin', cellToInsert);
  }
}
