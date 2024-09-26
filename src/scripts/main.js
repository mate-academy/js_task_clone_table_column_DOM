'use strict';

const rows = document.querySelectorAll('tr');

for (const row of rows) {
  row.lastElementChild.before(row.children[1].cloneNode(true));
};
