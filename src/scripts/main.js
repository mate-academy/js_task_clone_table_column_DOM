'use strict';

const table = document.querySelector('table');

[...table.rows].forEach(item => {
  const clone = item.children[1].cloneNode(true);

  item.lastElementChild.before(clone);
});
