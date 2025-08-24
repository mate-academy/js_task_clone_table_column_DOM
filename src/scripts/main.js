'use strict';

const allTaible = document.querySelector('table');

const headTaible = allTaible.tHead;

const bodyTaible = allTaible.tBodies[0];

const footTaible = allTaible.tFoot;

function copyPaste(elementTaible) {
  for (let i = 0; i < elementTaible.rows.length; i++) {
    const elementTr = elementTaible.rows[i];
    const copy = elementTr.cells[1].cloneNode(true);
    const lastCells = elementTr.cells[elementTr.cells.length - 1];

    elementTr.insertBefore(copy, lastCells);
  }
}

copyPaste(headTaible);
copyPaste(bodyTaible);
copyPaste(footTaible);
