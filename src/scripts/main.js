'use strict';

// write your code here
const dashboard = document.querySelector('table');

function copyPateColumn(nodeTable, numColumn = 1, insertColumn = 2) {
  const rows = [...nodeTable.rows];

  rows.map(row => {
    const rowChildren = row.children;

    const elTarget = rowChildren[insertColumn - 1];
    const elCopy = rowChildren[numColumn - 1].cloneNode(true);

    elTarget.insertAdjacentElement('beforebegin', elCopy);
  });
}

copyPateColumn(dashboard, 2, 5);
