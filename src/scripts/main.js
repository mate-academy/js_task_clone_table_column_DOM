'use strict';

// write your code here
const table = document.querySelector('table');

table.querySelectorAll('tr').forEach((row) => {
  const secondCol = row.children[1].cloneNode(true);

  const lastCol = row.children[row.children.length - 1];

  row.insertBefore(secondCol, lastCol);
});
