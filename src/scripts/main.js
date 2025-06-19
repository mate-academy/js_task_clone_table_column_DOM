'use strict';

const thead = document.querySelector('thead');
const tfoot = document.querySelector('tfoot');

const theadPosition = (
  thead.firstElementChild.firstElementChild.nextElementSibling
);
const tfootPosition = (
  tfoot.firstElementChild.firstElementChild.nextElementSibling
);

thead.firstElementChild.lastElementChild.before(theadPosition.cloneNode(true));
tfoot.firstElementChild.lastElementChild.before(tfootPosition.cloneNode(true));

const tbody = document.querySelector('tbody');
const tbodyChildren = [...tbody.children];

for (const child of tbodyChildren) {
  const td = child.firstElementChild.nextElementSibling;

  child.lastElementChild.before(td.cloneNode(true));
}
