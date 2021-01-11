'use strict';

const table = document.querySelector('table');
const tr = table.rows;

const allChildren = [...tr].map(children =>
  [...children.cells].map(elem => elem.outerHTML));

for (let i = 0; i < tr.length; i++) {
  const copyElem = allChildren[i][1];
  const lastElem = tr[i].cells[tr[i].cells.length - 1];

  lastElem.insertAdjacentHTML('beforebegin', copyElem);
}
