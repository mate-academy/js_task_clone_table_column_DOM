'use strict';

const rows = document.querySelectorAll('tr');

for (let i = 0; i <= rows.length; i++) {
  rows[i].children[4].before(rows[i].children[1].cloneNode(true));
};
