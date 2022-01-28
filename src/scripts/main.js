'use strict';

const rows = document.querySelectorAll('tr');

for (let i = 0; i < rows.length; i++) {
  const clone = rows[i].children[1].cloneNode(true);

  rows[i].insertBefore(clone, rows[i].children[4]);
};
