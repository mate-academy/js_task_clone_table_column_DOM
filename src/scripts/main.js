'use strict';

const table = document.querySelector('table');
const { tHead, tBodies, tFoot } = table;
const fromIndex = 1;
const toIndex = 4;

[tHead, ...tBodies, tFoot].forEach(({ rows }) => {
  [...rows].forEach(({ cells }) => {
    cells[toIndex].before(cells[fromIndex].cloneNode(true));
  });
});
