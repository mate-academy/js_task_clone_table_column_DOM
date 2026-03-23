'use strict';

// write your code here
const table = [...document.querySelector('table').children];

for (const child of table) {
  if (child.nodeName === 'SCRIPT') {
    continue;
  }

  const currChild = [...child.children];

  currChild.forEach((el) => {
    const cloneCells = el.cells[1].cloneNode(true);

    el.lastElementChild.before(cloneCells);
  });
}
