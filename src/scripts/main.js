'use strict';

const thead = document.querySelector('thead');
const headToCopy = thead.children[0].children[1].cloneNode(true);
const lastChildIndex = thead.children[0].children.length - 1;

const tbody = document.querySelector('tbody');
const tbodyChildren = tbody.children;

const tfoot = document.querySelector('tfoot');
const footToCopy = tfoot.children[0].children[1].cloneNode(true);

thead.children[0]
  .insertBefore(headToCopy, thead.children[0].children[lastChildIndex]);

for (let i = 0; i < tbodyChildren.length; i++) {
  tbodyChildren[i].insertBefore(
    tbodyChildren[i].children[1].cloneNode(true),
    tbodyChildren[i].children[lastChildIndex],
  );
}

tfoot.children[0]
  .insertBefore(footToCopy, tfoot.children[0].children[lastChildIndex]);
