'use strict';

const table = document.querySelector('table');

function cloneTable(rowIndexOld, rowIndexNew) {
  [...table.rows].forEach((row) => {
    row.children[rowIndexNew].before(row.children[rowIndexOld].cloneNode(true));
  });
};

cloneTable(1, 4);
