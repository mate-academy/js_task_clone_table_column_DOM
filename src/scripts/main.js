'use strict';

const head = document.querySelectorAll('thead tr');
const body = document.querySelectorAll('tbody tr');
const foot = document.querySelectorAll('tfoot tr');

function clounRows(rows) {
  rows.forEach((row) => {
    const secondElement = row.children[1];
    const newHeadClone = secondElement.cloneNode(true);
    const parentElem = secondElement.parentElement;
    const lastChild = parentElem.children[parentElem.children.length - 1];

    parentElem.insertBefore(newHeadClone, lastChild);
  });
}

clounRows(foot);
clounRows(head);
clounRows(body);
