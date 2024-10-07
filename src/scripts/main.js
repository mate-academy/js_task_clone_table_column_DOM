'use strict';

// write your code here
const tr = [...document.querySelectorAll('tr')];

tr.forEach((el) => {
  if (el.children.length > 1) {
    const secondCell = el.children[1];
    const lastCell = el.children[el.children.length - 1];
    const clonedCell = secondCell.cloneNode(true);

    lastCell.insertAdjacentElement('beforebegin', clonedCell);
  }
});
