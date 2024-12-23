'use strict';

const table = document.querySelector('table');

table.querySelectorAll('tr').forEach((tr) => {
  const clone = tr.children[1].cloneNode(true);

  tr.insertBefore(clone, tr.lastElementChild);
});
