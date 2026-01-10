'use strict';

const head = document.querySelector('thead tr');
const newHeadCell = head.cells[1].cloneNode(true);

head.insertBefore(newHeadCell, head.cells[4]);

const body = document.querySelectorAll('tbody tr');

body.forEach((el) => {
  const newBodyCell = el.cells[1].cloneNode(true);

  el.insertBefore(newBodyCell, el.cells[4]);
});

const foot = document.querySelector('tfoot tr');
const newFootCell = foot.cells[1].cloneNode(true);

foot.insertBefore(newFootCell, foot.cells[4]);
