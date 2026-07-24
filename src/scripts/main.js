'use strict';

// write your code here
const table = document.querySelector('table');
const rows = [...table.querySelectorAll('tr')];

for (const row of rows) {
  const arr = [...row.children];
  const secondCell = arr[1].cloneNode(true);
  const lastCell = arr[arr.length - 1];

  lastCell.before(secondCell);
}
