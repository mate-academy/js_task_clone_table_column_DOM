'use strict';

const tableElement = document.querySelector('table').children;
const [thead, tbody, tfood] = tableElement;

function cloneTableColumn(element) {
  [...element].forEach(tr => {
    tr.children[3].insertAdjacentHTML('afterend', tr.children[1].outerHTML);
  });
}

cloneTableColumn(thead.children);
cloneTableColumn(tbody.children);
cloneTableColumn(tfood.children);
