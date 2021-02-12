'use strict';

const rows = document.querySelectorAll('tr');

[...rows].forEach(row => {
  const cell = row.children[1];

  row.insertBefore(cell.cloneNode(true), row.children[4]);
});
