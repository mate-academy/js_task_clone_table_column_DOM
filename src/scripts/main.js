'use strict';

const tableElement = document.querySelector('table').children;
const [thead, tbody, tfoot] = tableElement;

const cloneTableElements = (element) => {
  [...element].forEach(tr => (
    tr.children[3].insertAdjacentHTML('afterend', tr.children[1].outerHTML)
  ));
};

cloneTableElements(thead.children);
cloneTableElements(tbody.children);
cloneTableElements(tfoot.children);
