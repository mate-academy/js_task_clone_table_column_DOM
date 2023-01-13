'use strict';

function cloneColumn(index) {
  rows.forEach(row => {
    const cell = row.children[index];

    row.insertBefore(cell.cloneNode(true), row.children[4]);
  });
}

const rows = document.querySelectorAll('tr');

cloneColumn(1);
