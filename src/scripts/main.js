'use strict';

const tBody = document.querySelector('tbody');

Array.from(tBody.children).forEach((tr) => {
  const secondTd = tr.children[1];

  const lastTd = tr.lastElementChild;

  const clonedTd = secondTd.cloneNode(true);

  tr.insertBefore(clonedTd, lastTd);
});

function cloneColumn(wrapper, columnIndex) {
  const tFoot = document.querySelector(wrapper);

  const secondThFoot = tFoot.querySelectorAll('th')[columnIndex];

  const lastThFoot = tFoot.querySelector('tr').lastElementChild;

  const clonedThFoot = secondThFoot.cloneNode(true);

  tFoot.querySelector('tr').insertBefore(clonedThFoot, lastThFoot);
}

cloneColumn('tfoot', 1);
cloneColumn('thead', 1);
