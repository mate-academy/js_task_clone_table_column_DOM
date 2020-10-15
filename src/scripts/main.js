'use strict';

const rows = document.querySelectorAll('tr');
const tableHead = document.querySelector('thead');
const tableHeadList = tableHead.querySelectorAll('th');

function cloneRow(fromIndex, toIndex) {
  if (fromIndex < tableHeadList.length && toIndex < tableHeadList.length) {
    for (let i = 0; i < rows.length; i++) {
      rows[i]
        .children[toIndex]
        .before(rows[i].children[fromIndex].cloneNode(true));
    }
  } else {
    throw new Error('Could not find element');
  }
}

cloneRow(1, 4);
