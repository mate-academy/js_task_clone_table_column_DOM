'use strict';

// write your code here
const rows = [...document.querySelectorAll('tr')];
const columnCopy = rows.map(el => {
  return el.children[1].cloneNode(true);
});

rows.forEach((row, i) => {
  row.insertBefore(columnCopy[i], row.children[4]);
});
