'use strict';

const table = document.querySelector('table');

[...table.rows].forEach((tr) => {
  const dublicatedItem = tr.children[1].cloneNode(true);

  tr.children[4].before(dublicatedItem);
});
