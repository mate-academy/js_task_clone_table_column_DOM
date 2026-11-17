'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const tfoot = document.querySelector('tfoot');

const bodyChildren = tbody.children;
const headChildren = thead.children;
const footChildren = tfoot.children;

const headClone = headChildren[0].children[1].cloneNode(true);
const footClone = footChildren[0].children[1].cloneNode(true);

headChildren[0].insertBefore(headClone, headChildren[0].lastElementChild);
footChildren[0].insertBefore(footClone, footChildren[0].lastElementChild);

for (const element of bodyChildren) {
  const bodyPositionClone = element.children[1].cloneNode(true);

  element.insertBefore(bodyPositionClone, element.lastElementChild);
}
