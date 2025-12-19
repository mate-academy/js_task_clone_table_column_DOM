'use strict';

// write your code here
const tHead = document.querySelector('thead tr :nth-child(2)');
const copyHead = tHead.cloneNode(true);
const tFoot = document.querySelector('tfoot tr :nth-child(2)');
const copyFoot = tFoot.cloneNode(true);

const columnData = [];

document.querySelectorAll('tbody tr').forEach((row) => {
  const cell = row.querySelector('td:nth-child(2)');

  columnData.push(cell);
});

document.querySelector('thead tr :nth-last-child(-n + 2)').after(copyHead);
document.querySelector('tfoot tr :nth-last-child(-n + 2)').after(copyFoot);

document.querySelectorAll('tbody tr').forEach((row, index) => {
  const cell = row.querySelector('td:nth-last-child(-n + 2)');

  cell.after(columnData[index].cloneNode(true));
});
