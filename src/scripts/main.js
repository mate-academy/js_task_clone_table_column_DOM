'use strict';

const theadTr = document.querySelector('thead tr').children;
const tbody = document.querySelector('tbody').children;
const tfoot = document.querySelector('tfoot tr').children;

function cloneCell(element) {
  if (element.length < 2) {
    return;
  }

  const lastCell = element[1].cloneNode(true);

  element[element.length - 1].before(lastCell);
}

cloneCell(theadTr);
cloneCell(tfoot);

Array.from(tbody).forEach((element) => {
  cloneCell(element.children);
});
