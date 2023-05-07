'use strict';

const rows = document.querySelector('table').rows;

for (let i = 0; i < rows.length; i++) {
  rows[i].children[4].before(rows[i].children[1].cloneNode(true));
};
