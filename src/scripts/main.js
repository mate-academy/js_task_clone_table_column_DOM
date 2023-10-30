'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const tfoot = document.querySelector('tfoot');

function cloneTableColumn(element) {
  Array.from(element.children).map(row => {
    const secondChild = row.children[1];
    const cloneChild = secondChild.cloneNode(true);

    row.insertBefore(cloneChild, row.children[row.children.length - 2]);
  });
}

cloneTableColumn(thead);
cloneTableColumn(tbody);
cloneTableColumn(tfoot);
