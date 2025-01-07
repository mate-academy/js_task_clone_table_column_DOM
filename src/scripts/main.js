'use strict';

const table = document.querySelector('table');
const tHead = table.querySelector('thead tr');
const tBody = table.querySelectorAll('tbody tr');
const tFoot = table.querySelector('tfoot tr');

const cloneHead = tHead.children[1].cloneNode(true);

tHead.insertBefore(cloneHead, tHead.lastElementChild);

tBody.forEach((row) => {
  const cell = row.children[1].cloneNode(true);

  row.insertBefore(cell, row.lastElementChild);
});

const cloneFoot = tFoot.children[1].cloneNode(true);

tFoot.insertBefore(cloneFoot, tFoot.lastElementChild);
