'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const copyNode = table.rows[i].cells[1].cloneNode(true);
  const targetNode = table.rows[i].cells[table.rows[i].cells.length - 1];

  targetNode.parentNode.insertBefore(copyNode, targetNode);
}
