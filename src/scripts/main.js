'use strict';

const thead = document.querySelectorAll('thead tr');
const tbody = document.querySelectorAll('tbody tr');
const tfoot = document.querySelectorAll('tfoot tr');

const columnIndex = 1;

// eslint-disable-next-line no-shadow
function insertColumn(rows, columnIndex) {
  rows.forEach((tr) => {
    if (tr.children.length > columnIndex) {
      const th = tr.children[columnIndex];
      const clonedTh = th.cloneNode(true);

      if (tr.children.length > columnIndex + 2) {
        tr.insertBefore(clonedTh, tr.children[columnIndex + 3]);
      } else {
        tr.appendChild(clonedTh);
      }
    }
  });
}

insertColumn(thead, columnIndex);
insertColumn(tbody, columnIndex);
insertColumn(tfoot, columnIndex);
