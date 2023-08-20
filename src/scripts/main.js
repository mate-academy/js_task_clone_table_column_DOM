'use strict';

// write your code here

const table = document.querySelector('table');
const copyNode = table.cloneNode(true);

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].append(copyNode.rows[i].cells[4]);
  table.rows[i].cells[4].replaceWith(copyNode.rows[i].cells[1]);
}
