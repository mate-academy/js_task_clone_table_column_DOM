'use strict';

const rows = document.querySelector('table').rows;

for (let i = 0; i < rows.length; i++) {
  const el = rows[i].children[1].cloneNode(true);

  rows[i].insertBefore(el, rows[i].children[4]);
}
