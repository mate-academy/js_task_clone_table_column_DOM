'use strict';

const table = document.querySelector('table');

const copyPastleColumn = (tr, copyIndex, pastleIndex) => {
  const copyNode = tr.children[copyIndex].cloneNode(true);

  tr.children[pastleIndex - 1].insertAdjacentElement('afterend', copyNode);
};

[...table.children].forEach((tableElement) => {
  [...tableElement.children].forEach((tr) => {
    copyPastleColumn(tr, 1, 4);
  });
});
