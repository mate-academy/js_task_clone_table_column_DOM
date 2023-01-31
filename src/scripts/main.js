'use strict';

const table = document.querySelectorAll('tr');

for (const row of table) {
  row.children[3].after(row.children[1].cloneNode(true));
};
