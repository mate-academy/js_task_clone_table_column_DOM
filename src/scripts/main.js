'use strict';

const rootTable = document.querySelector('table');
const arrayOfTr = [...rootTable.rows];

arrayOfTr.forEach((tr, index) => {
  const fromCopy = tr.cells[1];
  const newTr = fromCopy.cloneNode(true);

  function appendElements(tablePart = '') {
    rootTable[tablePart].rows[0].children[4].before(newTr);
  }

  if (index === 0) {
    appendElements('tHead');
  } else if (index === arrayOfTr.length - 1) {
    appendElements('tFoot');
  } else {
    rootTable.tBodies[0].children[index - 1].children[4].before(newTr);
  }
});
