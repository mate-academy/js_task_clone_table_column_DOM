'use strict';

const [...tableRows] = document.querySelectorAll('tr');

const copyIndex = 1;
const insertIndex = 3;

tableRows.forEach(element => {
  const cloneCell = element.children[copyIndex].cloneNode(true);
  const newCell = element.children[insertIndex];

  newCell.after(cloneCell);
});
