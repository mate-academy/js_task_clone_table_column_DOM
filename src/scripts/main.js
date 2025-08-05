'use strict';

const $tableHeader = document.querySelector('thead');
const $tableBody = document.querySelector('tbody');
const $tableFooter = document.querySelector('tfoot');

function cloneSecondColumnBeforeLast(tableElement) {
  const elementChildren = tableElement.children;
  const secondColumn = elementChildren[1];
  const beforeLast = elementChildren[elementChildren.length - 1];

  beforeLast.before(secondColumn.cloneNode(true));
}

cloneSecondColumnBeforeLast($tableHeader.firstElementChild);

Array.from($tableBody.children).forEach((row) => {
  cloneSecondColumnBeforeLast(row);
});
cloneSecondColumnBeforeLast($tableFooter.firstElementChild);
