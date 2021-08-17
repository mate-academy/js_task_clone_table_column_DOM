'use strict';

// write your code here

const table = document.querySelector('table');

function clone(col1, col2) {
  const colForCopy = col1 - 1;
  const colWhereAdd = col2 - 1;

  const title = table.tHead.children[0].children[colForCopy];
  const body = [...table.children[1].children];

  for (const item of body) {
    const data = item.children[colForCopy];

    item.children[colWhereAdd].before(data.cloneNode(true));
  }

  table.tHead.children[0].children[colWhereAdd].before(title.cloneNode(true));
  table.tFoot.children[0].children[colWhereAdd].before(title.cloneNode(true));
}

clone(2, 5);
