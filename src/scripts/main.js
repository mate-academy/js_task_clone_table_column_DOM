'use strict';

const table = document.querySelector('table');

[...table.rows].forEach(item => {
  const clone = item.children[1].cloneNode(true);

  item.children[4].before(clone);
});
