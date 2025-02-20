'use strict';

const rows = [...document.querySelectorAll('tr')];

const getSecondCell = (dataRows, cellNumber) => {
  dataRows.forEach((row) => {
    const cell = row.children[cellNumber].cloneNode(true);

    row.lastChild.previousSibling.before(cell);
  });
};

getSecondCell(rows, 1);
