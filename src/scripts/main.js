'use strict';

const trCollection = document.querySelectorAll('tr');

for (let i = 0; i < trCollection.length; i++) {
  const tableRow = trCollection[i];
  const tableCell = tableRow.children[1].cloneNode(true);
  const trChildren = tableRow.children;

  trChildren[trChildren.length - 1].before(tableCell);
}
