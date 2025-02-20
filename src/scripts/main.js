'use strict';

const thead = document.querySelectorAll('thead tr');
const tbody = document.querySelectorAll('tbody tr');
const tfoot = document.querySelectorAll('tfoot tr');

const columnIndex = 1;

thead.forEach((tr) => {
  const th = tr.children[columnIndex];
  const clonedTh = th.cloneNode(true);

  tr.insertBefore(clonedTh, tr.children[columnIndex + 3]);
});

tbody.forEach((tr) => {
  const th = tr.children[columnIndex];
  const clonedTh = th.cloneNode(true);

  tr.insertBefore(clonedTh, tr.children[columnIndex + 3]);
});

tfoot.forEach((tr) => {
  const th = tr.children[columnIndex];
  const clonedTh = th.cloneNode(true);

  tr.insertBefore(clonedTh, tr.children[columnIndex + 3]);
});
