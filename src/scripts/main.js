'use strict';

const table = document.body.firstElementChild.rows;

for (let i = 0; i < table.length; i++) {
  table[i].lastElementChild.before(
    table[i].children[1].cloneNode(true),
  );
}
