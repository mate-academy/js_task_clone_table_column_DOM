'use strict';

const columns = document.querySelectorAll('tr');

for (const column of columns) {
  const cells = column.children;

  const tableElement
    = document.createElement(`${cells[1].tagName.toLowerCase()}`);

  tableElement.innerText = cells[1].innerText;

  column.lastElementChild.before(tableElement);
}
