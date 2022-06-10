'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  row.children[4].before(row.children[1].cloneNode(true));
};
