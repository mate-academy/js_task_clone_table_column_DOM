'use strict';

const table = document.querySelector('table');

function cloneTable(index, index2) {
  [...table.rows].forEach((el) => {
    el.children[index2].before(el.children[index].cloneNode(true));
  });
};

cloneTable(1, 4);
