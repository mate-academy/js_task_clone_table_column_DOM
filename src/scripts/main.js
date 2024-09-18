'use strict';

// write your code here
const tHead = document.querySelectorAll('thead tr');
const tBody = document.querySelectorAll('tbody tr');
const tFoot = document.querySelectorAll('tfoot tr');

tHead.forEach((item) => {
  const newTh = document.createElement('th');

  const positionTd1 = item.cells[1];

  newTh.textContent = positionTd1.textContent;

  const lastElement = item.cells[item.cells.length - 1];

  lastElement.before(newTh);

  tBody.forEach((row) => {
    const newTd = document.createElement('td');

    const positionTd = row.cells[1];

    newTd.textContent = positionTd.textContent;

    const lastElement2 = row.cells[row.cells.length - 1];

    lastElement2.before(newTd);
  });

  tFoot.forEach((rowTFoot) => {
    const newTd = document.createElement('th');

    const positionTdFoot = rowTFoot.cells[1];

    newTd.textContent = positionTdFoot.textContent;

    // eslint-disable-next-line no-undef
    const lastElement3 = rowTFoot.cells[rowTFoot.cells.length - 1];

    lastElement3.before(newTd);
  });
});
