'use strict';

const thead = document.querySelector('thead');
const trHead = thead.children;

const tbody = document.querySelector('tbody');
const trBody = tbody.children;

const tfoot = document.querySelector('tfoot');
const trFoot = tfoot.children;

addColumn(trHead)
addColumn(trBody)
addColumn(trFoot)

function addColumn(array) {
  [...array].forEach(elem => {
    const td = elem.children;
    td[td.length - 1].before(td[1].cloneNode(true))
  });
}
