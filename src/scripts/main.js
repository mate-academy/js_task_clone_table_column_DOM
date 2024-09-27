'use strict';

function cloneCell(row) {
  const rowArr = Array.from(row.children);

  const lastCell = rowArr[rowArr.length - 1];
  const secondCellCopy = rowArr[1].cloneNode(true);

  lastCell.before(secondCellCopy);
}

const tableArr = Array.from(document.querySelector('table').children);

for (let i = 0; i < tableArr.length; i++) {
  if (i === 1) {
    const bodyRowsArr = Array.from(tableArr[i].children);

    bodyRowsArr.forEach((row) => cloneCell(row));
  } else {
    const trNode = tableArr[i].firstElementChild;

    cloneCell(trNode);
  }
}
