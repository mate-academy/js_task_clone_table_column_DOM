'use strict';

// write your code here
const head = document.querySelector('thead tr');

const headCell = head.children[1].cloneNode(true);

head.insertBefore(headCell, head.children[head.children.length - 1]);

const tbody = document.querySelectorAll('tbody tr');

tbody.forEach((row) => {
  const cell = row.children[1].cloneNode(true);

  row.insertBefore(cell, row.children[row.children.length - 1]);
});

const foot = document.querySelector('tfoot tr');
const footCell = foot.children[1].cloneNode(true);

foot.insertBefore(footCell, foot.children[foot.children.length - 1]);
