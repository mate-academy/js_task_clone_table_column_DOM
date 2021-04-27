'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.children.length; i++) {
  const tag = table.children[i].tagName;

  if (tag === 'THEAD') {
    const rowHead = table.tHead.rows[0];

    const cellHead = document.createElement('th');

    cellHead.innerHTML = rowHead.cells[1].innerText;
    rowHead.insertBefore(cellHead, rowHead.cells[4]);
  } else if (tag === 'TFOOT') {
    const rowFoot = table.tFoot.rows[0];

    const cellFoot = document.createElement('th');

    cellFoot.innerHTML = rowFoot.cells[1].innerText;
    rowFoot.insertBefore(cellFoot, rowFoot.cells[4]);
  } else {
    const rowsBody = table.tBodies[0].rows;

    for (let j = 0; j < rowsBody.length; j++) {
      const cellBody = document.createElement('td');

      cellBody.innerHTML = rowsBody[j].cells[1].innerText;
      rowsBody[j].insertBefore(cellBody, rowsBody[j].cells[4]);
    };
  };
};
