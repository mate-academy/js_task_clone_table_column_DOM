'use strict';

// write your code here
const table = document.querySelector('table');
const tableList = table.querySelectorAll('tr');

for (const tr of tableList) {
  tr.children[4].before(tr.children[1].cloneNode(true));
}
