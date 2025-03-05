'use strict';

// write your code here
const trAll = document.querySelectorAll('tr');

trAll.forEach((tr) => {
  const secondTh = tr.children[1];
  const cloneSecondTh = secondTh.cloneNode(true);

  const lastChild = tr.lastElementChild;

  tr.insertBefore(cloneSecondTh, lastChild);
});
