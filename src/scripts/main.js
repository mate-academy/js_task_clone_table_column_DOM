'use strict';

const tbodyChildren = document.querySelector('tbody').children;
const thead = document.querySelector('thead').children[0];
const tfoot = document.querySelector('tfoot').children[0];

for (const tr of tbodyChildren) {
  const cloneTr = tr.children[1].cloneNode(true);

  tr.insertBefore(cloneTr, tr.children[4]);
}

function clone(element) {
  const cloneValue = element.children[1].cloneNode(true);

  element.insertBefore(cloneValue, element.children[4]);
}

clone(thead);
clone(tfoot);
