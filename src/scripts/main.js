'use strict';

const copyIndex = 2;
const pasteIndex = 4;

document.querySelectorAll(`tr > *:nth-child(${copyIndex})`).forEach((el, i) => {
  const cloneThHead = el.cloneNode(true);
  const parentNode = el.parentNode;
  const beforeInsertNode = parentNode.cells[pasteIndex];

  if (beforeInsertNode) {
    parentNode.insertBefore(cloneThHead, beforeInsertNode);
  }
});
