'use strict';

const trow = document.getElementsByTagName('table')[0].rows;

for (let i = 0; i < trow.length; i++) {
  const secondColumnCell =
    document.getElementsByTagName('table')[0].rows[i].cells[1];
  const cloneSecondColumnCell = secondColumnCell.cloneNode(true);

  document
    .getElementsByTagName('table')[0]
    .rows[i].lastElementChild.before(cloneSecondColumnCell);
}
