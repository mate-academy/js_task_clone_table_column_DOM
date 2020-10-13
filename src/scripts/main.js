'use strict';

function cloneColumn() {
  const table = document.querySelector('table');

  for (let i = 0; i < table.rows.length; i++) {
    const targetNode = table.rows[i].cells[4];
    const newNode = table.rows[i].cells[1].cloneNode(true);

    targetNode.parentNode.insertBefore(newNode, targetNode);
  }
}

cloneColumn();
