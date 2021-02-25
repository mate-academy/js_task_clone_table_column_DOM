'use strict';

const table = document.querySelector('table');
const tableRow = table.rows;

const indexOfRowForCopyColumnFrom = 1;
const indexOfRowForCopyColumnTo = 4;

for (let i = 0; i < table.rows.length; i++) {
  const columnWhichWeCopy = table.rows[i].cells[indexOfRowForCopyColumnFrom];
  const clonedColumn = columnWhichWeCopy.cloneNode(true);

  tableRow[i]
    .insertBefore(clonedColumn, tableRow[i].cells[indexOfRowForCopyColumnTo]);
}

// <--------------one more answer--------------->

// const tHead = document.querySelector('thead');
// const tBody = document.querySelector('tbody');
// const tFoot = document.querySelector('tfoot');
// const tr = document.querySelectorAll('tr');

// const thForCopyInHead = document.createElement('th');
// const thForCopyInFoot = document.createElement('th');

// const forCopyInHead = tHead.rows[0].cells[1].innerHTML;
// const forCopyInFoot = tFoot.rows[0].cells[1].innerHTML;

// thForCopyInHead.append(forCopyInHead);
// thForCopyInFoot.append(forCopyInFoot);
// tHead.rows[0].cells[4].insertAdjacentElement('beforebegin', thForCopyInHead);
// tFoot.rows[0].cells[4].insertAdjacentElement('beforebegin', thForCopyInFoot);

// for (let i = 0; i < tr.length - 2; i++) {
//   const tdForCopy = document.createElement('td');
//   const forCopyInBody = tBody.rows[i].cells[1].innerHTML;

//   tdForCopy.append(forCopyInBody);
//   tBody.rows[i].cells[4].insertAdjacentElement('beforebegin', tdForCopy);
// }

// write your code here
