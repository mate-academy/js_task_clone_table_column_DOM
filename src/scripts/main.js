'use strict';
// head <------
// foot <------

const headTbl = document.querySelector('thead');
const footTbl = document.querySelector('tfoot');

function tableChangerForOneRow(namePartOfTable, copyCellPos, cellPos) {
  const listOfTable = namePartOfTable.querySelector('tr');

  return listOfTable.children[cellPos].before(
    listOfTable.children[copyCellPos].cloneNode(true)
  );
}

tableChangerForOneRow(headTbl, 1, 4);
tableChangerForOneRow(footTbl, 1, 4);

// body <-------

const bodyTbl = document.querySelector('tbody');

const bodyLst = bodyTbl.querySelectorAll('tr');

for (let i = 0; i < bodyLst.length; i++) {
  bodyLst[i].children[4].before(bodyLst[i].children[1].cloneNode(true));
}
