'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row, i) => {
  const clone = row.children[1].cloneNode(true);

  row.insertBefore(clone, row.lastElementChild);
});
