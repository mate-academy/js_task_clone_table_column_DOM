'use strict';

const table = document.querySelector('table');

const tableHead = table.querySelector('thead');

const columnToCopyHead =
  tableHead.querySelector('tr').firstElementChild.nextElementSibling;

tableHead
  .querySelector('tr')
  .lastElementChild.before(columnToCopyHead.cloneNode(true));

const tableFoot = table.querySelector('tfoot');

const columnToCopyFoot =
  tableFoot.querySelector('tr').firstElementChild.nextElementSibling;

tableFoot
  .querySelector('tr')
  .lastElementChild.before(columnToCopyFoot.cloneNode(true));

const tableBody = table.querySelector('tbody');

for (const child of tableBody.children) {
  const columnToCopyBody = child.firstElementChild.nextElementSibling;

  child.lastElementChild.before(columnToCopyBody.cloneNode(true));
}
